const assert = require('chai').assert;
const { ChoreList, Chore } = require('../src/chore');

describe('Chore tests', function() {

  var chore1;
  var chore2;
  var list;

  beforeEach(function() {

    chore1 = new Chore('Garbage');
    chore1.setID('1');
    chore1.setDate('')
    chore1.setHousehold('134');
    chore1.setPerson('5678');

    chore2 = new Chore('Clean Toilet');
    chore2.setID('2');
    chore2.setHousehold('296');
    chore2.setPerson('4581');

    list = new ChoreList();
  });

  it('test list is initially empty', function() {
    assert.equal(list.size(), 0);
  });

  it('test adding a valid chore to list', function() {
    chore1.setHousehold(null);
    list.addChore(chore1);
    assert.equal(list.size(), 0);
  });

  it('test adding an invalid chore to list', function() {
    list.addChore(new Chore());
    assert.equal(list.size(), 0);
  });

  it('test getChores', function() {
    // const expected = {{'ID': '1', 'Chore': 'Garbage', 'Household': '134',
    //     'Person': '5678', 'Complete': 'No'}, {'ID': '2', 'Chore': 'Clean Toilet', 'Household': '296',
    //     'Person': '4581', 'Complete': 'No'}};
    list.addChore(chore1);
    list.addChore(chore2);
        console.log(list.getChores());
    assert.deepEqual(list.getChores(), list);
  });

  it('test getChoreInfo', function() {
    const expected = {'ID': '2', 'Chore': 'Clean Toilet', 'Date': '', 'Household': '296',
    'Person': '4581', 'Complete': 'No'};
    list.addChore(chore2);
    assert.deepEqual(list.getChoreInfo(chore2), expected);
  });

  it('test getTotalCompleted', function() {
    chore1.markComplete();
    list.addChore(chore1);
    list.addChore(chore2);
    assert.equal(list.getTotalCompleted(), 1);
  });

  it('test removeChore from list', function() {
    list.addChore(chore1);
    list.addChore(chore2);
    list.removeChore(chore1);
    assert.equal(list.size(), 1);
  });

  it('test clearList', function() {
    list.addChore(chore1);
    list.addChore(chore2);
    list.clearList();
    assert.equal(list.size(), 0);
  });

});
