const mongoose = require('mongoose');
const Household = new mongoose.Schema({
	admin: {
		type: Person,
		required: false,
	},
	chores: [mongoose.Schema.Types.ObjectId],
	createdOn: {
		type: Date,
		default: Date.now(),
	},
	members: [mongoose.Schema.Types.ObjectId],
	title: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
});

Household.plugin(URLSlugs('title'));
module.exports = Household;

export function getTitle() {
	return this.title;
}

export function setTitle(title) {
	if (title instanceof String) this.title = title;
}

export function getAdmin() {
	return this.admin ? this.admin : null;
}

export function setAdmin(person) {
	if (person instanceof Person) {
		if (this.members.some(member => member === person._id)) {
			this.admin = person._id;
		}
	}
}

export function addMember(person) {
	if (person instanceof Person) {
		if (!this.members.indexOf(person._id)) {
			this.members.push(person._id);
		}
	}
}

export function removeMember(person) {
	const index = this.members.indexOf(person._id);
	if (index !== -1) {
		members.splice(index, 1);
	}
}

export function addChore(chore) {
	if (chore instanceof Chore) {
		if (this.chores.indexOf(chore._id) === -1) {
			this.chores.push(chore._id);
		}
	}
}

export function removeChore(chore) {
	const index = this.chores.indexOf(chore._id);
	if (index !== -1) {
		chores.splice(index, 1);
	}
}

export function containsChore(chore) {
	return this.chores.indexOf(chore._id) !== -1;
}

export function containsPerson(person) {
	return this.members.indexOf(person._id) !== -1;
}

export function getCreated() {
	return this.createdOn;
}
