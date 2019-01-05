class AquaTokenContract {
    
    
  constructor() {
   this.web3 = window.web3;
   this.contract;
   this.contractOptions={};
   this.sendOptions={};
   this.account;
   console.log(this.web3);
   this.init();   
  }

  init(){
    console.log(window.web3.currentProvider);
  this.account = window.web3.currentProvider.selectedAddress;
  //Looking in a Interval of 100ms if the selected Account in Metmask was changed.
  setInterval(function(){

    if(this.account !== window.web3.currentProvider.selectedAddress){
        this.account = window.web3.currentProvider.selectedAddress;
    }

  },100);
  }

/* This Method create a Web Contract Object 


    contractAddress - String: The address where the contract is deployed. See options.address.
    
    data - String: The byte code of the contract. Used when the contract gets deployed.
    gasPrice - String: The gas price in wei to use for transactions.It is the wei per unit of gas.
    gasLimit - Number: The maximum gas provided for a transaction (gas limit).



*/

/*This Method create a web3 Contract Object 

abi - Array: The json interface of the contract.
optContractAdress- if the contract is already deployed the blockchain the contractadress can set with this parameter.
*/

    createContract(abi,optContractAdress){
      this.contract = new web3.eth.Contract(erc721.abi);
      if(optContractAdress !='null' && typeof(optContractAdress) ==='string')   this.contractOptions.address = optContractAdress;
      //this.contract.options = this.contractOptions;
    }
    
    /* This Method deploy a Contract */
    
    deployContract(data,gasPrice,gasLimit,value,successCallback ,onfailedCallback){
        
        if(data !='null' && typeof(data) ==='string') this.contractOptions.data = data; 

        if(this.account !='null' && typeof(this.account) ==='string') this.sendOptions.from = this.account; 
       if(gasPrice !='null' && typeof(gasPrice) ==='string') this.sendOptions.gasPrice = gasPrice;
        if(gasLimit !='null' && typeof(gasLimit) ==='number') this.sendOptions.gas = gasLimit;
        if(value != 'null' && typeof(value) ==='number') this.sendOptions.value = value;

        console.table(this.contractOptions);
        console.table(this.sendOptions);
        console.log(this.contract);
        this.contract.deploy(this.contractOptions).send(this.sendOptions)
        .on('error', function(error){
            console.log(error);
            onfailedCallback(error);
        })
        .then(function(newContractInstance){
            console.log(newContractInstance);
            this.contract = newContractInstance;
            this.contractOptions = newContractInstance.options;
            successCallback(newContractInstance);
            console.log(this.contract);
        }.bind(this));        
    }
  
    /* Define the ContractOptions for deploying a Contract. This Method return a Json in the Syntax of Web3. 
        Parameter:[
        from - String: The address transactions should be made from.
        gasPrice - String: The gas price in wei to use for transactions.
        gas - Number: The maximum gas provided for a transaction (gas limit).
        data - String: The byte code of the contract. Used when the contract gets deployed.
        ]
        
        */
    transferFrom(){
    
     //   this.contract.method(params).send(sendOptions).
        
    }

    createToken(){

    }

    
    call(){
        
        
    }
    
} 