const assert = require('chai').assert;
const Person = require("./person");

describe('Person Tests', function() {
  	var person;

	beforeEach(function() {
	 	person = new Person.Person();
	});

	// 1
	it('test name modification', function() {
		person.setName("Ben");
		assert.equal(person.getName(), "Ben");
	});

	// 2 
	it('test chore assignment', function() {
		person.assignChore("Laundary");
		assert.equal(person.hasChore("Laundary"), true);
	});

	// 3
	it('test chore assignment', function() {
		person.assignChore("Dishes");
		assert.equal(person.getChoreCount(), 1);
	});

	// 4
	it('test chore incompletion check', function() {
		person.assignChore("Dishes");
		assert.equal(person.hasIncompletedChore(), true);
	});

	// 5
	it('test remove chore', function() {
		person.assignChore("Laundary");
		assert.equal(person.hasChore("Laundary"), true);
		person.removeChore("Laundary");
		assert.equal(person.removeChore("Laundary"), true);
		// assert.equal(person.hasChore("Laundary"), false);
	});

	// 6
	it('test get rating: (1) when no rating has been added', function() {
		assert.equal(person.getRating(), "No ratings yet.");
	});

	// 7
	it('test get rating: (2) when a rating (positive) has been added', function() {
		person.setRating(true);
		assert.equal(person.getRating(), "100.00%");
	});

	// 8
	it('test get rating: (3) when a rating (negative) has been added', function() {
		person.setRating(true);
		person.setRating(false);
		assert.equal(person.getRating(), "50.00%");
	});

	// 9
	it('admin test', function() {
		person.setAdmin();
		assert.equal(person.getAdminStatus(), true);
	});

	// 10
	it('ID test', function() {
		person.setId("foobar");
		assert.equal(person.getId(), "foobar");
	});

});
