const express = require('express');
const passport = require('passport');
const Person = require('../person');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'super secret';
const router = express.Router();
const bcrypt = require('bcryptjs');

/* new person & join household
   req should include object containing necessary person info
   req should (optionally) include a household id if joining a household
   res should return whether it was added successfully */
router.post('/signup', (req, res) => {
	console.log(req.body);
	const newPerson = new Person(req.body[0]);
	newPerson.save((err, person) => {
		if (err) {
			res.status(400).json({
				success: false,
				error: err,
			});
		} else {
			if (req.body[1]) {
				person.addHousehold(req.body[1].id);
			}
			res.status(200).json({
				success: true,
				id: person._id,
			});
		}
	});
});

/* logs in a user
   req should include username and password
   res should return whether user logged in successfully */
router.post('/login', async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const user = await Person.findOne({ username }).select('+password');

	if (!user) {
		return res.status(400).json('No account found.');
	}

	isMatch = await bcrypt.compare(password, user.password);

	// return 400 if password does not match
	if (!isMatch) {
		return res.status(400).json('Password is incorrect.');
	}

	const payload = {
		id: user._id,
		username: user.username,
	};

	// return 500 if token is incorrect
	if (!token) {
		return res.status(500).json({
			error: 'Error signing token',
			raw: err,
		});
	}

	token = await jwt.sign(payload, secret, { expiresIn: 36000 });

	return res.json({
		success: true,
	});
});

router.get(
	'/me',
	passport.authenticate('jwt', { session: false }),
	async function(req, res, next) {
		const username = req.user.username;
		const dbPerson = await Person.findOne({ username });
		res.status(200).json(dbPerson);
	}
);

module.exports = router;
