const assert = require('chai').assert;
const { ChoreList, Chore } = require('../src/chore');

describe('Chore tests', function() {
    var chore1;
    var chore2;
    var list;

    beforeEach(function() {
        chore1 = new Chore('Garbage');
        chore1.setID('1');
        chore1.setDateDue('2020, 11, 1');
        chore1.setHousehold('134');
        chore1.setPerson('5678');

        chore2 = new Chore('Clean Toilet');
        chore2.setID('2');
        chore2.setDateDue('2019, 10, 15');
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
        const created = new Date();
        const due1 = new Date('2020, 11, 1');
        const due2 = new Date('2019, 10, 15');
        const expected = {
            '1': {
                title: 'Sweep Floor',
                dateCreated: created,
                complete: false,
                id: '1',
                dateDue: due1,
                household: '134',
                person: '5678',
            },
            '2': {
                title: 'Clean Toilet',
                dateCreated: created,
                complete: false,
                id: '2',
                dateDue: due2,
                household: '296',
                person: '4581',
            },
        };

        chore1.dateCreated = created;
        chore2.dateCreated = created;
        chore1.setTitle('Sweep Floor');

        list.addChore(chore1);
        list.addChore(chore2);
        assert.deepEqual(list.getChores(), expected);
    });

    it('test getChoreInfo', function() {
        const created = new Date();
        const due = new Date('2019, 10, 15');
        const expected = {
            ID: '2',
            Chore: 'Clean Toilet',
            'Date Created': created,
            'Date Due': due,
            Household: '296',
            Person: '4581',
            Complete: 'No',
        };

        list.addChore(chore2);
        assert.deepEqual(list.getChoreInfo(chore2), expected);
    });

    it('test getTotalCompleted', function() {
        const completed = new Date();
        const expected = 'Garbage, ' + completed + ' 1';
        chore1.markComplete();
        list.addChore(chore1);
        list.addChore(chore2);
        assert.equal(list.getTotalCompleted(), expected);
    });

    it('test getOverdueChores', function() {
        const created = new Date();
        const due = new Date('2019, 10, 15');
        const expected = 'Clean Toilet';

        list.addChore(chore1);
        list.addChore(chore2);
        assert.deepEqual(list.getOverdueChores(), expected);
    });

    it('test get chore that is due next', function() {
        const created = new Date();
        const due = new Date('2020, 1, 5');
        const expected = {
            title: 'Garbage',
            dateCreated: created,
            complete: false,
            id: '1',
            dateDue: due,
            household: '134',
            person: '5678',
        };

        chore1.setDateDue('2020, 1, 5');
        chore2.setDateDue('2020, 11, 8');

        list.addChore(chore1);
        list.addChore(chore2);
        assert.deepEqual(list.dueNext(), expected);
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
