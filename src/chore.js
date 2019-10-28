const { Dict } = require("collections/dict")

class Chore {

  constructor(title) {
    this.id = null;
    this.title = title;
    this.dateCreated = new Date().now();
    this.dateDue = new Date();
    this.dateCompleted = new Date();
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

  setDateCreated(date) {
    this.dateCreated.setDate(date);
  }

  getDateDue() {
    return this.dateDue;
  }

  setDateDue(date) {
    this.dateDue.setDate(date);
  }

  getDateCompleted() {
    return this.dateCompleted;
  }

  setDateCompleted(date) {
    this.dateCompleted.setDate(date);
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
  }

  isValid() {
    if (this.id && this.title && this.date && this.household && this.person) {
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
    return this.chores.values();
  }

  getChoreInfo(chore) {

    const complete = chore.isComplete() == true ? "Yes" : "No";
    const info = {
      "ID": chore.getID(),
      "Chore": chore.getTitle(),
      "Date": chore.getDate(),
      "Household": chore.getHousehold(),
      "Person": chore.getPerson(),
      "Complete": complete,
    }
    return info;
  }

  getTotalCompleted() {

    var done = 0;

    for (let task of this.chores.values()) {
      if (task.isComplete()) {
        done += 1;
      }
    }
    return done;
  }

  getOverdueChores() {
    //Compare due date to today
  }

  getChoresByDate() {
    //get by x number of days old

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
  ChoreList
};
