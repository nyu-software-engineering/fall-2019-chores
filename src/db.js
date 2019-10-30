const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const ChoreSchema = new mongoose.Schema({
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

const HouseholdSchema = new mongoose.Schema({
  chores: [ChoreSchema],
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    trim: true
  }
});

const PersonSchema = new mongoose.Schema({
  assigned: {
    type: [ChoreSchema],
    required: false,
    min: 1
  },
  household: {
    type: [HouseholdSchema],
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

HouseholdSchema.plugin(URLSlugs("title"));
PersonSchema.plugin(URLSlugs("name"));
const houseModel = {
  ChoreSchema: mongoose.model("ChoreSchema", ChoreSchema),
  PersonSchema: mongoose.model("PersonSchema", PersonSchema),
  HouseholdSchema: mongoose.model("HouseholdSchema", HouseholdSchema)
};

mongoose.connect("mongodb://localhost/housekeeper", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = houseModel;
