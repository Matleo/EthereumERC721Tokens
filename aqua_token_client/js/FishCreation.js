async function createFish() {

  var contractResult = await aquaTokenContract.createToken("9000000000", 3065857, 0);


  //var fish = insertRandomFish();
  //TODO Generate FishToken with Values
  var headType = Math.floor(Math.random() * 4) + 1;
  var tailType = Math.floor(Math.random() * 4) + 1;
  var randSpeed = Math.random() * 6 + 1;
  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var fishToken = new FishToken(parseInt(contractResult[1]), name, randSpeed, headType.toString(), tailType.toString());
  var databaseResult = await fishTokenDatabase.createOrUpdateFishToken(fishToken);

  insertFish(fishToken.headType, fishToken.tailType, fishToken.speed, fishToken.name);
  /*aquaTokenContract.transferFrom("0x5Afd91398E7118e15c2fC1e295b6C0bA1456602D",result[1],"1965857",28000000,0).then(function(result){
  console.log(result);
   }).catch(function(error){
    console.log(error)
   });

 */
  return Promise.resolve([contractResult]);
}

function insertFish(headType, tailType, speed, name) {

  var fish = new Fish(headType, tailType, Math.round(Math.random() * 300) + 200, Math.round(Math.random() * 200), speed, name);
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


    if(result.length ==0 ){
      return;
    }

  var token_ids_String="";
  for(i in result){
  token_ids_String+= result[i] +",";

}

  token_ids_String = token_ids_String.substr(0, token_ids_String.length-1);
  fishTokenDatabase.getFishTokensByIds(token_ids_String).then(function(result){
  for( element in result){
    var fish= result[element];
    insertFish(fish.headType, fish.tailType, fish.speed, fish.name);
  }

  });
});


}

function pairFishes(){
  console.log(fishArray[fishCount]);

}
