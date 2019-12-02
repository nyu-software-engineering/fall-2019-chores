class observeHousehold {
    constructor(arg) {
        this.list = "";
        this.totalmembers = 0;
        this.totalchores = 0;
    }

    addToList(name) {
        this.list.append(name);
        this.totalmembers++;
    }

    deleteFromList(name) {
        this.list.remove(name);
        this.totalmembers--;

        if (this.totalmembers ==  0) {
            for (var i = 0; i < this.totalmembers; i++) {
                name.notifyEmptyHousehold();
            }
        }
    }

    notifyEmptyHousehold() {
        //add call to each person here (not implemented fully to avoid interfering with other code)
        console.log("No members in this household");
    }

}