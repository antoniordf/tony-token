const tonyToken = artifacts.require("tonyToken");

module.exports = function (deployer) {
  deployer.deploy(tonyToken, "Tony Token", "TONY", 18, 100000);
};
