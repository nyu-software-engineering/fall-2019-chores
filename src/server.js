const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

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

// req should include the user's id
// should find and return all household info as a regular object with objects instead of ids
router.get('/getHousehold', (req, res) => {
	Data.find((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

// req should include object containing necessary chore info
// res should return whether it was added successfully
router.post('/addChore', (req, res) => {
	const { id, update } = req.body;
	Data.findByIdAndUpdate(id, update, err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// req should include chore object id
// res should return whether removal was successful
router.post('/removeChore', (req, res) => {
	const { id, update } = req.body;
	Data.findByIdAndUpdate(id, update, err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// req should include relevant chore with all its info
// res should include whether it was updated
router.post('/updateChore', (req, res) => {
	const { id, update } = req.body;
	Data.findByIdAndUpdate(id, update, err => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// req should contain Person object with updated changes
// res should return whether the corresponding database entry was updated
router.post('/updatePerson', (req, res) => {
	const { id } = req.body;
	Data.findByIdAndRemove(id, err => {
		if (err) return res.send(err);
		return res.json({ success: true });
	});
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
