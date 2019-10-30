const assert = require("chai").assert;
const { ChoreSchema, HouseholdSchema, PersonSchema } = require("../src/db");

describe("Schema Validation", function() {
  it("throws an error when saving an empty ChoreSchema", function(done) {
    const chore = new ChoreSchema({});
    chore.save(err => {
      assert.isNotNull(err, "Empty ChoreSchema inputs should throw an error");
    });
    done();
  });

  it("throws an error when saving an empty HouseholdSchema", function(done) {
    const household = new HouseholdSchema({});
    household.save(err => {
      assert.isNotNull(
        err,
        "Empty HouseholdSchema inputs should throw an error"
      );
    });
    done();
  });

  it("throws an error when saving an empty PersonSchema", function(done) {
    const person = new PersonSchema({});
    person.save(err => {
      assert.isNotNull(err, "Empty PersonSchema inputs should throw an error");
    });
    done();
  });

  it("throws an error when saving a ChoreSchema with missing required properties", function(done) {
    const chore = new ChoreSchema({
      status: 0
      //no title
    });
    chore.save(err => {
      assert.isNotNull(
        err,
        "ChoreSchema inputs with missing properties should throw an error"
      );
    });
    done();
  });

  it("throws an error when saving a PersonSchema with missing required properties", function(done) {
    const person = new PersonSchema({
      name: "John"
      //no phone number
    });
    person.save(err => {
      assert.isNotNull(
        err,
        "PersonSchema inputs with missing properties should throw an error"
      );
    });
    done();
  });

  it("throws an error when saving a ChoreSchema with incorrect properties", function(done) {
    const chore = new ChoreSchema({
      status: 3,
      title: "Do the dishes"
    });
    chore.save(err => {
      assert.isNotNull(
        err,
        "ChoreSchema inputs with incorrect properties should throw an error"
      );
    });
    done();
  });

  it("throws an error when saving a HouseholdSchema with incorrect properties", function(done) {
    const household = new HouseholdSchema({
      title: "T"
      //title too short
    });
    household.save(err => {
      assert.isNotNull(
        err,
        "HouseholdSchema inputs with incorrect properties should throw an error"
      );
    });
    done();
  });

  it("throws an error when saving a PersonSchema with incorrect properties", function(done) {
    const person = new PersonSchema({
      name: "John",
      phoneNum: "01234567891011"
      //invalid name and phone number
    });
    person.save(err => {
      assert.isNotNull(
        err,
        "PersonSchema inputs with incorrect properties should throw an error"
      );
    });
    done();
  });

  it("saves a ChoreSchema with valid properties", function(done) {
    const chore = new ChoreSchema({
      status: 0,
      title: "Do the laundry"
    });
    chore.save(err => {
      assert.isNull(
        err,
        "ChoreSchema inputs with valid properties should be saved"
      );
      ChoreSchema.findOneAndDelete({ title: "Do the laundry" });
    });
    done();
  });

  it("saves a HouseholdSchema with valid properties", function(done) {
    const household = new HouseholdSchema({
      title: "Test HouseholdSchema"
    });
    household.save(err => {
      assert.isNull(
        err,
        "HouseholdSchema inputs with valid properties should be saved"
      );
      HouseholdSchema.findOneAndDelete({ title: "Test HouseholdSchema" });
    });
    done();
  });

  it("saves a PersonSchema with valid properties", function(done) {
    const person = new PersonSchema({
      name: "John",
      phoneNum: "0123456789"
    });
    person.save(err => {
      assert.isNull(
        err,
        "PersonSchema inputs with valid properties should be saved"
      );
      PersonSchema.findOneAndDelete({ phoneNum: "0123456789" });
    });
    done();
  });
});
