class Token {

    constructor(tokenId,name,speed,headType,tailType,ownerAdress){
    this.tokenId = tokenId;
    this.name = name;
    this.speed = speed;
    this.headType = headType;
    this.tailType = tailType;
    this.ownerAdress = ownerAdress;
    }
    getTokenId(){
        return this.tokenId;
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
    setTokenId(tokenId){
        this.tokenId = tokenId;
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