const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
const Person = require('../src/person');

const HouseholdSchema = new mongoose.Schema({
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

HouseholdSchema.plugin(URLSlugs('title'));

const mongoose = require('mongoose');

HouseholdSchema.methods = {
	getTitle: function() {
		return this.title;
	},

	setTitle: function(title) {
		if (title instanceof String) this.title = title;
	},

	getAdmin: function() {
		return this.admin ? this.admin : null;
	},

	setAdmin: function(person) {
		if (person instanceof Person) {
			if (this.members.some(member => member === person._id)) {
				this.admin = person._id;
			}
		}
	},

	addMember: function(person) {
		if (person instanceof Person) {
			if (!this.members.indexOf(person._id)) {
				this.members.push(person._id);
			}
		}
	},

	removeMember: function(person) {
		const index = this.members.indexOf(person._id);
		if (index !== -1) {
			members.splice(index, 1);
		}
	},

	addChore: function(chore) {
		if (chore instanceof Chore) {
			if (this.chores.indexOf(chore._id) === -1) {
				this.chores.push(chore._id);
			}
		}
	},

	removeChore: function(chore) {
		const index = this.chores.indexOf(chore._id);
		if (index !== -1) {
			chores.splice(index, 1);
		}
	},

	containsChore: function(chore) {
		return this.chores.indexOf(chore._id) !== -1;
	},

	containsPerson: function(person) {
		return this.members.indexOf(person._id) !== -1;
	},

	getCreated: function() {
		return this.createdOn;
	},
};

const Household = mongoose.model('Household', HouseholdSchema);
module.exports = Household;
