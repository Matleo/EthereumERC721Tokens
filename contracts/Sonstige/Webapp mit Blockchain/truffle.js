var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "https://ropsten.infura.io/v3/54a1eb4aaa2b486cbab5d253e2523730";
var mnemonic = "amused fatigue diet ugly easily mind session crisp mean route matter vague";


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3
    }
  }
};
