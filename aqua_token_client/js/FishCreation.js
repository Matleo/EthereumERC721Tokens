async function createFish() {
  var contractResult = await aquaTokenContract.createToken("9000000000", 3065857, 0);

  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var convertedSpeed = Number.parseFloat(contractResult.speed)/100;
  var fishToken = new FishToken(parseInt(contractResult.id), name, convertedSpeed, contractResult.kopf.toString(), contractResult.schwanz.toString());

  var url = await fishTokenDatabase.createOrUpdateFishToken(fishToken);

  //var ipfsFishToken = await fishTokenDatabase.getFishToken(url);

  insertFish(fishToken);

  aquaTokenContract.setTokenPropertyURL(contractResult.id, url);

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

function readAllOwnedFishes(){
  aquaTokenContract.allOwnedTokens().then(function(result){
    if(result.length == 0){
      return;
    }

	fishes = {}
    for(i in result){
      aquaTokenContract.getTokenPropertyURL(result[i]).then(function(url){
        console.log("readAllFishes():" + url)
        fishTokenDatabase.getFishToken(url).then(function(fishToken){
			fishes[i] = fishToken;
			
			//hier wird validiert, ob eigenschaften passen: 
			aquaTokenContract.validateFish(fishToken).then(function(validResult){
				if(validResult[0] == true){	
					insertFish(fishes[validResult[1]]);
				}else{
					console.log("Die Eigenschaften vom Fisch mit der ID "+validResult[1] +" wurden manipuliert. Er wird nun nicht im Aquarium angezeigt.")
				}
			});
        });
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
