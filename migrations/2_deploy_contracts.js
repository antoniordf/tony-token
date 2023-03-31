const tonyToken = artifacts.require("tonyToken");

module.exports = function (deployer) {
  // The arguments for the constructor should be provided here
  const _name = "Tony Token";
  const _symbol = "TONY";
  const _decimals = 18;
  const _initialSupply = 100000;

  deployer.deploy(tonyToken, _name, _symbol, _decimals, _initialSupply);
};
