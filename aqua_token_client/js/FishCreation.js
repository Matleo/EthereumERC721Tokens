async function createFish() {
  var contractResult = await aquaTokenContract.createToken("9000000000", 3065857, 0);

  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var convertedSpeed = Number.parseFloat(contractResult.speed)/100;
  var fishToken = new FishToken(parseInt(contractResult.id), name, convertedSpeed, contractResult.kopf.toString(), contractResult.schwanz.toString());
  
  var databaseResult = await fishTokenDatabase.createOrUpdateFishToken(fishToken);

  insertFish(fishToken);

  aquaTokenContract.setTokenPropertyURL(parseInt(contractResult.id), databaseResult);

  return Promise.resolve([contractResult]);
}

function insertFish(fishToken) {


  var fish = new Fish(fishToken.token_Id,fishToken.headType, fishToken.tailType, Math.round(Math.random() * 300) + 200, Math.round(Math.random() * 200), fishToken.speed, fishToken.name);
  insertFishToAquarium(fish);

}


function insertRandomFish(fish) {
  //AquaPresentation: inserts random fish into svg div "aquarium":
 fish.posX =Math.round(Math.random() * 300) + 200;
 fish.posY = Math.round(Math.random() * 200);
insertFishToAquarium(fish);

  return fish;
}

function readAllFishes(){
  aquaTokenContract.allOwnedTokens().then(function(result){
    if(result.length == 0){
      return;
    }

    for(i in result){
      let url = await aquaTokenContract.getTokenPropertiesURL(result[i]);
      fishTokenDatabase.getFishToken(url).then(function(result){
        insertFish(result);
      });
    }
  });
}

 async function pairFishes(){
  //console.log(selectedFish,fishArray[fishCount]);
 var contractResult = await aquaTokenContract.mathFish(selectedFish, fishArray[fishCount]);

  //convert Speed back to floatingPoint
  var convertSpeed = Number.parseFloat(contractResult.speed)/100;
  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var fishToken = new FishToken(contractResult.id,name, convertSpeed,contractResult.kopf, contractResult.schwanz );

   await fishTokenDatabase.createOrUpdateFishToken(fishToken).then(result =>{
    insertFish(fishToken);
    console.log("create fish by name: " + fishToken.name);
   });
}
