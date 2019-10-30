var Household = require("../src/household");
var Person = require("../src/person");
var Chore = require("../src/chore");
const assert = require("chai").assert;

describe("Household Tests", function() {
  var household;
  beforeEach(function() {
    household = new Household(1, "sampletitle", false, "sampleowner");
    person = new Person();
    chore = new Chore();
  });
  it("should be invalid if id is zero", function() {
    assert.notEqual(household.id, 0);
  });
  it("should be invalid if title is blank", function() {
    assert.notEqual(household.title, "");
  });
  it("should be invalid if owner is blank", function() {
    assert.notEqual(household.owner, "");
  });
  it("should be invalid if no members", function() {
    assert.notEqual(household.members.length, 0);
  });
  it("should be incorrect if cannot add members", function() {
    household.addMember(person);
    assert.notEqual(household.members.length, 0);
  });
  it("should be incorrect if cannot remove members", function() {
    var val = household.members.length;
    household.removeMember(person);
    assert.notEqual(household.members.length, val);
  });
  it("should be incorrect if cannot add chore", function() {
    household.addChore(person);
    assert.notEqual(household.chores.length, 0);
  });
  it("should be incorrect if cannot remove chore", function() {
    var val = household.chores.length;
    household.removeMember(person);
    assert.notEqual(household.chores.length, val);
  });
  it("isEmpty should return correct result", function() {
    household.addMember(person);
    assert.notEqual(household.isEmpty(), false);
  });
  it("setOwner should change owner", function() {
    var str = household.getOwner();
    household.setOwner("Change_Owner");
    assert.notEqual(household.getOwner(), str);
  });
  it("setTitle should change title", function() {
    var str = household.getTitle();
    household.setTitle("Change_Title");
    assert.notEqual(household.getTitle(), str);
  });
});
