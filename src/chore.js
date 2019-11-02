const { Dict } = require('collections/dict');

class Chore {
	constructor(title) {
		this.id;
		this.title = title;
		this.dateCreated = new Date();
		this.dateDue;
		this.dateCompleted;
		this.household;
		this.person;
		this.complete = false;
	}

	getID() {
		return this.id;
	}

	setID(id) {
		this.id = id;
	}

	getTitle() {
		return this.title;
	}

	setTitle(title) {
		this.title = title;
	}

	getDateCreated() {
		return this.dateCreated;
	}

	getDateDue() {
		return this.dateDue;
	}

	setDateDue(date) {
		var due = new Date(date);
		this.dateDue = due;
	}

	getDateCompleted() {
		return this.dateCompleted;
	}

	getHousehold() {
		return this.household;
	}

	setHousehold(household_id) {
		this.household = household_id;
	}

	getPerson() {
		return this.person;
	}

	setPerson(person_id) {
		this.person = person_id;
	}

	isComplete() {
		return this.complete;
	}

	markComplete() {
		this.complete = true;
		this.dateCompleted = new Date();
	}

	isValid() {
		if (
			this.id &&
			this.title &&
			this.dateCreated &&
			this.dateDue &&
			this.household &&
			this.person
		) {
			return true;
		}
	}
}

class ChoreList {
	constructor() {
		this.chores = new Dict();
	}

	addChore(chore) {
		if (!chore.isValid()) {
			return;
		}
		this.chores.add(chore, chore.getID());
	}

	getChores() {
		return this.chores.store;
	}

	getChoreInfo(chore) {
		const complete = chore.isComplete() == true ? 'Yes' : 'No';
		const info = {
			ID: chore.getID(),
			Chore: chore.getTitle(),
			dateCreated: chore.getDateCreated(),
			dateDue: chore.getDateDue(),
			Household: chore.getHousehold(),
			Person: chore.getPerson(),
			Complete: complete,
		};
		return info;
	}

	getTotalCompleted() {
		var done = 0;
		var complete = [];

		for (let task of this.chores.values()) {
			if (task.isComplete()) {
				done += 1;
				complete += [task.getTitle(), ' ' + task.getDateCompleted()];
			}
		}
		complete += ' ' + done;
		return complete;
	}

	getOverdueChores() {
		var today = new Date();
		var overdue = [];

		for (let task of this.chores.values()) {
			if (task.getDateDue() < today) {
				overdue += task.getTitle();
			}
		}
		return overdue;
	}

	dueNext() {
		var dueNext;
		var nearest = -1;
		var today = new Date();

		for (let task of this.chores.values()) {
			var daysLeft = task.getDateDue() - today;
			if (daysLeft > 0) {
				if (daysLeft < nearest || nearest == -1) {
					nearest = daysLeft;
					dueNext = task;
				}
			}
		}
		return dueNext;
	}

	removeChore(chore) {
		this.chores.delete(chore.getID());
	}

	clearList() {
		this.chores.clear();
	}

	size() {
		return this.chores.length;
	}
}

module.exports = {
	Chore,
	ChoreList,
};
