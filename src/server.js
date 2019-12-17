const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const Household = require('../src/household');
const Person = require('../src/person');
const Chore = require('../src/chore');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const filename = 'cluster_address.txt';
const mongodb = fs.readFileSync(process.cwd() + '/' + filename).toString();

// connects our back end code with the database
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('CONNECTED TO CLUSTER'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
	res.send(
		'/api is not a valid path: please append with /chore, /household or /person depending on purpose.'
	);
});
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
		.catch(error => {
			console.log('GET FAIL');
			res.json({ error: error.message });
		});
});

/* new household
   req should include object containing necessary household info
   res should return whether it was added successfully */
router.post('/household', (req, res) => {
	const newHousehold = new Household(req.body);
	newHousehold.save((err, household) => {
		if (err) {
			console.log('SAVE FAIL');
			res.json({
				success: false,
				error: err,
			});
		} else {
			res.json({
				success: true,
				id: household._id,
			});
		}
	});
});

/* new chore
   req should include object containing necessary chore info
   res should return whether it was added successfully */
router.post('/chore', (req, res) => {
	const newChore = new Chore(req.body);
	newChore.save((err, chore) => {
		if (err) {
			console.log('POST FAIL');
			res.json({
				success: false,
				error: err,
			});
		} else {
			res.json({
				success: true,
				id: chore._id,
			});
		}
	});
});

/* update chore
   req should include relevant chore with all its info
   res should include whether it was updated */
router.post('/chore/:id', (req, res) => {
	const chore = new Chore(req.body);

	Chore.findByIdAndReplace(req.params.id, chore, err => {
		if (err) {
			console.log('POST FAIL');
			res.json({
				success: false,
				error: err,
			});
		} else {
			res.json({
				success: true,
			});
		}
	});
});

/* delete chore
   req should include chore object id
   res should return whether removal was successful */
router.delete('/chore/:id', (req, res) => {
	Chore.findByIdAndRemove(req.params.id, err => {
		if (err) {
			console.log('DELETE FAIL');
			res.json({
				success: false,
				error: err,
			});
		} else {
			res.json({
				success: true,
			});
		}
	});
});

/* login person 
   req should include user phone number and password
   res should return whether password is correct and person id if correct */
router.post('/login', (req, res) => {
	console.log(req.body);

	//TODO password validation awaiting passport integration
	Person.findOne({ phoneNum: req.body.phoneNum }, (err, user) => {
		if (err || user === null) {
			console.log('LOGIN FAIL');
			res.json({
				success: false,
				error: err,
			});
		} else {
			console.log('LOGIN SUCCESS');

			if (user.households[0]) {
				res.json({
					success: true,
					personID: user._id,
					householdID: user.households[0]._id,
				});
			} else {
				console.log('USER HAS NO HOUSEHOLD');
				res.json({
					success: true,
					personID: user._id,
				});
			}
		}
	});
});

/* new person & join household 
   req should include object containing necessary person info
   req should (optionally) include a household id if joining a household
   res should return whether it was added successfully */
router.post('/person', (req, res) => {
	console.log(req.body);
	const newPerson = new Person(req.body[0]);
	newPerson.save((err, person) => {
		if (err) {
			console.log('POST FAIL');
			res.json({
				success: false,
				error: err,
			});
		} else {
			if (req.body[1]) {
				person.addHousehold(req.body[1].id);
			}
			res.json({
				success: true,
				id: person._id,
			});
		}
	});
});

/* join person with household
   req should include object containing necessary person info
   res should return whether it was added successfully */
router.put('/person', (req, res) => {
	const person = Person.findById(req.body[0].id);
	const household = Household.findById(req.body[1].id);

	person.addHousehold(household);
});

/* update person
   req should include relevant chore with all its info
   res should include whether it was updated */
router.post('/person/:id', (req, res) => {
	const person = new Person(req.body);

	Person.findByIdAndReplace(req.params.id, person, err => {
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});

/* delete person
   req should include person object id
   res should return whether removal was successful */
router.delete('/person/:id', (req, res) => {
	Person.findByIdAndRemove(req.params.id, err => {
		if (err) {
			console.log('DELETE FAIL');
			res.json({ success: false, error: err });
		} else {
			res.json({ success: true });
		}
	});
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
