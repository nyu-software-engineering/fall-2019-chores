const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Household = new mongoose.Schema({
	chores: [Chores],
	members: [Person],
	title: {
		type: String,
		required: true,
		minLength: 3,
		trim: true
	}
});

const Person = new mongoose.Schema({
	assigned: {
		type: [Chore],
		required: true
	},
	household: {
		type: Household,
		required: true
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
		minLength: 10
	},
	score: {
        type: Number,
        required: true,
		min: 1,
		max: 5
	}
});

const Chore = new mongoose.Schema({
	assignedTo: {
		type: Person,
		required: false,
	},
	criteria: {
        type: [String],
        required: false,
        min: 1
	},
	late: {
		type: Boolean,
		required: true
	},
	//0: unassigned
	//1: assigned, incomplete
	//2: completed
	status: {
		type: Number,
		required: true,
		min: 0,
		max: 2,
	},
    title: {
        type: String,
        required: true,
		minlength: 3,
		trim: true
    }
});

Household.plugin(URLSlugs('title'));
const houseModel = {
	Chore: mongoose.model('Chore', Chore),
	Person: mongoose.model('Person', Person),
    Household: mongoose.model('Household', Household)
};

mongoose.connect(
    "mongodb://localhost/housekeeper", {
        useNewUrlParser: true
    }
);

module.exports = houseModel; 