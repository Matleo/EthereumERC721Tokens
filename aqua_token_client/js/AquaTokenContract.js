class AquaTokenContract {
    
    
  constructor() {
   this.web3;
      
      
  }
    
    init(){
        
        this.web3 = new Web3(Web3.givenProvider);
        console.dir(this.web3);
    }
    
    /* This Method deploy a Contract */
    
      
    deployContract(abi,destAdress,from,gasPrice,gas,data){
        
     
        ///build contractOptions Object TODO Exceptions if wrong type
    
       var buildJSON = function(from,gasPrice,gas,data){
        var contractOptions = '{ ';
        
        if(from !='null' && typeof(from) ==='string')  contractOptions +='"from":\"' +from + '\",';
        if(gasPrice !='null' && typeof(gasPrice) ==='string') contractOptions +='"gasPrice":\"' + gasPrice +'\",';
        if(gas !='null' && typeof(gas) ==='number') contractOptions +='"gas":' + gas + ',';
        if(data !='null' && typeof(data) ==='string') contractOptions +='"data":\"' + data +'\"'; 
        
        contractOptions = contractOptions.endsWith(",")? contractOptions.slice(0, contractOptions.length-1): contractOptions;
        contractOptions +=' }';
        
      
        return JSON.parse(contractOptions);
        }
        
       console.table(buildJSON("from", "gasPrice", 1000, "data"));
        
        
        // this.web3.eth.Contract(abi,destAdress, buildJSON(from, gasPrice, gas, data) );
        
        
        
    }
    
    
  
    /* Define the ContractOptions for deploying a Contract. This Method return a Json in the Syntax of Web3. 
        Parameter:[
        from - String: The address transactions should be made from.
        gasPrice - String: The gas price in wei to use for transactions.
        gas - Number: The maximum gas provided for a transaction (gas limit).
        data - String: The byte code of the contract. Used when the contract gets deployed.
        ]
        
        */
    transaction(){
    
        
    }
    
    call(){
        
        
    }
    
} 



var AquaTokenContract2 ={
    
    web3: null,
        
    init: function(){
        
        this.web3 = new Web3(Web3.givenProvider);
    },
    
    deployContract: function(){
        
    },
    
    transcaction: function(){
        
    },
    
    call: function(){
        
        
    }
    
    
}


