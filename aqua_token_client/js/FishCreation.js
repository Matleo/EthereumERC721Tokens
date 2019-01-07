async function createFish(){
	
  var contractResult = await aquaTokenContract.createToken("1965857", 3065857, 0);

  
   var fish = insertRandomFish();
   //TODO Generate FishToken with Values 
   var fishToken = new FishToken(parseInt(contractResult[1]), fish.name, fish.speed, fish.headType.toString(), fish.tailType.toString(), aquaTokenContract.account);
   //var databaseResult = await fishTokenDatabase.createOrUpdateFishToken(fishToken);
   /* aquaTokenContract.transferFrom("0x5Afd91398E7118e15c2fC1e295b6C0bA1456602D",result[1],"1965857",3065857,0).then(function(result){
    console.log(result);});  
     }).catch(function(error){
      console.log(error)
     });
    */
	
  
  
  return Promise.resolve([contractResult]);
}

function insertRandomFish(){
  //AquaPresentation: inserts random fish into svg div "aquarium":
  var headType = Math.floor(Math.random()*4)+1;
  var tailType = Math.floor(Math.random()*4)+1;
  var randX = Math.round(Math.random()*300)+200;
  var randY = Math.round(Math.random()*200);
  var randSpeed = Math.random()*6 + 1;
  
  var fish = new Fish(headType, tailType, randX, randY, randSpeed, "Anton"+randSpeed);
  insertFishToAquarium(fish);
  
  return fish;
}


async function FishCreationProcess(){

  //Create Fish Token in Contract

  
 aquaTokenContract.createToken("1965857",3065857,0).then(function(result){
  console.log(result)
  createFish(); //FishCreation.js
  $('#createFishModal').modal('hide');
  
 }).catch(function(error){
console.log(error)
 });

}