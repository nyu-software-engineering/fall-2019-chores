const mongoose = require("mongoose");
const Chore = require("../src/chore");
const Household = require("../src/household");

const Person = new mongoose.Schema({
  assigned: [mongoose.Schema.Types.ObjectId],
  households: [mongoose.Schema.Types.ObjectId],
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
    trim: true
  },
  phoneNum: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  score: {
    type: Number,
    required: false,
    min: 1,
    max: 5
  },
  scoreCount: {
    type: Number,
    required: false,
    min: 1
  }
});

Person.plugin(URLSlugs("name"));
module.exports = Person;

//returns Chore title
export function getName() {
  return this.name;
}

//sets Person name to provided argument
export function setName(name) {
  this.name = name;
}

//returns Person score
export function getScore() {
  if (this.scoreCount == 0) return -1;
  else {
    return this.score;
  }
}

//adds score to Person by incrementing score count and recalculating overall score
export function addScore(newScore) {
  this.score = (this.scoreCount * this.score + newScore) / ++this.scoreCount;
}

//assigns Chore in argument to the person
export function assignChore(chore) {
  if (chore instanceof Chore) {
    if (this.assigned.indexOf(chore._id) === -1) {
      this.assigned.push(chore._id);
    }
  }
}

//checks if a given Chore argument is assigned
export function isAssigned(chore) {
  return this.assigned.indexOf(chore._id) !== -1 ? true : false;
}

//returns an array of all incomplete Chores
export function incomplete() {
  return this.assigned.filter(chore => chore.status < 2);
}

//unassigns a Chore from a person
export function unassign(chore) {
  const index = this.chores.indexOf(chore._id);
  if (index !== -1) {
    this.chores[index].status = 0;
    this.chores.splice(index, 1);
  }
}

//changes phone number to provided argument
export function changeNumber(number) {
  this.phoneNum = number;
}

export function addHousehold(household) {
  if (household instanceof Household) {
    const index = this.households.indexOf(household._id);
    if (index !== -1) {
      this.households.push(household._id);
      if (!household.Household.containsPerson(this)) {
        household.Household.addMember(this);
      }
    }
  }
}

export function removeHousehold(household) {}
