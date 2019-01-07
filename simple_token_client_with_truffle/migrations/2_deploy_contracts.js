var ERC721_basic = artifacts.require("./ERC721_basic.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721_basic);
};
