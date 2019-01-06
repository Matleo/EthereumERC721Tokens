class AquaTokenContract {
    
    
  constructor() {
   this.web3 = new Web3(window.web3.currentProvider);
   this.contract;
   this.contractOptions={};
   this.account;
   this.tokens =[];
   this.init();   
  }

  init(){

  this.account = this.web3.currentProvider.selectedAddress; 
  //Looking in a Interval of 100ms if the selected Account in Metmask was changed. Set the Default Account which is ever used as sender.
  setInterval(function(){

    if( this.account!== this.web3.currentProvider.selectedAddress){
        this.account = this.web3.currentProvider.selectedAddress;
    }

  },100);
  }

/*This Method create a web3 Contract Object 

abi - Array: The json interface of the contract.
optContractAdress- if the contract is already deployed the blockchain contractadress can set with this parameter.
*/

    createContract(abi,optContractAdress){

      this.contract = new web3.eth.Contract(erc721.abi);
      if(optContractAdress !='null' && typeof(optContractAdress) ==='string') this.contract.options.address = optContractAdress;

    }
    /* This Method deploy a Contract and override the contract Object after the deployment.
    
        data - String: The byte code of the contract. Used when the contract gets deployed.
        gasPrice - String: The gas price in wei to use for transactions.
        gasLimit - Number: The maximum gas provided for a transaction (gas limit).
      
        */
    
    
   async deployContract(data,gasPrice,gasLimit){
       console.dir(this.account)

       var sendOptions={};
       this.contract.options.from = this.account;
        if(data !='null' && typeof(data) ==='string') this.contract.options.data = data; 
        if(gasPrice !='null' && typeof(gasPrice) ==='string') sendOptions.gasPrice = gasPrice;
        if(gasLimit !='null' && typeof(gasLimit) ==='number') sendOptions.gas = gasLimit;

        return this.contract.deploy(this.contractOptions).send(sendOptions)
        .on('error', function(error){
           return Promise.reject(error);
     
        })
        .then(function(newContractInstance){
            this.contract = newContractInstance;
            return Promise.resolve(newContractInstance);
        });        
    }
  
    
/* This method create a new Token (Random Tokenid) and check if the token already has a owner in the Contract.
 If not the Method create a new Token with the current Account as owner.
 
        gasPrice - String (optional): The gas price in wei to use for this transaction.It is the wei per unit of gas.
        gasLimit - Number (optional): The maximum gas provided for this transaction (gas limit).
        value - ``Number|String|BN|BigNumber``(optional): The value transferred for the transaction in wei.
 
 */

   async createToken(gasPrice, gasLimit, value ){
    var tokenid = bigInt.randBetween("0", "1e52").toString();
    var tokenowner;
    while(tokenowner !="0x0000000000000000000000000000000000000000"){
        tokenowner = await  this.contract.methods.ownerOf(tokenid).call({ from: this.account});
    }

        var sendOptions={};
       sendOptions.from = this.account; 
       sendOptions.gasPrice = gasPrice;
       sendOptions.gasLimit = gasLimit;
       //this.sendOptions.value = value;
      return this.contract.methods.create_token(this.account,tokenid).send(sendOptions).on('error', function(error){
        return Promise.reject(error);
       }).then(function(result){
           console.log(tokenid, tokenowner)
        return Promise.resolve([result,tokenid]);
       });

    } 


    /* This method send a Token to another account 

        _to - The adress of the reciever account.
        gasPrice - String (optional): The gas price in wei to use for this transaction.It is the wei per unit of gas.
        gasLimit - Number (optional): The maximum gas provided for this transaction (gas limit).
        value - ``Number|String|BN|BigNumber``(optional): The value transferred for the transaction in wei.

    */

    async transferFrom(_to,tokenid, gasPrice,gasLimit,value ){

        var sendOptions={};
        sendOptions.from = this.account;
        if(gasPrice !='null' && typeof(gasPrice) ==='string') sendOptions.gasPrice = gasPrice;
        if(gasLimit !='null' && typeof(gasLimit) ==='number') sendOptions.gas = gasLimit;
        if(value !='null' && typeof(value) ==='number') sendOptions.value = value;
        console.log(tokenid)
       return this.contract.methods.transferFrom(this.account,_to,tokenid).send(sendOptions).on('error', function(error){

            return Promise.reject(error);
        }).then(function(result){
            return Promise.resolve(result);
        });
    }












}
