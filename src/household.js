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
    return members.length == 0 ? true : false;
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
