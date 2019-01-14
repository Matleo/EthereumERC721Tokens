var aquaTokenContract;
var fishCount = 0;
var fishArray;
var mateFishforbidden = true;
$("#mateFishModal").on("show.bs.modal", function(){
 
  if(selectedFish == null){
    console.log("huhu")
   
    alert("please Select a fish first");
      mateFishforbidden = true;
    //throw new Error("no fish selected");
  }
  else {
    mateFishforbidden = false;
  }
});

$("#mateFishModal").on("shown.bs.modal", function(){

  if(mateFishforbidden){
    $('#mateFishModal').modal('hide');
    return;
  }

  else{

  

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
      pairFishes(fishArray).then(result => {

        $('#mateFishModal').modal('hide');
      }). catch( error => {
        $('#mateFishModal').modal('hide');
      });

    });

  });
}

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

$("#button-addon2").click(async function(){

 await aquaTokenContract.transferFrom($("#toAdress").val(), selectedFish.token_Id );
  //Todo Remove fish from Aqua
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

//0xf43925f2878453014350c4e55c7697a48d3e2813
  aquaTokenContract.createContract("0x5266184c1a10f4c632f4f1bf03b99cf2eeb2a727");
 

  //Get all owned Fishes of current User:
  readAllFishes(); //FishCreation.js


  //TODO @Jannis: listen to event of NewbornFish
  //aquaTokenContract.contract.events.NewbornFish({}, function(error, event){ console.log(event.returnValues); })

});

function pairView(){
  $("#name").text(fishArray[fishCount].name);

  $("#propertyTable").empty();
    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> tokenid: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].token_Id +"</td>" );
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
