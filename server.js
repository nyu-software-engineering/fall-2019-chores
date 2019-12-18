const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const apiRoutes = require('./server/routes/house');
const authRoute = require('./server/routes/auth');

const Household = require('../src/household');
const Person = require('../src/person');
const Chore = require('../src/chore');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'super secret';

const API_PORT = 3001;
const app = express();
app.use(cors());

const router = express.Router();

// const filename = 'cluster_address.txt';
// const mongodb = fs.readFileSync(process.cwd() + '/' + filename).toString();

// connects our back end code with the database
// mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(
   'mongodb+srv://Ulbert:UV64PnAvzmVxvteJrThZ@cluster0-bjcxv.mongodb.net/housekeeper?retryWrites=true&w=majority',
   { useNewUrlParser: true, useUnifiedTopology: true }
);

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
      .catch(error => res.json({ error: error.message }));
});

/* new household
   req should include object containing necessary household info
   res should return whether it was added successfully */
router.post('/household', (req, res) => {
   const newHousehold = new Household(req.body);
   newHousehold.save((err, household) => {
      if (err) {
         res.status(400).json({
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
         res.status(400).json({
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
         res.status(400).json({
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
         res.status(400).json({
            success: false,
            error: err,
         });
      } else {
         res.status(200).json({
            success: true,
         });
      }
   });
});

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
      res.status(200).json({ success: true });
   });
});

/* delete person
   req should include person object id
   res should return whether removal was successful */
router.delete('/person/:id', (req, res) => {
   Person.findByIdAndRemove(req.params.id, err => {
      if (err) return res.json({ success: false, error: err });
      res.status(200).json({ success: true });
   });
});

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

app.use(passport.initialize());
require('./server/passport')(passport);

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
