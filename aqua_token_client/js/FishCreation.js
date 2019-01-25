async function createFish() {
  var contractResult = await aquaTokenContract.createToken("9000000000", 3065857, 0);

  var name = nameList[Math.floor(Math.random() * 9505) + 1];
  var convertedSpeed = Number.parseFloat(contractResult.speed)/100;
  var fishToken = new FishToken(parseInt(contractResult.id), name, convertedSpeed, contractResult.kopf.toString(), contractResult.schwanz.toString());
  
  //var url = await fishTokenDatabase.createOrUpdateFishToken(fishToken);

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


async function readAllFishesFromIpfs(){

    var allTokenIds = await aquaTokenContract.getAllTokenIds();
    
      if(allTokenIds.isRejected){
        console.log("Couldn load TokenIds from Contract");
        return;
      }
      //iterate about the Array of TokenIds
      allTokenIds.foreach(token_id => {
        //Execute following Promise Function and read the FishToken or throw an Error 
      var loopFunc = new Promise((resolve,reject) => {  

      var hash =  await aquaTokenContract.getTokenPropertyURL(token_id);
    
      if(hash.isResolved){
        var fishToken = await fishTokenIpfs.getFishToken(hash);
        fishToken.isResolved? resolve(fishToken): reject("Could not found File with hash " + hash + "in IPFS");
      }
      else{
        reject("Could not load hash with token_id:" + token_Id);
      }

    });

    loopFunc.then(fishToken => {
      insertFish(fishToken);

    }).catch(error =>{
        console.log(error);
    });
    


  });


var allTokens = await aquaTokenContract.getAllTokenIds()

  if(allTokens.isResolved){
    
    allTokens.foreach( token_Id => {

   var hash = await aquaTokenContract.getTokenPropertyURL(token_Id);

      if(hash.isResolved){

        var fish = await fishTokenIpfs.getFishToken(hash)
      }

  });

  }
  else {

  }

}


function readAllFishesFromDatabase(){
  aquaTokenContract.getAllTokenIds().then(function(result){
    if(result.length == 0){
      return;
    }

    for(i in result){
      aquaTokenContract.getTokenPropertyURL(result[i]).then(function(url){
        console.log("readAllFishes():" + url)
        fishTokenDatabase.getFishToken(url).then(function(fishToken){
          insertFish(fishToken);
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
