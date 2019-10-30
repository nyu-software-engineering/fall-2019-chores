
class Household {
	constructor(id, title, admin, owner) {
		this.id = id;
		this.title = title;
		this.admin = admin;
		this.owner = owner;
		this.members = [];
		this.chores = [];
	}

	getID() {
		return this.id;
	}

	getTitle() {
		return this.title;
	}
	setTitle(t) {
		this.title = t;
	}

	getAdmin() {
		return this.admin;
	}
	setAdmin(a) {
		this.admin = a;
	}

	getOwner() {
		return this.owner;
	}
	setOwner(o) {
		this.owner = o;
	}

	getMembers() {
		return this.members;
	}

	getMember(i) {
		return members[i];
	}

	getNumMembers() {
		return members.length;
	}

	addMember(m) {
		members.push(m);
	}

	removeMember(m) {
		members.pop(m);
	}

	addChore(c) {
		chores.push(c);
	}

	removeChore(c) {
		chores.pop(c);
	}

	isEmpty() {
		return (members.length == 0) ? true : false;
	}

	module.exports = {
		Household;
	}
}

var households = [];
var count = 0;

function getHouseholdInfo(household) {
  	var info = {
		"Household ID: ": this.household.getID(),
		"Household: ": this.household.getTitle(),
		"Admin: ": this.household.getAdmin(),
		"Owner: ": this.household.getOwner(),
	}
}

function newHousehold(title, admin, owner) {
	var newHouse = new Household(title, admin, owner);
	households[count++] = newHouse;
}

function addPersontoHousehold(person, id) {
	households[id].members.push(person);
}

function removeHousehold(id) {
	households[id].pop();
}

