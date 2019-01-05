$('#addFish').click(function() {
  createFish(); //FishCreation.js
  $('#createFishModal').modal('hide');
});

$(document).ready(async () => {
  $("button").prop("disabled",true);
  // Modern dapp browsers...
  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // Request account access if needed
         var x  = await ethereum.enable();
        
          console.log(x);
          // Acccounts now exposed
          $("button").prop("disabled",false);
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
      $("button").prop("disabled",false);
  }
  // Non-dapp browsers...
  else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
  //Neuer Einstiegpunkt der Anwendung

  var aquaTokenContract = new AquaTokenContract();
  aquaTokenContract.createContract(erc721.abi);
 aquaTokenContract.deployContract(erc721.byteCode,"1965857", 3065857,0, function(result){
   console.log("confirmed");
   console.log(result)
   
 }, function(error){
   console.log("error");
  });
});
