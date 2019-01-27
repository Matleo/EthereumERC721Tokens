//creates a new FishToken on the Contract and saves its properties to IPFS
async function createFish() {
	//create Token at Contract:
    var contractResult = await aquaTokenContract.createToken("9000000000", 3065857, 0);

    var name = nameList[Math.floor(Math.random() * 9505) + 1];
    var convertedSpeed = Number.parseFloat(contractResult.speed) / 100;
    var fishToken = new FishToken(parseInt(contractResult.id), name, convertedSpeed, contractResult.kopf.toString(), contractResult.schwanz.toString());

	//save Properties to IPFS:
    var url = await fishTokenDatabase.createOrUpdateFishToken(fishToken);

    //var ipfsFishToken = await fishTokenDatabase.getFishToken(url);

	//animate the fish:
    insertFish(fishToken);

	//save IPFS Hash to contract:
    aquaTokenContract.setTokenPropertyURL(contractResult.id, url);

    return Promise.resolve([contractResult]);
}

//animate the given FishToken in the Aquarium svg
function insertFish(fishToken) {
    var fish = new Fish(fishToken.token_Id, fishToken.headType, fishToken.tailType, Math.round(Math.random() * 300) + 200, Math.round(Math.random() * 200), fishToken.speed, fishToken.name);
    insertFishToAquarium(fish);
}

//Tries to fetch the Properties of all fishTokens
async function readAllFishesFromIpfs() {
	//Get the IDs of all existing Tokens from Contract
    var allTokenIds = await aquaTokenContract.getAllTokenIds();

    if (allTokenIds.isRejected) {
        console.log("Couldn't load TokenIds from Contract");
        return Promise.reject("Couldn't load TokenIds from Contract");
    }

    //iterate through the Array of TokenIds
    maybeValidFishes = {}
    for (token_id in allTokenIds) {
        //Get the IPFS Link(Hash) for current id:
        aquaTokenContract.getTokenPropertyURL(token_id).then(urlIdResult => {
            url = urlIdResult[0]
            id = urlIdResult[1]
			//fetch properties file from IPFS for current url
            fishTokenDatabase.getFishToken(url, id).then(fishResult => {
                fishTokenIPFS = fishResult[0];
                id = fishResult[1]
                var fishToken = new FishToken(id, fishTokenIPFS.name, fishTokenIPFS.speed, fishTokenIPFS.headType, fishTokenIPFS.tailType);
                maybeValidFishes[id] = fishToken

                //Validate if Properties found in IPFS have been manipulated: 
                aquaTokenContract.validateFish(fishToken).then(function(validResult) {
                    if (validResult[0] == true) {
						//show fish in Mate Modal
                        fishArray.push(maybeValidFishes[validResult[1]]);
                    }
                });
            }).catch(error => {
                if (error != "TypeError: Cannot read property '0' of undefined") {
                    console.log("getFishTokenError: " + error);
                }
            });
        }).catch(error => {
            console.log("getTokenPropertyError " + error);
        });
    }

    return Promise.resolve();
}


//Reads all fishes that current Metamask Account owns, checks if properties have been manipulated and then maybe animates the fish
function readAllOwnedFishes() {
	//Gets all Tokens for current User:
    aquaTokenContract.allOwnedTokens().then(function(result) {
        if (result.length == 0) {
            return;
        }

        fishes = {}
        for (i in result) {
            id = result[i]
			//Get IPFS Hash:
            aquaTokenContract.getTokenPropertyURL(id).then(function(urlIdResult) {
                url = urlIdResult[0]
                id = urlIdResult[1]
				//Get Property file from IPFS:
                fishTokenDatabase.getFishToken(url, id).then(function(fishTokenResult) {
                    fishTokenIPFS = fishTokenResult[0];
                    id = fishTokenResult[1] //id from allOwnedTokens() needs to be pulled through, because id in IPFS file can be set randomly
                    var fishToken = new FishToken(id, fishTokenIPFS.name, fishTokenIPFS.speed, fishTokenIPFS.headType, fishTokenIPFS.tailType);
                    fishes[id] = fishToken

                    //Validate if properties have been manipulated: 
                    aquaTokenContract.validateFish(fishToken).then(function(validResult) {
                        if (validResult[0] == true) {
							//Inser fish into aquarium
                            insertFish(fishes[validResult[1]]);
                        } else {
                            alert("Die Eigenschaften vom Fisch mit der ID " + validResult[1] + " wurden manipuliert. Er wird nun nicht im Aquarium angezeigt.")
                        }
                    });
                });
            });
        }
    });
}


// Mates/Pairs two fishes, to create a new child fish. First Parent is the fish that was clicked on and the second parent is selected in the Mate Modal
async function pairFishes() {
	//Call contract to mate the fishes
    var contractResult = await aquaTokenContract.mathFish(selectedFish, fishArray[fishCount]);

    //convert Speed back to floatingPoint
    var convertSpeed = Number.parseFloat(contractResult.speed) / 100;
    var name = nameList[Math.floor(Math.random() * 9505) + 1];
    var fishToken = new FishToken(contractResult.id, name, convertSpeed, contractResult.kopf, contractResult.schwanz);

	//Save Properties of newborn Fish to IPFS and animate it in aquarium
    await fishTokenDatabase.createOrUpdateFishToken(fishToken).then(hash => {
        insertFish(fishToken);
        aquaTokenContract.setTokenPropertyURL(contractResult.id, hash);
        console.log("created fish with name: " + fishToken.name);
    });
}