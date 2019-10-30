var mocha = require('mocha');
var Household = require('../household.js');
var Person = require('../person.js');
var Person = require('../chore.js');
const assert = require('assert');

describe('Household Tests', function() {
    var household;
    beforeEach(function() {
        household = new Household({
            id:1,
            title:"sampletitle",
            admin:false,
            owner:"sampleowner",
        });
        person = new Person();
        chore = new Chore();
    });
    it('should be invalid if id is zero', function() {
        assert.notEqual(household.id, 0);
    });
    it('should be invalid if title is blank', function() {
        assert.notEqual(household.title, "");
    });
    it('should be invalid if owner is blank', function() {
        assert.notEqual(household.owner, "");
    });
    it('should be invalid if no members', function() {
        assert.notEqual(household.members.length, 0);
    });
    it('should be incorrect if cannot add members', function() {
        household.addMember(person);
        assert.notEqual(household.members.length, 0);
    });
    it('should be incorrect if cannot remove members', function() {
        var val = household.members.length;
        household.removeMember(person);
        assert.notEqual(household.members.length, val);
    });
    it('should be incorrect if cannot add chore', function() {
        household.addChore(person);
        assert.notEqual(household.chores.length, 0);
    });
    it('should be incorrect if cannot remove chore', function() {
        var val = household.chores.length;
        household.removeMember(person);
        assert.notEqual(household.chores.length, val);
    });
    it('isEmpty should return correct result', function() {
        household.addMember(person);
        assert.notEqual(household.isEmpty(), false);
    });
    it('setOwner should change owner', function() {
        var str = household.getOwner();
        household.setOwner("Change_Owner");
        assert.notEqual(household.getOwner(), str);
    });
    it('setTitle should change title', function() {
        var str = household.getTitle();
        household.setTitle("Change_Title");
        assert.notEqual(household.getTitle(), str);
    });




});
