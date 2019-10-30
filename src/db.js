const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const Chore = new mongoose.Schema({
  criteria: {
    type: [String],
    required: false,
    min: 1
  },
  late: {
    type: Boolean,
    required: false
  },
  //0: unassigned
  //1: assigned, incomplete
  //2: completed
  status: {
    type: Number,
    required: true,
    min: 0,
    max: 2
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  }
});

const Household = new mongoose.Schema({
  chores: [Chore],
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    trim: true
  }
});

const Person = new mongoose.Schema({
  assigned: {
    type: [Chore],
    required: false,
    min: 1
  },
  household: {
    type: [Household],
    required: false
  },
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  phoneNum: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  score: {
    type: Number,
    required: false,
    min: 1,
    max: 5
  }
});

Household.plugin(URLSlugs("title"));
Person.plugin(URLSlugs("name"));
const houseModel = {
  Chore: mongoose.model("Chore", Chore),
  Person: mongoose.model("Person", Person),
  Household: mongoose.model("Household", Household)
};

mongoose.connect("mongodb://localhost/housekeeper", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = houseModel;
