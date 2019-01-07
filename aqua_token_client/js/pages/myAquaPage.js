//This component is responsible for triggering actions on the GUI (some kind of 'controller')
var aquaTokenContract;


$('#addFish').click(function () {
  $('#createFishModal').modal('hide');
  //FishCreation.js
  createFish().then(function (result) {
    //TODO
  });
});


$('#button-addon2').click(function() {
  AquaTokenContract.transferFrom(recieverAdress,"1965857",3065857,0 ).then(result => {

  });
});


$(document).ready(async () => {
  $("button").prop("disabled", true);
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
  
  // Startpoint of the init Application
  aquaTokenContract = new AquaTokenContract();
  aquaTokenContract.createContract(erc721.abi, "0xb07b601097e9366a9a04b64ae868bd85a37781b6");
  
  /* ExampleCode for deploying a Contract */
  /*
  aquaTokenContract.deployContract(erc721.byteCode,"1965857", 3065857).then(function(result){
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