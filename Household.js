
class Household {
	constructor(id, title, admin, owner) {
		this.id = id;
		this.title = title;
		this.admin = admin;
		this.owner = owner;
		this.members = [];
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
}

function getHouseholdInfo(household) {
  	var info {
		"Household ID: ": this.household.getID(),
		"Household: ": this.household.getTitle(),
		{household.getAdmin() ? "Admin: True" : null},
		"Owner: ": this.household.getOwner(),
}
