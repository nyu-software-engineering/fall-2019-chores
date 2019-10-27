class Person {

    constructor(id, name, household) {
        this.id = id;
        this.name = name;
        this.household = household;
        this.rating = 0;
        this.chores = [];
        this.admin = false;
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

    getAdmin() {
        return admin;
    }

  }

module.exports() = {
    Cart
};