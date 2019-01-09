class FishToken {


    constructor(token_Id,name,speed,headType,tailType,ownerAdress){
    this.token_Id = token_Id;
    this.name = name;
    this.speed = speed;
    this.headType = headType;
    this.tailType = tailType;
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

}