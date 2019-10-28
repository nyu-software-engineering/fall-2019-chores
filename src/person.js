import Chores from 'chores.js';

class Person {

    constructor() {
        this.id = null;
        this.name = null;
        this.household = null;
        this.ratingCount = 0;
        this.rating = 0;
        this.chores = [];
        this.admin = false;
    }

    setName(name) {
        this.name;
    }

    getName() {
        return this.name;
    }

    getHousehold() {
        return this.household;
    }

<<<<<<< Updated upstream
    getRating() { 
<<<<<<< Updated upstream
        if(ratingCount == 0) return "No ratings yet.";
=======
=======
    getRating() {
>>>>>>> Stashed changes
        if(this.ratingCount == 0) return "No ratings yet.";
>>>>>>> Stashed changes
        else {
            rating = this.rating / this.ratingCount;
            parseFloat(rating).toFixed(2) + "%";
        }
    }

    setRating() {
        this.rating += rating;
        this.ratingCount++;
    }

    assignChore(choreTitle) {
        this.chores.push(new Chore(choreTitle));
    }

    hasChore(choreTitle) {
        for (var i = 0; i < chores.length; i++) {
            if(chores[i].getTitle() == choreTitle) {
                return true;
            }
        }
        return false;
    }

    getChoreCount() {
        return chores.length;
    }

    hasIncompletedChore() {
        if(0 < chores.length) return true;
        else return false;
    }

    removeChore(choreTitle) {
        var index = -1;
        for (var i = 0; i < chores.length; i++) {
            if(chores[i].getTitle() == choreTitle) {
                index = i;
            }
        }
        if(index != -1) {
            chores.splice(index, index);
            return true;
        }
        else {
            return false;
        }
    }

    setAdmin() {
        this.admin = true;
    }

    getAdmin() {
        return admin;
    }

  }

module.exports() = {
    Person
};
