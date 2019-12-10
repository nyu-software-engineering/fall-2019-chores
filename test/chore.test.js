const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assert = require('chai').assert;
const URLSlugs = require('mongoose-url-slugs');
const Person = require('../src/person');
const Chore = require('../src/chore');
const Household = require('../src/household');

const chore = {
	title: 'Dishes',
};

// User validity tests.
describe('Test user creation validity.', () => {
	const validChore = new Chore(chore);

	// 1
	it('Test whether the ID of an object is defined when saved to MongoDB successfully.', function(done) {
		assert.isDefined(validChore._id, 'chore is not saved to MongoDB');
		done();
	});

	// 2
	it('test if the chore title match', function(done) {
		assert.equal(validChore.title, chore.title, "chore title doesn't match");
		done();
	});

	// 3
	it('chore should be defined', done => {
		assert.isDefined(validChore, 'user is not defined');
		done();
	});

	// 4
	it('chore should not be null', done => {
		assert.exists(validChore, 'chore is null');
		done();
	});
});

// Tests the functions inside the chore.js file.
describe('Chore Tests', () => {
	const validChore = new Chore(chore);
	validChore.save();

	// 1
	it('test chore title modification', function(done) {
		validChore.setTitle('Vacuum');
		assert.equal(validChore.getTitle(), 'Vacuum');
		done();
	});

	// 2
	it('test date creation', function(done) {
		assert.exists(validChore.createdOn(), 'date is null');
		done();
	});

	// 3
	it('test due on (1): when no due date is assigned yet', function(done) {
		assert.equal(validChore.dueOn(), null);
		done();
	});

	// 4
	it('test due on (2): when due date has been assigned', function(done) {
		validChore.setDueDate(new Date('November 5, 2019 20:30:00'));
		assert.equal(
			validChore.dueOn().toDateString(),
			new Date('November 5, 2019 20:30:00').toDateString()
		);
		done();
	});

	// 5
	it('test completed on (1): when the chore has not been completed yet', function(done) {
		assert.equal(validChore.completedOn(), null);
		done();
	});

	// 6
	it('test chore assignment check (1): when the chore has not been assigned yet', function(done) {
		assert.equal(validChore.getStatus(), 0);
		assert.equal(validChore.completedOn(), null);
		done();
	});

	// 7
	it('test chore assignment check (2): when the chore has been assigned', function(done) {
		validChore.markAssigned();
		assert.equal(validChore.getStatus(), 1);
		assert.equal(validChore.completedOn(), null);
		done();
	});

	// 8
	it('test chore assignment check (3): when the chore has been completed', function(done) {
		validChore.markComplete();
		assert.equal(validChore.getStatus(), 2);
		assert.exists(validChore.completedOn(), 'date is null');
		done();
	});

	// 8
	it('test chore lateness check', function(done) {
		validChore.setDueDate(new Date('December 5, 2030 20:30:00'));
		validChore.markComplete();
		assert.equal(validChore.checkLate(), false);

		validChore.setDueDate(new Date('December 5, 2018 20:30:00'));
		validChore.markComplete();
		assert.equal(validChore.checkLate(), true);
		done();
	});

	// 9
	it('test criteria check', function(done) {
		assert.equal(validChore.getCriteria().length, 0);
		done();
	});

	// 10
	it('test adding criteria', function(done) {
		validChore.addCriteria('Living room');
		validChore.addCriteria('Bathroom');
		validChore.addCriteria('Bedroom');
		assert.equal(
			validChore.getCriteria().toString(),
			'Living room,Bathroom,Bedroom'
		);
		done();
	});

	// // 11
	// it("test removing criteria", function(done) {
	// 	validChore.removeCriteria(0);
	//   assert.equal(validChore.getCriteria().toString(), 'Bathroom,Bedroom');
	//   done();
	// });
});
