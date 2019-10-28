class Chore {
  constructor(title) {
    this.id = null;
    this.title = title;
    this.household;
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

  getHousehold() {
    return this.household;
  }

  setHousehold(household_id) {
    this.household = household_id;
  }

  isComplete() {
    return this.complete;
  }

  markComplete() {
    this.complete = true;
  }

  isValid() {
    if (this.id && this.title && this.household) {
      return true;
    }
  }
}


class ChoreList() {
  constructor() {
    this.chores = new Dict();
  }

  getTotalCompleted() {
    var done = 0;

    for (let task if this.chores.values()) {
      if (task.isComplete()) {
        done += 1;
      }
    }
    return done;
  }

  addChore(chore) {
    if (!chore.isValid()) {
      return;
    }

    this.chores.push(chore);
  }

  getChoreInfo(chore) {

    const info = {
      "ID": this.chore.getID(),
      "Chore": this.chore.getTitle(),
      "Household": this.chore.getHousehold(),
      chore.isComplete() ? "Complete: Yes" : "Complete: No",
    }
    return info;
  }

  removeChore(chore) {
    this.chores.delete(chore.getID());
  }
  clearList() {
    this.items.clear();
  }

  size() {
    return this.chores.length;
  }
}
