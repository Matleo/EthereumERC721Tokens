

var aquaTokenContract;


$('#addFish').click(function() {
 //create RandomTokenId 
 aquaTokenContract.createToken("1965857",3065857,0).then(function(result){
  console.log(result[0],result[1])
  aquaTokenContract.transferFrom("0x5Afd91398E7118e15c2fC1e295b6C0bA1456602D",result[1],"1965857",3065857,0).then(function(result){
    console.log(result);
  });
  
  //createFish(); //FishCreation.js
  //$('#createFishModal').modal('hide');
  
 }).catch(function(error){
console.log(error)
 });

//send Transaction 


/*aquaTokenContract.createToken("123456789","1965857",3065857, function(result){

  console.log("success");
  console.log(result);

 


    }, function(error){
  console.log("error");
  console.log(error)
  });

  

*/
 
});


$(document).ready(async () => {
  $("button").prop("disabled",true);
  // Modern dapp browsers...
  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // Request account access if needed
         var x  = await ethereum.enable();
        
          window.web3.eth.defaultAccount=x[0];
        
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

 aquaTokenContract = new AquaTokenContract();
//aquaTokenContract.createContract(erc721.abi);
aquaTokenContract.createContract(erc721.abi,"0xf43925F2878453014350c4E55c7697A48D3E2813");

/*aquaTokenContract.deployContract(erc721.byteCode,"1965857", 3065857).then(function(result){
  console.log( result);
}).catch(function(error){

  console.log("error" + error)
});
  
*/
  

});
