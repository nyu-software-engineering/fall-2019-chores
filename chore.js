class Chore {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.assignees = [];
    this.household;
    this.complete = false;
  }

  getID() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getAssignedPerson() {
    return this.assignees;
  }

  isAssigned() {
    if (len(assignees) > 0) {
      return true;
    }
    return false;
  }

  getHousehold() {
    return this.household;
  }

  setID(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  assignPerson(name) {
    this.assignees.push(name);
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


}

function getChoreInfo(chore) {

  var info {

    "Chore ID": this.chore.getID,
    "Chore": this.chore.getTitle,
    "Household": this.chore.getHousehold,
    "Assigned": this.getAssignedPerson,
    {chore.isComplete ? '"Complete": True' : null},
  }

}
