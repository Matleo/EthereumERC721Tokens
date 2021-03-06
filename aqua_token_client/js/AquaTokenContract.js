class AquaTokenContract {

    constructor() {
        this.web3 = new Web3(window.web3.currentProvider);
        this.contract;
        this.contractOptions = {};
        this.account;
        this.tokens = [];
        this.init();
    }

	
    init() {
        this.account = this.web3.currentProvider.selectedAddress;
        //Looking in a Interval of 100ms if the selected Account in Metmask was changed. Set the Default Account which is ever used as sender.
        setInterval(function() {
            if (this.account !== this.web3.currentProvider.selectedAddress) {
                window.location.reload();
            }
        }.bind(this), 100);
    }

	
    /*
      This Method create a web3 Contract Object
      abi - Array: The json interface of the contract.
      optContractAdress- if the contract is already deployed the blockchain contractadress can set with this parameter.
    */
    createContract(optContractAdress) {
        this.contract = new web3.eth.Contract(aqua_token_contract.abi);
        if (optContractAdress != 'null' && typeof(optContractAdress) === 'string') this.contract.options.address = optContractAdress;
    }


    /*
      This Method deploy a Contract and override the contract Object after the deployment.
      data - String: The byte code of the contract. Used when the contract gets deployed.
      gasPrice - String: The gas price in wei to use for transactions.
      gasLimit - Number: The maximum gas provided for a transaction (gas limit).
    */
    async deployContract(data, gasPrice, gasLimit) {
        console.dir(this.account)

        var sendOptions = {};
        this.contract.options.from = this.account;
        sendOptions.to = this.contract.options.address;
        if (data != 'null' && typeof(data) === 'string') this.contract.options.data = data;
        if (gasPrice != 'null' && typeof(gasPrice) === 'string') sendOptions.gasPrice = gasPrice;
        if (gasLimit != 'null' && typeof(gasLimit) === 'number') sendOptions.gas = gasLimit;

        return this.contract.deploy(this.contractOptions)
            .send(sendOptions)
            .on('error', function(error) {
                return Promise.reject(error);
            })
            .then(function(newContractInstance) {
                this.contract = newContractInstance;
                return Promise.resolve(newContractInstance);
            });
    }


    /*
      This method create a new Token (Random Tokenid) and check if the token already has a owner in the Contract.
      If not the Method create a new Token with the current Account as owner.

      gasPrice - String (optional): The gas price in wei to use for this transaction.It is the wei per unit of gas.
      gasLimit - Number (optional): The maximum gas provided for this transaction (gas limit).
      value - ``Number|String|BN|BigNumber``(optional): The value transferred for the transaction in wei.

      return in success case a Promise which include a array
    */
    async createToken(gasPrice, gasLimit, value) {
        var tokenowner;
        while (tokenowner != "0x0000000000000000000000000000000000000000") {
            var tokenid = bigInt.randBetween("0", "1e15").toString();
            tokenowner = await this.contract.methods.ownerOf(tokenid).call({
                from: this.account
            });
        }

        var sendOptions = {};
        sendOptions.from = this.account;
        sendOptions.data = this.contract.methods.create_token(this.account).encodeABI();
        sendOptions.to = this.contract.options.address;
        //sendOptions.gasPrice = gasPrice;
        //sendOptions.gasLimit = gasLimit;
        var price = await this.contract.methods.getMakingPrice().call({
            from: this.account
        });
        sendOptions.value = price;

        this.web3.eth.sendTransaction(sendOptions);

        return new Promise(function(resolve, reject) {
            this.contract.once("NewbornFish", function(error, event) {
                if (error != null) {
                    reject(error);
                } else {
                    resolve(event.returnValues);
                }
            });
        }.bind(this));
    }


    /*
      This method send a Token to another account

      _to - The adress of the reciever account.
      gasPrice - String (optional): The gas price in wei to use for this transaction.It is the wei per unit of gas.
      gasLimit - Number (optional): The maximum gas provided for this transaction (gas limit).
      value - ``Number|String|BN|BigNumber``(optional): The value transferred for the transaction in wei.
    */
    async transferFrom(_to, tokenid, gasPrice, gasLimit, value) {
        var sendOptions = {};
        sendOptions.from = this.account;
        sendOptions.to = this.contract.options.address;
        sendOptions.data = this.contract.methods.transferFrom(this.account, _to, tokenid).encodeABI();


        return this.web3.eth.sendTransaction(sendOptions)
            .on('error', function(error) {
                return Promise.reject(error);
            }).then(function(result) {
                return Promise.resolve(result);
            });
    }

	
    /*
    This method mates two fishes to create another one.

    fish1 - FishToken representing the first parent.
    fish2 - FishToken representing the second parent.
	
	returns the data of the newly created fish as event "NewbornFish"
    */
    async mathFish(fish1, fish2) {

        //Solidtiy doesn't know floating numbers. Therefore we need to convert the numbers to integers values.
        var convertedSpeed1 = parseInt(fish1.speed * 100).toString();
        var convertedSpeed2 = parseInt(fish2.speed * 100).toString();

        var sendOptions = {};
        sendOptions.from = this.account;
        sendOptions.to = this.contract.options.address;
        sendOptions.value = await this.contract.methods.getMakingPrice().call({
            from: this.account
        });
        sendOptions.data = this.contract.methods.mateFish(fish1.token_Id, fish1.headType, fish1.tailType, convertedSpeed1, fish2.token_Id, fish2.headType, fish2.tailType, convertedSpeed2).encodeABI();

        this.web3.eth.sendTransaction(sendOptions);

        return new Promise(function(resolve, reject) {
            this.contract.once("NewbornFish", function(error, event) {
                if (error != null) {
                    reject(error);
                } else {
                    resolve(event.returnValues);
                }
            });
        }.bind(this));
    }

	
    /*
    This method checks how many tokens the tokenowner owns
	returns the amount of owned Tokens
	*/
    async balanceOf(tokenowner) {
        return this.contract.methods.balanceOf(tokenowner).call({
            from: this.account
        });
    }

	
    /*
    This method asks the contract for the IDs of all owned Tokens of the current Metamask account
	returns the TokenIDs as Array
	*/
    async allOwnedTokens() {
        return this.contract.methods.allOwnedTokens(this.account).call({
            from: this.account
        });
    }
	
    /*
    This method checks how much the mating/creating of a Token costs
	*/
    async getMakingPrice() {
        return this.contract.methods.getMakingPrice().call({
            from: this.account
        });
    }

	
    /*
    This method checks if the properties of a fish have been manipulated.
	returns an Array of [valid, id], where valid is the boolean if the fish is valid and id is the id of the fishToken
	*/
    async validateFish(fish) {
        var convertedSpeed = parseInt(fish.speed * 100).toString();
        return this.contract.methods.validateFish(fish.token_Id, fish.headType, fish.tailType, convertedSpeed).call({
            from: this.account
        });
    }

	
    /*
    This method asks the contract for the IPFS Property URL(Hash)
	returns an Array of [url, id], where url is the url of the fish properties and id is the id of the fishToken
	*/
    async getTokenPropertyURL(tokenId) {
        return this.contract.methods.getTokenPropertyURL(tokenId).call({
            from: this.account
        });
    }
	

    /*
    This method sets the IPFS URL(Hash)
	*/
    async setTokenPropertyURL(tokenId, tokenUrl) {

        var sendOptions = {};
        sendOptions.from = this.account;
        sendOptions.to = this.contract.options.address;
        sendOptions.data = this.contract.methods.setTokenPropertyURL(tokenUrl, tokenId).encodeABI();

        this.web3.eth.sendTransaction(sendOptions);
    }

	
    /*
    This Method returns all Tokens that have been created on the contract
    */
    async getAllTokenIds() {
        return this.contract.methods.getAllTokenIds().call({
            from: this.account
        });
    }
}