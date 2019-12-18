const mongoose = require('mongoose');
// const URLSlugs = require('mongoose-url-slugs');

const Chore = require('../chore');

const householdSchema = new mongoose.Schema({
	admin: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	chores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chore' }],
	createdOn: {
		type: Date,
		default: Date.now(),
	},
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
	title: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
});

// householdSchema.plugin(URLSlugs('title'));

householdSchema.methods = {
	//returns String containing household title
	getTitle: function() {
		return this.title;
	},

	//assigns string argument as title
	setTitle: function(title) {
		if (title instanceof String) this.title = title;
	},

	//returns admin (object id) if one exists, or null if not
	getAdmin: function() {
		return this.admin ? this.admin : null;
	},

	//assigns Person as admin
	setAdmin: function(person) {
		if (this.members.some(member => member === person._id)) {
			this.admin = person._id;
		}
	},

	//adds Person to the Household
	addMember: function(person) {
		if (!this.members.indexOf(person._id)) {
			this.members.push(person._id);
		}
	},

	//removes Person from the Household
	removeMember: function(person) {
		const index = this.members.indexOf(person._id);
		if (index !== -1) {
			this.members.splice(index, 1);
		}
	},

	//adds Chore argument to list of Chores
	addChore: function(chore) {
		if (chore instanceof Chore) {
			if (this.chores.indexOf(chore._id) === -1) {
				this.chores.push(chore._id);
			}
		}
	},

	//removes the Chore provided from the list of Chores
	removeChore: function(chore) {
		const index = this.chores.indexOf(chore._id);
		if (index !== -1) {
			this.chores.splice(index, 1);
		}
	},

	//returns whether a given Chore is in the list of Chores
	containsChore: function(chore) {
		return this.chores.indexOf(chore._id) !== -1;
	},

	//returns whether a given Person is in the list of members
	containsPerson: function(person) {
		return this.members.indexOf(person._id) !== -1;
	},

	//returns Date object containing the Household's creation date
	getCreated: function() {
		return this.createdOn;
	},
};

const household = mongoose.model('Household', householdSchema);
module.exports = household;
