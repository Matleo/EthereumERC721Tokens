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
    } /*else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }*/
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("DataPath.json", function(datapath) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.DataPath = TruffleContract(datapath);
      // Connect provider to interact with contract
      App.contracts.DataPath.setProvider(App.web3Provider);

      App.listenForEvents();

      return App.render();
    });
  },

  // Listen for events emitted from the contract
  listenForEvents: function() {
    App.contracts.DataPath.deployed().then(function(instance) {
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
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Aktueller Account: " + account);
      }
    });

    // Load contract data
    App.contracts.DataPath.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.tokenCount();
    }).then(function(tokenCount) {
      //Verbindung zu index.html
      var tokenRESULT = $("#tokenResults");
      tokenRESULT.empty();

      //Verbindung zu index.html
      var tokenSELECT = $('#tokenSelect');
      tokenSELECT.empty();

      for (var i = 1; i <= tokenCount; i++) {
        //Zugriff auf das mapping/array
        tokenInstance.tokens(i).then(function(token) {
          var id = token[0];
          var name = token[1];
          var description = token[2];

          // Render token Result
          var tokenTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + description + "</td></tr>"
          tokenRESULT.append(tokenTemplate);
        });
      }
      loader.hide();
      content.show();
      }).catch(function(error) {
      console.warn(error);
    });
  },

  savePath: function() {
    var inputPath       = $('#addToken').val();
    var inputDescription  = $('#addDescription').val();
    App.contracts.DataPath.deployed().then(function(instance) {
      return instance.addPath(inputPath, inputDescription);
    })
    $('#addToken').val("");
    $('#addDescription').val("");
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
