function createFish(){
  //AquaPresentation: inserts random fish into svg div "aquarium":
  var headType = Math.floor(Math.random()*4)+1;
  var tailType = Math.floor(Math.random()*4)+1;
  var randX = Math.round(Math.random()*300)+200;
  var randY = Math.round(Math.random()*200);
  var randSpeed = Math.random()*6 + 1;
  var fish = new Fish(headType, tailType, randX, randY, randSpeed);
  insertFishToAquarium(fish);

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