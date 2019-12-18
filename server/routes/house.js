const express = require('express');

const Household = require('../household');
const Person = require('../person');
const Chore = require('../chore');

const router = express.Router();

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
		.catch(error => res.json({ error: error.message }));
});

/* get all household database data
   slug should be user id
   should find and return all household info pertaining to that user as a regular object with objects instead of ids */
router.get('/households', (req, res) => {
	Household.find()
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
		.then(households => res.json(households))
		.catch(error => res.json({ error: error.message }));
});

router.get('/chores', (req, res) => {
	Chore.find()
		.then(chores => res.json(chores))
		.catch(error => res.json({ error: error.message }));
});

/* new household
   req should include object containing necessary household info
   res should return whether it was added successfully */
router.post('/household', (req, res) => {
	const newHousehold = new Household(req.body);
	newHousehold.save((err, household) => {
		if (err) {
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

/* new person & join household 
   req should include object containing necessary person info
   req should (optionally) include a household id if joining a household
   res should return whether it was added successfully */
router.post('/person', (req, res) => {
	console.log(req.body);
	const newPerson = new Person(req.body[0]);
	newPerson.save((err, person) => {
		if (err) {
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
		if (err) return res.json({ success: false, error: err });
		res.json({ success: true });
	});
});
module.exports = router;
