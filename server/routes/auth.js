var express = require('express');
var router = express.Router();
const Person = require('../person');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'some other secret as default';
const passport = require('passport');

router.post('/signup', async(req, res) => {
  const user = await Person.findOne({ username: req.body.username });

  const newPerson = new Person({...req.body });
  try {
    const person = await newPerson.save();
    return res.json({ message: 'User created' })
  } catch (e) {
    errors = e;
    return res.status(400).json(e);
  }
});

router.post('/login', async(req, res) => {
  const errors = {};
  const username = req.body.username
  const password = req.body.password;

  const user = await Person.findOne({ username }).select("+password");

  if (!user) {
    errors.message = "No Account Found";
    return res.status(400).json(errors);
  }

  isMatch = await bcrypt.compare(password, user.password);

  // return 400 if password does not match
  if (!isMatch) {
    errors.message = "Password is incorrect";
    return res.status(400).json(errors);
  }

  const payload = {
    id: user._id,
    username: user.username
  };

  token = await jwt.sign(payload, secret, { expiresIn: 36000 });

  // return 500 if token is incorrect
  if (!token) {
    return res.status(500)
      .json({
        error: "Error signing token",
        raw: err
      });
  }

  return res.json({
    success: true,
    token
  });
});

router.get('/me', passport.authenticate('jwt', { session: false }), async function(req, res, next) {
  const username = req.user.username;
  const dbPerson = await Person.findOne({ username });
  res.status(200).json(dbPerson);
});

module.exports = router;
