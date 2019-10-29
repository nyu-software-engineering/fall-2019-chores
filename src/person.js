<<<<<<< HEAD
import Chores from 'chores.js';

class Person {

    constructor() {
        this.id = null;
        this.name = null;
        this.household = null;
        this.ratingCount = 0;
=======
class Person {

    constructor(id, name, household) {
        this.id = id;
        this.name = name;
        this.household = household;
>>>>>>> Added person js
        this.rating = 0;
        this.chores = [];
        this.admin = false;
    }

<<<<<<< HEAD
    setName(name) {
        this.name;
    }

=======
>>>>>>> Added person js
    getName() {
        return this.name;
    }

<<<<<<< HEAD
=======
    setName(name) {
        this.name;
    }
    
>>>>>>> Added person js
    getHousehold() {
        return this.household;
    }

<<<<<<< HEAD
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
=======
    setHousehold(household) {
        this.household = household;
    }

    getRating() {
        return rating;
    }

    setRating() {
        this.rating = rating;
    }

    getInfo() {
        console.log("Name: " + getName());
        console.log("household: " + getHousehold());
        console.log("Rating: " + getRating());
    }

    assignChore(chore) {
        chores.push(chore);
    }

    removeChore(pos) {
        chores.splice(pos, pos);
>>>>>>> Added person js
    }

    setAdmin() {
        this.admin = true;
    }

    getAdmin() {
        return admin;
    }

  }

module.exports() = {
<<<<<<< HEAD
    Person
};
=======
    Cart
};
>>>>>>> Added person js
