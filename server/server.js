const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const passport = require('passport');

const API_PORT = 3001;
const app = express();
app.use(cors());

const api = require('../server/routes/house');
const auth = require('../server/routes/auth');

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

app.use(passport.initialize());
require('./server/passport')(passport);

// append /api and /auth for our http requests
app.use('/api', api);
app.use('/auth', auth);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
