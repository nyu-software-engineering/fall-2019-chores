const mongoose = require('mongoose');
const Household = new mongoose.Schema({
	admin: {
	  type: Person,
	  required: false
	},
	chores: [mongoose.Schema.Types.ObjectId],
	members: [mongoose.Schema.Types.ObjectId],
	title: {
	  type: String,
	  required: true,
	  minlength: 3,
	  maxlength: 20,
	  trim: true
	}
  });
  
  Household.plugin(URLSlugs("title"));
  module.exports = Household;

  export function getTitle() {
	return this.title;
  }
  
  export function setTitle(title) {
	if (title instanceof String) this.title = title;
  }

  export function getAdmin() {
    return this.admin ? this.admin: null;
  }

  export function setAdmin(person) {
    if(person instanceof Person) {
		if(this.members.some(member => member === person._id)) {
			this.admin = person._id;
		}
	}
  }

  export function addMember(person) {
	  if(person instanceof Person) {
		  if()
		this.members.push(person._id);
	  }
  }

  export function removeMember(person) {
    this.members.pop(m);
  }

  export function addChore(c) {
    this.chores.push(c);
  }

  export function removeChore(c) {
    this.chores.pop(c);
  }

  export function isEmpty() {
    return this.members.length == 0 ? true : false;
  }

  addPersontoHousehold(person) {
    this.members.push(person);
  }
