

/* This is a wrapper class which include the Token and additional information about the database action */
class Action{

constructor(databaseAction, fishToken){
    this.databaseAction = databaseAction;
    this.fishToken = fishToken;
    }

    getFishToken(){
        return this.fishToken;
    }
    getDatabaseAction(){
        return this.databaseAction;
    }
}

class FishToken {

    constructor(token_Id,name,speed,headType,tailType,ownerAdress){
    this.token_Id = token_Id;
    this.name = name;
    this.speed = speed;
    this.headType = headType;
    this.tailType = tailType;
    this.ownerAdress = ownerAdress;
    }
    getTokenId(){
        return this.token_Id;
    }
    getName(){
        return this.name;
    }
    getSpeed(){
        return this.speed;
    }
    getHeadType(){
        return this.headType;
    }
    getTailType(){
        return this.tailType;
    }
    getOwnerAdress(){
        return this.ownerAdress;
    }
    setTokenId(token_Id){
        this.token_Id = token_Id;
    }
    setName(name){
        this.name = name;    
    }
    setSpeed(speed){
        this.speed = speed;
    }
    setHeadType(headType){
        this.headType = headType;
    }
    setTailType(tailType){
        this.tailType = tailType;
    }
    setOwnerAdress(ownerAdress){
        this.ownerAdress = ownerAdress;
    }

}