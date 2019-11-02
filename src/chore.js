const mongoose = require('mongoose');
const Chore = new mongoose.Schema({
	completedOn: {
		type: Date,
		required: false,
	},
	createdOn: {
		type: Date,
		default: Date.now,
	},
	criteria: {
		type: [String],
		required: false,
		min: 1,
	},
	dueOn: {
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

Chore.plugin(URLSlugs('title'));
module.exports = Chore;

export function getTitle() {
	return this.title;
}

export function setTitle(title) {
	if (title instanceof String) this.title = title;
}

export function createdOn() {
	return this.createdOn;
}

export function dueOn() {
	return this.due;
}

export function setDateDue(date) {
	if (!date) {
		this.due = Date.now();
	} else if (date instanceof Date) this.due = date;
}

export function completedOn() {
	return this.completedOn ? this.completedOn : null;
}

export function getStatus() {
	return this.status;
}

export function markUnassigned() {
	this.status = 0;
	this.completedOn = null;
}

export function markAssigned() {
	this.status = 1;
	this.completedOn = null;
}

export function markComplete() {
	this.status = 2;
	this.completedOn = Date.now();
}

export function checkLate() {
	if (this.late) {
		return true;
	} else if (Date.now() > this.due) {
		this.late = true;
		return true;
	}
	return false;
}

export function getCriteria() {
	return this.criteria;
}

export function addCriteria(desc) {
	if (desc instanceof String) {
		this.criteria.push(desc);
	}
}

export function removeCriteria(index) {
	if (index < 0 && index < this.criteria.length) {
		this.criteria.splice(index, 1);
	}
}
