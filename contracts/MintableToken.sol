// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BasicToken.sol";

contract MintableToken is BasicToken, Ownable {
  constructor(string memory _name, string memory _symbol, uint256 _totalSupply) 
  BasicToken(_name, _symbol, _totalSupply) public {
  }
  
  function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
