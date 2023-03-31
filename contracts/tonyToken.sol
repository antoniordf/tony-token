// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract tonyToken is ERC20 {
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint _initialSupply
    ) ERC20(_name, _symbol) {
        _mint(msg.sender, _initialSupply * (10 ** uint256(_decimals)));
    }
}
