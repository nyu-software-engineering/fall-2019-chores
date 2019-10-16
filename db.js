const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Household = new mongoose.Schema({
	members: [Person],
	title: {
		type: String,
		required: true,
		minLength: 3,
		trim: true
	}
});

const Person = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	score: {
        type: Number,
        required: true,
		min: 1,
		max: 5
    },
	chores: [Chore]
});

const Chore = new mongoose.Schema({
    title: {
        type: String,
        required: true,
		minlength: 3,
		trim: true
    },
    conditions: {
        type: [String],
        required: false,
        min: 1
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
	late: {
		type: Boolean,
		required: true
	}
});

Household.plugin(URLSlugs('title'));
const houseModel = {
    Household: mongoose.model('Household', Household),
	Person: mongoose.model('Person', Person),
	Chore: mongoose.model('Chore', Chore)
};

mongoose.connect(
    "mongodb://localhost/housekeeper", {
        useNewUrlParser: true
    }
);

module.exports = houseModel; 