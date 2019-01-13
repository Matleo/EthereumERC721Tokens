/* This is a wrapper class which include the Token and additional information about the database action */
class Action {

    constructor(databaseAction, fishToken) {
        this.databaseAction = databaseAction;
        this.fishToken = fishToken;
    }

    getFishToken() {
        return this.fishToken;
    }
    getDatabaseAction() {
        return this.databaseAction;
    }
}