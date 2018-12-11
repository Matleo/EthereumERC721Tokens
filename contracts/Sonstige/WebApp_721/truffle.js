// var HDWalletProvider = require("truffle-hdwallet-provider");

// var infura_apikey = "https://ropsten.infura.io/v3/a67245b7fc9f4a8a8ffe29e14877ac00";
// var mnemonic = "amused fatigue diet ugly easily mind session crisp mean route matter vague";


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
    //,
    // ropsten: {
    //   provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
    //   network_id: 3
    // }
  }
};
