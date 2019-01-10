var aquaTokenContract;
var fishCount = 0;
var fishArray;


$("#mateFishModal").on("shown.bs.modal", function(){
  fishTokenDatabase.getAllFishTokens().then(function(result){
  fishCount =0;
  fishArray = result;
  pairView();

 
    $("#goLeft").click(function(){
      fishCount< 0 ? fishCount-- :  fishCount = result.length-1;
      pairView(result);
    });

    $("#goRight").click(function(){
      fishCount < result.length? fishCount++: fishCount = 0;
      pairView(result);
    });

    $("#pair").click(function(){
      pairFishes(fishArray);
    });

  });
});

$("#mateFishModal").on("hide.bs.modal", function(){
$("#goRight").unbind("click");
$("#goLeft").unbind("click");
});


//This component is responsible for triggering actions on the GUI (some kind of 'controller')


$('#addFish').click(function () {
  $('#createFishModal').modal('hide');
  //FishCreation.js
  createFish().then(function (result) {
    //TODO
  }).catch(function(error){
    console.log(error);
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
  //0x063fb337363d3d329d87ea030351a4af3fd44e9e
  //0x447A1eab2061a06bF82B039c275Dbfaa8d6Fa927
  aquaTokenContract.createContract(erc721.abi, "0x063fb337363d3d329d87ea030351a4af3fd44e9e");
  console.log(nameList.length);

  readAllFishes();
  /* ExampleCode for deploying a Contract */
  /*
  aquaTokenContract.deployContract(erc721.byteCode,"1965857", 3065857).then(function(result){
	  console.log( result);
  }).catch(function(error){
    console.log("error" + error)
  });
  */
   
  //Read all Tokens of current User (TODO: Add Database)

});

function pairView(){
  $("#name").text(fishArray[fishCount].name);

  $("#propertyTable").empty();
    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> tokenid: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].token_id +"</td>" );
    $("#propertyTable").append("</tr>");

    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> Kopf: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].headType +"</td>" );
    $("#propertyTable").append("</tr>");
    
    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> Flosse: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].tailType +"</td>" );
    $("#propertyTable").append("</tr>");

}