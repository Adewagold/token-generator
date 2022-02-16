// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "./BasicToken.sol";

contract BurnableToken is BasicToken, ERC20Burnable {
  constructor(string memory _name, string memory _symbol, uint256 _totalSupply) 
  BasicToken(_name, _symbol, _totalSupply) public {
  }
}
