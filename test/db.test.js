const assert = require("chai").assert;
const { Chore, Household, Person } = require("../src/db");

describe("Schema Validation", function() {
  it("throws an error when saving an empty Chore", function(done) {
    const chore = new Chore({});
    chore.save(err => {
      assert.isNotNull(err, "Empty Chore inputs throws an error");
      done();
    });
  });
  it("throws an error when saving an empty Household", function(done) {
    const household = new Household({});
    household.save(err => {
      assert.isNotNull(err, "Empty Household inputs throws an error");
      done();
    });
  });
  it("throws an error when saving an empty Person", function(done) {
    const person = new Person({});
    person.save(err => {
      assert.isNotNull(err, "Empty Person inputs throws an error");
      done();
    });
  });
  it("throws an error when saving a Chore with missing required properties", function(done) {
    const chore = new Chore({
      status: 0
      //no title
    });
    chore.save(err => {
      assert.isNotNull(
        err,
        "Chore inputs with missing properties throws an error"
      );
      done();
    });
  });
  it("throws an error when saving a Person with missing required properties", function(done) {
    const person = new Person({
      name: "John"
      //no phone number
    });
    person.save(err => {
      assert.isNotNull(
        err,
        "Person inputs with missing properties throws an error"
      );
      done();
    });
  });
  it("throws an error when saving a Chore with incorrect properties", function(done) {
    const chore = new Chore({
      status: 3,
      title: "Do the dishes"
    });
    chore.save(err => {
      assert.isNotNull(
        err,
        "Chore inputs with incorrect properties throws an error"
      );
      done();
    });
  });
  it("throws an error when saving a Household with incorrect properties", function(done) {
    const household = new Household({
      title: "T"
      //title too short
    });
    household.save(err => {
      assert.isNotNull(
        err,
        "Household inputs with incorrect properties throws an error"
      );
      done();
    });
  });
  it("throws an error when saving a Person with incorrect properties", function(done) {
    const person = new Person({
      name: "John",
      phoneNum: "01234567891011"
      //invalid name and phone number
    });
    person.save(err => {
      assert.isNotNull(
        err,
        "Person inputs with incorrect properties throws an error"
      );
      done();
    });
  });
  it("saves a Chore with valid properties", function(done) {
    const chore = new Chore({
      status: 0,
      title: "Do the laundry"
    });
    chore.save(err => {
      assert.isNull(err, "Chore inputs with valid properties should be saved");
      Chore.findOneAndDelete({ title: "Do the laundry" });
      done();
    });
  });
  it("saves a Household with valid properties", function(done) {
    const household = new Household({
      title: "Test Household"
    });
    household.save(err => {
      assert.isNull(
        err,
        "Household inputs with valid properties should be saved"
      );
      Household.findOneAndDelete({ title: "Test Household" });
      done();
    });
  });
  it("saves a Person with valid properties", function(done) {
    const person = new Person({
      name: "John",
      phoneNum: "0123456789"
    });
    person.save(err => {
      if (err) {
        console.log(err);
      }
      assert.isNull(err, "Person inputs with valid properties should be saved");
      Person.findOneAndDelete({ phoneNum: "0123456789" });
      done();
    });
  });
});
