const mongoose = require('mongoose');
const Chore = require('../src/chore');
const Household = require('../src/household');

const PersonSchema = new mongoose.Schema({
	assigned: [mongoose.Schema.Types.ObjectId],
	households: [mongoose.Schema.Types.ObjectId],
	name: {
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

// PersonSchema.plugin(URLSlugs('name'));
PersonSchema.methods = {
	//returns Chore title
	getName: function() {
		return this.name;
	},

	//sets Person name to provided argument
	setName: function(name) {
		this.name = name;
	},

	//returns Person score
	getScore: function() {
		if (this.scoreCount == 0) return -1;
		else {
			return this.score;
		}
	},

	//adds score to Person by incrementing score count and recalculating overall score
	addScore: function(newScore) {
		this.score =
			(this.scoreCount * this.score + newScore) / ++this.scoreCount;
	},

	//assigns Chore in argument to the Person
	assignChore: function(chore) {
		if (chore instanceof Chore) {
			if (this.assigned.indexOf(chore._id) === -1) {
				this.assigned.push(chore._id);
			}
		}
	},

	//checks if a given Chore argument is assigned
	isAssigned: function(chore) {
		return this.assigned.indexOf(chore._id) !== -1 ? true : false;
	},

	//returns an array of all incomplete Chores
	incomplete: function() {
		return this.assigned.filter(chore => chore.status < 2);
	},

	//unassigns a Chore from a Person
	unassign: function(chore) {
		const index = this.chores.indexOf(chore._id);
		if (index !== -1) {
			this.chores[index].status = 0;
			this.chores.splice(index, 1);
		}
	},

	//changes phone number to provided argument
	changeNumber: function(number) {
		this.phoneNum = number;
	},

	//adds Household (object id) in argument to list of Households
	addHousehold: function(household) {
		if (household instanceof Household) {
			const index = this.households.indexOf(household._id);
			if (index !== -1) {
				this.households.push(household._id);
				if (!household.containsPerson(this)) {
					household.addMember(this);
				}
			}
		}
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

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
