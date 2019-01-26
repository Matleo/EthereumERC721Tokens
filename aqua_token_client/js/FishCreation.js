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


async function readAllFishesFromIpfs(){
  var allTokenIds = await aquaTokenContract.getAllTokenIds();
  
  if(allTokenIds.isRejected){
    console.log("Couldn't load TokenIds from Contract");
    return Promise.reject("Couldn't load TokenIds from Contract");
  }

  //iterate through the Array of TokenIds
  maybeValidFishes = {}
  for(token_id in allTokenIds) {
    //Execute following Promise Function and read the FishToken or throw an Error 
    aquaTokenContract.getTokenPropertyURL(token_id).then( urlIdResult => {
      url = urlIdResult[0]
      id = urlIdResult[1]
      fishTokenDatabase.getFishToken(url, id).then(fishResult => {
        fishTokenIPFS = fishResult[0];
        id = fishResult[1]
        var fishToken = new FishToken(id, fishTokenIPFS.name, fishTokenIPFS.speed, fishTokenIPFS.headType, fishTokenIPFS.tailType);
        maybeValidFishes[id] = fishToken
    
        //hier wird validiert, ob eigenschaften manipuliert worden: 
        aquaTokenContract.validateFish(fishToken).then(function(validResult){
          if(validResult[0] == true){	
            fishArray.push(maybeValidFishes[validResult[1]]);
          }
        });
      }).catch(error => {
		  if (error != "TypeError: Cannot read property '0' of undefined") {
			console.log("getFishTokenError: " + error);
		  }
      });
    }).catch(error =>{
      console.log("getTokenPropertyError " + error);
    });
  }

  return Promise.resolve();
} 

function readAllOwnedFishes(){
  aquaTokenContract.allOwnedTokens().then(function(result){
    if(result.length == 0){
      return;
    }

	fishes = {}
    for(i in result){
	  id = result[i]
	  aquaTokenContract.getTokenPropertyURL(id).then(function(urlIdResult){
		url = urlIdResult[0]
		id = urlIdResult[1]
        fishTokenDatabase.getFishToken(url, id).then(function(fishTokenResult){
			fishTokenIPFS = fishTokenResult[0];
			id = fishTokenResult[1] //id from allOwnedTokens() needs to be pulled through, because id in IPFS file can be set randomly
			var fishToken = new FishToken(id, fishTokenIPFS.name, fishTokenIPFS.speed, fishTokenIPFS.headType, fishTokenIPFS.tailType);
			fishes[id] = fishToken
			
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
		
	/*		
	for(i in result){
		id = result[i]
		fishTokenIPFS = fishTokens[i]
		var fishToken = new FishToken(id, fishTokenIPFS.name, fishTokenIPFS.speed, fishTokenIPFS.headType, fishTokenIPFS.tailType);
		//hier wird validiert, ob eigenschaften passen: 
		aquaTokenContract.validateFish(fishToken).then(function(validResult){
			if(validResult[0] == true){	
				insertFish(fishes[validResult[1]]);
			}else{
				console.log("Die Eigenschaften vom Fisch mit der ID "+validResult[1] +" wurden manipuliert. Er wird nun nicht im Aquarium angezeigt.")
			}
		});
	}
	*/
	
  });
}

function insertRandomFish(fish) {
  //AquaPresentation: inserts random fish into svg div "aquarium":
 fish.posX =Math.round(Math.random() * 300) + 200;
 fish.posY = Math.round(Math.random() * 200);
insertFishToAquarium(fish);

  return fish;
}

async function pairFishes(){
  //console.log(selectedFish,fishArray[fishCount]);
  var contractResult = await aquaTokenContract.mathFish(selectedFish, fishArray[fishCount]);

  //convert Speed back to floatingPoint
  var convertSpeed = Number.parseFloat(contractResult.speed)/100;
  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var fishToken = new FishToken(contractResult.id,name, convertSpeed,contractResult.kopf, contractResult.schwanz );

  await fishTokenDatabase.createOrUpdateFishToken(fishToken).then(hash =>{
    insertFish(fishToken);
    aquaTokenContract.setTokenPropertyURL(contractResult.id, hash);
    console.log("create fish by name: " + fishToken.name);
  });
}
