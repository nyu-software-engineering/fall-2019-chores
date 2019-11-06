const Household = require('../src/household');
const Person = require('../src/person');
const Chore = require('../src/chore');
const assert = require('chai').assert;

describe('Household Tests', function() {
	let household;
	let person;
	let chore;

	beforeEach(function() {
		person = new Person.Person();
		chore = new Chore.Chore();
		household = new Household.Household(
			1,
			'sampletitle',
			false,
			'sampleowner'
		);
	});
	it('should be invalid if id is zero', function() {
		assert.notEqual(household.id, 0);
	});
	it('should be invalid if title is blank', function() {
		assert.notEqual(household.title, '');
	});
	it('should be invalid if owner is blank', function() {
		assert.notEqual(household.owner, '');
	});
	it('should be invalid if any members', function() {
		assert.equal(household.members.length, 0);
	});
	it('should be incorrect if cannot add members', function() {
		household.addMember(person);
		assert.notEqual(household.members.length, 0);
	});
	it('should be incorrect if cannot remove members', function() {
		var val = household.members.length;
		household.addMember(person);
		household.removeMember(person);
		assert.equal(household.members.length, val);
	});
	it('should be incorrect if cannot add chore', function() {
		household.addChore(chore);
		assert.notEqual(household.chores.length, 0);
	});
	it('should be incorrect if cannot remove chore', function() {
		var val = household.chores.length;
		household.addChore(chore);
		household.removeChore(chore);
		assert.equal(household.chores.length, val);
	});
	it('isEmpty should return correct result', function() {
		household.addMember(person);
		assert.notEqual(household.isEmpty(), true);
	});
	it('setOwner should change owner', function() {
		var str = household.getOwner();
		household.setOwner('Change_Owner');
		assert.notEqual(household.getOwner(), str);
	});
	it('setTitle should change title', function() {
		var str = household.getTitle();
		household.setTitle('Change_Title');
		assert.notEqual(household.getTitle(), str);
	});
});
