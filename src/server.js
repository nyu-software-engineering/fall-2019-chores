const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const Household = require('../src/household');
const Person = require('../src/person');
const Chore = require('../src/chore');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const mongodb =
	'mongodb+srv://Ulbert:<password>@cluster0-bjcxv.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(mongodb, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* get current database data
   slug should be user id
   should find and return all household info pertaining to that user as a regular object with objects instead of ids */
router.get('/household/:id', (req, res) => {
	Household.findById(req.params.id)
		.lean()
		.populate('chores')
		.populate({
			path: 'members',
			populate: [
				{
					path: 'assigned',
					model: 'Chore',
				},
				{
					path: 'households',
					model: 'Household',
				},
			],
		})
		.then(household => res.json({ household }))
		.catch(error => res.json({ error: error.message }));
});

/* new chore
   req should include object containing necessary chore info
   res should return whether it was added successfully */
router.post('/chore', (req, res) => {
	const chore = new Chore(req.body.chore);
	chore.save(err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

/* update chore
   req should include relevant chore with all its info
   res should include whether it was updated */
router.post('/chore/:id', (req, res) => {
	const chore = new Chore(req.body.chore);

	Chore.findByIdAndReplace(req.params.id, chore, err => {
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});

/* delete chore
   req should include chore object id
   res should return whether removal was successful */
router.delete('/chore/:id', (req, res) => {
	const id = req.body.id;
	Chore.findByIdAndRemove(id, err => {
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});

/* new person
   req should include object containing necessary person info
   res should return whether it was added successfully */
router.post('/person', (req, res) => {
	const person = new Person(req.body.person);
	person.save(err => {
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});

/* update person
   req should include relevant chore with all its info
   res should include whether it was updated */
router.post('/person/:id', (req, res) => {
	const person = new Person(req.body.person);

	Person.findByIdAndReplace(req.params.id, person, err => {
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});

/* delete person
   req should include person object id
   res should return whether removal was successful */
router.delete('/person/:id', (req, res) => {
	const id = req.body.id;
	Person.findByIdAndRemove(id, err => {
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
