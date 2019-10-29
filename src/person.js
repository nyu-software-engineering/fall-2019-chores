<<<<<<< HEAD
<<<<<<< HEAD
import Chores from 'chores.js';

class Person {

    constructor() {
        this.id = null;
        this.name = null;
        this.household = null;
        this.ratingCount = 0;
class Person {

    constructor(id, name, household) {
        this.id = id;
        this.name = name;
        this.household = household;
        this.rating = 0;
        this.chores = [];
        this.admin = false;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name;
    }
    
    getHousehold() {
        return this.household;
    }

    getRating() { 
        if(this.ratingCount == 0) return "No ratings yet.";
        else {
            var rating = this.rating / this.ratingCount;
            return parseFloat(rating * 100).toFixed(2) + "%";
        }
    }

    setRating(result) {
        if(result) this.rating++;
        this.ratingCount++;
    }

    assignChore(choreTitle) {
        this.chores.push(choreTitle);
    }

    hasChore(choreTitle) {
        for (var i = 0; i < this.chores.length; i++) {
            if(this.chores[i] == choreTitle) {
                return true;
            }
        }
        return false;
    }
    
    getChoreCount() {
        return this.chores.length;
    }

    hasIncompletedChore() {
        if(0 < this.chores.length) return true;
        else return false;
    }

    removeChore(choreTitle) {
        var index = -1;
        for (var i = 0; i < this.chores.length; i++) {
            if(this.chores[i] == choreTitle) {
                index = i;
            }
        }
        if(index != -1) {
            this.chores.splice(index, index);
            return true;
        }
        else {
            return false;
        }
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
    }

    setAdmin() {
        this.admin = true;
    }

    getAdminStatus() {
        return this.admin;
    }

  }

module.exports = {
    Person
};
