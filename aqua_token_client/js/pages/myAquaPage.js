var aquaTokenContract; //js representation for the smart contract
var fishCount = 0; //which fish is selected in Mate Modal
var fishArray = new Array(); //All fishes available for mating
var mateFishforbidden = true;
var makingPrice; //Current price for Mating /Creating


//Function being executed when the createFish Modal has been opened
$("#createFishModal").on("shown.bs.modal", function () {
	// Den Preis für das erstellen eines Fisches im "CreateFisch"-Modal hinzufügen
	var text = "Das Erstellen eines neuen Fisch kostet:"
	$("#makingPrice").text(text + " " + makingPrice + " ether!");

	//This component is responsible for triggering actions on the GUI (some kind of 'controller')
	$('#addFish').click(function () {
		$('#createFishModal').modal('hide');
		//FishCreation.js
		createFish().catch(function (error) {
			console.log(error);
		});
	});
});


$("#createFishModal").on("hidden.bs.modal", function () {
	$("#addFish").unbind("click");
});


$("#mateFishModal").on("show.bs.modal", function () {
	if (selectedFish == null) {
		alert("please Select a fish first");
		mateFishforbidden = true;
		//throw new Error("no fish selected");
	} else {
		mateFishforbidden = false;
	}
});


//When Mate Modal has been opened, register onclick listeners for going left/right and show all available fishes for mating
$("#mateFishModal").on("shown.bs.modal", asny => {
    $("#goLeft").click(function() {
        fishCount > 0 ? fishCount-- : fishCount = fishArray.length - 1;
        pairView();
    });

    $("#goRight").click(function() {
        fishCount < fishArray.length - 1 ? fishCount++ : fishCount = 0;
        pairView();
    });

    if (mateFishforbidden) {
        $('#mateFishModal').modal('hide');
        return;
    } else {
		//Read all available Fishes from IPFS
        readAllFishesFromIpfs().then(() => {
            //show the modal only after some fishes were received
            let waitArray = setInterval(function checkArray() {
                if (fishArray.length > 0) {
                    clearInterval(waitArray)
                    pairView();
                }
            }, 100);
        });
    }
});


//After closing Mate Modal, unbind onclick listeners
$("#mateFishModal").on("hide.bs.modal", function() {
    $("#goRight").unbind("click");
    $("#goLeft").unbind("click");
    //Reset fishArray to prevent duplicates
	fishArray = [];
	fishCount = 0;
});


//When clicking the transfer button, trigger actions
$("#transferButton").click(async function() {
    //send transaction to contract
    await aquaTokenContract.transferFrom($("#toAdress").val(), selectedFish.token_Id);

    //Remove fish from Aquarium
    for (var i = 0; i < allFish.length; i++) {
        var fish = allFish[i];
        if (fish.token_Id == selectedFish.token_Id) {
            $(fish.group).remove() //remove svg group
            allFish.splice(i, 1); //remove fish from array
			//Empty Fish property table and profile pic
            $("#idValue").html("");
            $("#flosseValue").html("");
            $("#kopfValue").html("");
            $("#nameValue").html("");
            $("#speedValue").html("");
            $("#fishProfile > svg").empty();
        }
    }
});


$(document).ready(async () => {
	//------Setup to connect with Metamask:
    $("button").prop("disabled", true);
    var loader = $("#loader");
    var content = $("#content");
    loader.show();
    content.hide();
    // For Modern dapp browsers:
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
            $("#access").append("<span>The App only works with Metmask access. Reload the App</span>");
            $("#access").append("<a class='alert-link' onclick='window.location.reload()'> here </strong>");
            $("#access").append("<span>and accept the access in Metamask</span>");
            return;
        }
    }
    // For Legacy dapp browsers:
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
	//------Metamask is setup now.
	
    // Startpoint of the init Application
    aquaTokenContract = new AquaTokenContract();

    aquaTokenContract.createContract("0x21d819f1b6fcd1b4734e11fcc3dd01dea54cb227"); //connect to deployed contract at given address

    //Get all owned Fishes of current User and put them into Aquarium:
    readAllOwnedFishes(); //FishCreation.js

    // read makingPrice from contract
    aquaTokenContract.getMakingPrice().then(function(result) {
        makingPrice = Number.parseFloat(result) / 1000000000000000000;
    }).catch(function(error) {
        console.log(error);
    });

    //register onclick event for "paaren" button in modal
    $("#pair").click(function() {
    	//copy fishes to mate
    	var matingFish1 = new FishToken(selectedFish.token_Id, selectedFish.name, selectedFish.speed, selectedFish.headType, selectedFish.tailType);
    	var matingFish2 = new FishToken(fishArray[fishCount].token_Id, fishArray[fishCount].name, fishArray[fishCount].speed, fishArray[fishCount].headType, fishArray[fishCount].tailType);

        $('#mateFishModal').modal('hide');
		//Trigger function in FishCreation.js: 
        pairFishes(matingFish1, matingFish2).then(result => { 	
        }).catch(error => {
            alert("following error has onccurred: " + error);
        });
    });
});


//Dynamically setup the Mate Modal for selected fish:
function pairView() {
    insertToSVG("mateModalPicture", fishArray[fishCount]);

    $("#name").text(fishArray[fishCount].name);

    $("#propertyTable").empty();
    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> tokenid: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].token_Id + "</td>");
    $("#propertyTable").append("</tr>");

    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> KopfTyp: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].headType + "</td>");
    $("#propertyTable").append("</tr>");

    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> FlossenTyp: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].tailType + "</td>");
    $("#propertyTable").append("</tr>");

    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> Geschwindigkeit: </td>");
    $("#propertyTable").append("<td>" + fishArray[fishCount].speed.toFixed(2) + "</td>");
    $("#propertyTable").append("</tr>");

    $("#propertyTable").append("<tr>");
    $("#propertyTable").append("<td> Kosten für Paarung: </td>");
    $("#propertyTable").append('<td id="matePrice"></td>');
    $("#propertyTable").append("</tr>");
    $("#matePrice").text(makingPrice + " Ether!");
}