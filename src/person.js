const mongoose = require('mongoose');
// const URLSlugs = require('mongoose-url-slugs');

const Chore = require('../src/chore');
const Household = require('../src/household');

const personSchema = new mongoose.Schema({
	assigned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chore' }],
	firstName: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 20,
		trim: true,
	},
	households: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Household' }],
	lastName: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 20,
		trim: true,
	},
	phoneNum: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 10,
	},
	score: {
		type: Number,
		required: false,
		min: 1,
		max: 5,
	},
	scoreCount: {
		type: Number,
		required: false,
		min: 1,
	},
});

// personSchema.plugin(URLSlugs('firstName'));
personSchema.methods = {
	//returns Chore title
	getFirstName: function() {
		return this.firstName;
	},

	//sets Person name to provided argument
	setFirstName: function(firstName) {
		this.firstName = firstName;
	},

	getLastName: function() {
		return this.lastName;
	},

	//sets Person name to provided argument
	setLastName: function(lastName) {
		this.lastName = lastName;
	},

	getLastName: function() {
		return this.lastName;
	},

	//sets Person name to provided argument
	setLastName: function(lastName) {
		this.lastName = lastName;
	},

	//sets Person name to provided argument
	setLastName: function(lastName) {
		this.lastName = lastName;
	},
	//returns Person score
	getScore: function() {
		if (this.score === undefined) return -1;
		else {
			return this.score;
		}
	},

	//adds score to Person by incrementing score count and recalculating overall score
	addScore: function(newScore) {
		if (this.score == undefined) this.score = 0;
		if (this.scoreCount == undefined) this.scoreCount = 0;
		this.score =
			(this.scoreCount * this.score + newScore) / ++this.scoreCount;
	},

	//assigns Chore in argument to the Person
	assignChore: function(chore, household) {
		if (chore instanceof Chore) {
			if (this.assigned.indexOf(chore._id) === -1) {
				this.assigned.push(chore._id);
			}
		}

		if (household instanceof Household) {
			if (!household.containsChore(chore)) {
				household.addChore(chore);
			}
		}
	},

	//checks if a given Chore argument is assigned
	isAssigned: function(chore) {
		return this.assigned.indexOf(chore._id) !== -1 ? true : false;
	},

	//returns an array of all incomplete Chores
	incomplete: function() {
		return this.assigned.length > 0 ? true : false;
	},

	//unassigns a Chore from a Person
	unassign: function(chore) {
		const index = this.assigned.indexOf(chore._id);
		if (index !== -1) {
			this.assigned[index].status = 0;
			this.assigned.splice(index, 1);
		}
	},

	//changes phone number to provided argument
	changeNumber: function(number) {
		this.phoneNum = number;
	},

	//returns person's phone number as a string
	getNumber: function() {
		return this.phoneNum;
	},

	//adds Household (object id) in argument to list of Households
	addHousehold: function(household) {
		if (household instanceof Household) {
			const index = this.households.indexOf(household._id);
			if (index === -1) {
				this.households.push(household._id);
				if (!household.containsPerson(this) && this instanceof person) {
					household.addMember(this);
				}
			}
		}
	},

	//checks if a given Chore argument is assigned
	hasHousehold: function(household) {
		return this.households.indexOf(household._id) !== -1 ? true : false;
	},

	//adds Household (object id) in argument to list of Households
	removeHousehold: function(household) {
		const index = this.households.indexOf(household._id);
		if (index !== -1) {
			this.households.splice(index, 1);
			if (household.containsPerson(this)) {
				household.removeMember(this);
			}
		}
	},
};

const person = mongoose.model('Person', personSchema);
module.exports = person;
