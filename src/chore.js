const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const ChoreSchema = new mongoose.Schema({
	completed: {
		type: Date,
		required: false,
	},
	created: {
		type: Date,
		default: Date.now,
	},
	criteria: {
		type: [String],
		required: false,
		min: 1,
	},
	due: {
		type: Date,
		required: false,
	},
	late: {
		type: Boolean,
		required: false,
	},
	//0: unassigned
	//1: assigned, incomplete
	//2: completed
	status: {
		type: Number,
		required: false,
		default: 0,
		min: 0,
		max: 2,
	},
	title: {
		type: String,
		required: true,
		minlength: 3,
		trim: true,
	},
});

ChoreSchema.plugin(URLSlugs('title'));

ChoreSchema.methods = {
	//returns title of chore
	getTitle: function() {
		return this.title;
	},

	//assigns string argument as title
	setTitle: function(title) {
		this.title = title;
	},

	//returns date created
	createdOn: function() {
		return this.created;
	},

	//returns due date
	dueOn: function() {
		return this.due ? this.due : null;
	},

	//assigns due date to Date argument provided
	setDueDate: function(date) {
		this.due = date;
	},

	//returns date completed if complete, otherwise null
	completedOn: function() {
		return this.completed ? this.completed : null;
	},

	//returns status as numerical code
	//0 is unassigned
	//1 is assigned
	//2 is completed
	getStatus: function() {
		return this.status;
	},

	//sets status to be unassigned, also unsets completed property
	markUnassigned: function() {
		this.status = 0;
		this.completed = null;
	},

	//sets status to be assigned, also unsets completed property
	markAssigned: function() {
		this.status = 1;
		this.completed = null;
	},

	//sets status to be complete, also unsets completed property
	markComplete: function() {
		this.status = 2;
		this.completed = Date.now();
	},

	//returns true or false depending on if the due date has passed
	checkLate: function() {
		if (this.late) {
			return true;
		} else if (Date.now() > this.due) {
			this.late = true;
			return true;
		}
		return false;
	},

	//returns array of strings, each containing a bullet point description of the chore
	getCriteria: function() {
		return this.criteria;
	},

	//adds a bullet point to the chore description
	addCriteria: function(desc) {
		this.criteria.push(desc);
	},

	//remvoes a bullet point from the chore description
	removeCriteria: function(index) {
		if (index < 0 && index < this.criteria.length) {
			this.criteria.splice(index, 1);
		}
	},
};

const Chore = mongoose.model('Chore', ChoreSchema);
module.exports = Chore;
