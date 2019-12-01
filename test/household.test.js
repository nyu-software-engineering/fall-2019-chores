const Household = require('../src/backend/household');
const Person = require('../src/backend/person');
const Chore = require('../src/backend/chore');
const assert = require('chai').assert;

const household = {
	createdOn: new Date(),
	title: 'MyHousehold',
};

describe('Test household creation validity.', () => {
	const house = new Household(household);

	it('Test whether the ID of an object is defined when saved to MongoDB successfully.', function(done) {
		assert.isDefined(house._id, 'user is not saved to MongoDB');
		done();
	});

	it('test if the title match', function(done) {
		assert.equal(house.title, household.title, "title doesn't match");
		done();
	});

	it('test if the dates match', function(done) {
		assert.equal(
			house.createdOn,
			household.createdOn,
			"last name doesn't match"
		);
		done();
	});

	it('house should be defined', done => {
		assert.isDefined(house, 'house is not defined');
		done();
	});

	it('house should not be null', done => {
		assert.exists(house, 'house is null');
		done();
	});
});

describe('Household Tests', function() {
	const person = {
		firstName: 'Bella',
		lastName: 'Steains',
		phoneNum: '9173489985',
	};

	const chore = {
		title: 'Do Laundry',
	};

	const house = new Household(household);
	house.save();

	const user = new Person(person);
	user.save();

	const laundry = new Chore(chore);
	laundry.save();

	// it('test title modification', function(done) {
	// 	house.setTitle('MyHousehold2');
	// 	assert.equal(house.getTitle(), 'MyHousehold2');
	// 	done();
	// });

	// it('test admin modification', function(done) {
	// 	house.setAdmin(user);
	// 	assert.equal(house.getAdmin(), user);
	// 	done();
	// });

	// it('test add member', function(done) {
	// 	house.addMember(user);
	// 	assert.equal(house.containsPerson(user), true);
	// 	done();
	// });

	it('test remove member', function(done) {
		house.removeMember(user);
		assert.equal(house.containsPerson(user), false);
		done();
	});

	it('test add chore', function(done) {
		house.addChore(laundry);
		assert.equal(house.containsChore(laundry), true);
		done();
	});

	// it('test remove chore', function(done) {
	// 	house.removeChore(laundry);
	// 	assert.equal(house.containsChore(laundry), false);
	// 	done();
	// });
});
