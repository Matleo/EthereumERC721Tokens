
class SimpleToken{

    constructor(token_id,hash,name){
        this.token_id = token_id;
        this.hash = hash;
        this.name = name;

        //Getter
        this.getTokenId= function () {
            return this.token_id;
        }
        this.getHash= function () {
            return this.hash;
        }
        this.getName = function () {
            return this.name;
        }

        this.setTokenId = function (token_id) {
            this.token_id = token_id;
        }

        this.setHash = function (hash) {
            this.hash = hash;
        }

        this.setName = function (name) {
            this.name  =name;
        }
    }

}