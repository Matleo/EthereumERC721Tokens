App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("ERC721_basic.json", function(ERC721_basic) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.ERC721_basic = TruffleContract(ERC721_basic);
      // Connect provider to interact with contract
      App.contracts.ERC721_basic.setProvider(App.web3Provider);

      App.listenForEvents();

      return App.render();
    });
  },

  // Listen for events emitted from the contract
  listenForEvents: function() {
    App.contracts.ERC721_basic.deployed().then(function(instance) {
      // Restart Chrome if you are unable to receive this event
      // This is a known issue with Metamask
      // https://github.com/MetaMask/metamask-extension/issues/2393
      instance.addEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("event triggered", event)
        // Reload when add an path
        App.render();
      });
    });
  },

  render: function() {
    var tokenInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) { // "===" strikte Gelichheit 
        App.account = account;
        $("#accountAddress").html("Aktueller Account: " + account);
      }
    });

    // Load contract data
    App.contracts.ERC721_basic.deployed().then(function(instance) {
      tokenInstance = instance;
      
     
      //Verbindung zu index.html
      var tokenRESULT = $("#tokenResults");
      tokenRESULT.empty();

      //Verbindung zu index.html
      var tokenSELECT = $('#tokenSelect');
      tokenSELECT.empty();

      // Anzahl der der Tokens vom aktuellen User
      // Mapping Adresse auf Anzahl
      tokenInstance.ownedTokensCount(App.account).then(function (tokenCount) {
      
        for (var i = 0; i <= tokenCount; i++) {

        // Über die vorhanden Einträge aus ownedTokens Mapping iterieren
        tokenInstance.ownedTokens(App.account, i).then(function(token) {
        var tokenTemplate = "<tr><td>" + token + "<td></tr>"
        tokenRESULT.append(tokenTemplate); 
        });
      }

      loader.hide();
      content.show();
      });

      }).catch(function(error) {
      console.warn(error);
    });
  },
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
