const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assert = require('chai').assert;
const URLSlugs = require('mongoose-url-slugs');
const Person = require('../src/backend/person');
const Chore = require('../src/backend/chore');
const Household = require('../src/backend/household');

const person = {
   firstName: 'Eugene',
   lastName: 'Choi',
   phoneNum: '9291112222',
};

// User validity tests.
describe('Test user creation validity.', () => {
   const user = new Person(person);

   it('Test whether the ID of an object is defined when saved to MongoDB successfully.', function(done) {
      assert.isDefined(user._id, 'user is not saved to MongoDB');
      done();
   });

   it('test if the first names match', function(done) {
      assert.equal(
         user.firstName,
         person.firstName,
         "first name doesn't match"
      );
      done();
   });

   it('test if the last name match', function(done) {
      assert.equal(user.lastName, person.lastName, "last name doesn't match");
      done();
   });

   it('phone number should match', function(done) {
      assert.equal(
         user.phoneNum,
         person.phoneNum,
         "phone number doesn't match"
      );
      done();
   });

   it('user should be defined', done => {
      assert.isDefined(user, 'user is not defined');
      done();
   });

   it('user should not be null', done => {
      assert.exists(user, 'user is null');
      done();
   });
});

// Tests the functions inside the person.js file.
describe('Person Tests', () => {
   const user = new Person(person);
   user.save();

   // 1
   it('test first name modification', function(done) {
      user.setFirstName('Ben');
      assert.equal(user.getFirstName(), 'Ben');
      done();
   });

   // 2
   it('test last name modification', function(done) {
      user.setLastName('Cho');
      assert.equal(user.getLastName(), 'Cho');
      done();
   });

   // 3
   it('test get rating: (1) when no rating has been added', function(done) {
      assert.equal(user.getScore(), -1);
      done();
   });

   // 4
   it('test get rating: (2) when a rating (positive) has been added', function(done) {
      user.addScore(5);
      assert.equal(user.getScore(), '5');
      done();
   });

   // 5
   it('test get rating: (3) when a rating (negative) has been added', function(done) {
      user.addScore(4);
      assert.equal(user.getScore(), '4.5');
      done();
   });

   const dishes = new Chore({ title: 'Dishes' });
   dishes.save();

   // 6
   it('test chore assignment check', function(done) {
      user.assignChore(dishes);
      assert.equal(user.isAssigned(dishes), true);
      done();
   });

   // 7
   it('test chore incompletion check', function(done) {
      user.assignChore(dishes);
      assert.equal(user.incomplete(), true);
      done();
   });

   // 8
   it('test remove chore', function(done) {
      user.unassign(dishes);
      assert.equal(user.isAssigned(dishes), false);
      done();
   });

   // 9
   it('test change number', function(done) {
      assert.equal(user.getNumber(dishes), '9291112222');
      user.changeNumber('1234567890');
      assert.equal(user.getNumber(dishes), '1234567890');
      done();
   });

   const house = new Household({ title: 'HouseKeeper' });
   house.save();

   // 10
   it('test household assignment', function(done) {
      user.addHousehold(house);
      assert.equal(user.hasHousehold(house), true);
      done();
   });

   // 11
   it('test household removal', function(done) {
      user.removeHousehold(house);
      assert.equal(user.hasHousehold(house), false);
      done();
   });
});
