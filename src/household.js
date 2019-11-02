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
    this.members.push(m);
  }

  removeMember(m) {
    this.members.pop(m);
  }

  addChore(c) {
    this.chores.push(c);
  }

  removeChore(c) {
    this.chores.pop(c);
  }

  isEmpty() {
    return this.members.length == 0 ? true : false;
  }

  getHouseholdInfo() {
    var info = {
      "Household ID: ": this.getID(),
      "Household: ": this.getTitle(),
      "Admin: ": this.getAdmin(),
      "Owner: ": this.getOwner()
    };
    return info;
  }

  addPersontoHousehold(person) {
    this.members.push(person);
  }
}

module.exports = {
  Household
};
