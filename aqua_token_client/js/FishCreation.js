async function createFish() {
  var contractResult = await aquaTokenContract.createToken("9000000000", 3065857, 0);
  
  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var convertedSpeed = Number.parseFloat(contractResult.speed)/100;
  var fishToken = new FishToken(parseInt(contractResult.id), name, convertedSpeed, contractResult.kopf.toString(), contractResult.schwanz.toString());
  var databaseResult = await fishTokenDatabase.createOrUpdateFishToken(fishToken);
  insertFish( fishToken);
  /*aquaTokenContract.transferFrom("0x5Afd91398E7118e15c2fC1e295b6C0bA1456602D",result[1],"1965857",28000000,0).then(function(result){
  console.log(result);
   }).catch(function(error){
    console.log(error)
   });

 */
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
    insertFish(fish);
  }

  });
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
	//TODO: Fix pairing Bug
	location.reload();
   });

}
