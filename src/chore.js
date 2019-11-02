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
	getTitle: function() {
		return this.title;
	},
	setTitle: function(title) {
		this.title = title;
	},

	createdOn: function() {
		return this.created;
	},

	dueOn: function() {
		return this.due ? this.due : null;
	},

	setDueDate: function(date) {
		this.due = date;
	},

	completedOn: function() {
		return this.completed ? this.completed : null;
	},

	getStatus: function() {
		return this.status;
	},

	markUnassigned: function() {
		this.status = 0;
		this.completed = null;
	},

	markAssigned: function() {
		this.status = 1;
		this.completed = null;
	},

	markComplete: function() {
		this.status = 2;
		this.completed = Date.now();
	},

	checkLate: function() {
		if (this.late) {
			return true;
		} else if (Date.now() > this.due) {
			this.late = true;
			return true;
		}
		return false;
	},

	getCriteria: function() {
		return this.criteria;
	},

	addCriteria: function(desc) {
		this.criteria.push(desc);
	},

	removeCriteria: function(index) {
		if (index < 0 && index < this.criteria.length) {
			this.criteria.splice(index, 1);
		}
	},
};

const Chore = mongoose.model('Chore', ChoreSchema);
module.exports = Chore;
