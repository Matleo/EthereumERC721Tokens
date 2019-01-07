var aquaTokenContract;


$('#addFish').click(function () {

  //FishCreation.js
  createFish().then(function (result) {
    $('#createFishModal').modal('hide');
  });
});


$('#button-addon2').click(function(){

  transferFish($('#recieverAdress').val()).then(function(result){
    console.log(result[0],result[1])
  });

});


$(document).ready(async () => {
  $("button").prop("disabled", true);
   var loader = $("#loader");
   var content = $("#content");
   loader.show();
   content.hide();
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      var x = await ethereum.enable();

      window.web3.eth.defaultAccount = x[0];

      // Acccounts now exposed
      $("button").prop("disabled", false);
      $("#access").hide();
    } catch (error) {
      // User denied account access...
      $("#access").removeClass("alert-info");
      $("#access").addClass("alert-danger");
      $("#access").append("<span>The App only works with Metmask access. Reload the App</span>")
      $("#access").append("<a class='alert-link' onclick='window.location.reload()'> here </strong>");
      $("#access").append("<span>and accept the access in Metamask</span>");
      return;
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    $("button").prop("disabled", false);
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
  loader.hide();
  content.show();
  // Startpoint of the init Application
  aquaTokenContract = new AquaTokenContract();
  aquaTokenContract.createContract(erc721.abi, "0xd3473ecb1d5a460a85d610c394e7dd9a3d8ee3c1");
  
  /* ExampleCode for deploying a Contract */
  /*aquaTokenContract.deployContract(erc721.byteCode,"1965857", 3065857).then(function(result){
	console.log( result);
    }).catch(function(error){
    console.log("error" + error)
    });
   */
   
   //Read all Tokens of current User (TODO: Add Database)
   aquaTokenContract.allOwnedTokens().then(function(result){
	   for(i in result){
		   var tokenID = result[i];
		   insertRandomFish();
	   }
   });
});



/* unchecked */
async function transferFish(recieverAdress){

  var contractResult = await aquaTokenContract.transferFrom(recieverAdress,"1965857",3065857,0 );
  var existingFishToken =  await fishTokenDatabase.getFishToken("Hier Id rein");
  existingFishToken.ownerAdress(recieverAdress)
  var databaseResult = await fishTokenDatabase.createOrUpdateFishToken(existingFishToken);
  return Promise.resolve(databaseResult );
}

