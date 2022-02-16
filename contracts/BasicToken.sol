// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BasicToken is ERC20{
  constructor(string memory name, string memory symbol, uint256 amount) ERC20(name, symbol) {
    if(amount>0){
      _mint(msg.sender, amount * 10 ** decimals());
    }
  }
}
