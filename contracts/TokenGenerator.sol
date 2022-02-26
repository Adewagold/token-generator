// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//Import ERC20 tokens contracts
import "./BasicToken.sol";
import "./MintableToken.sol";


contract TokenGenerator {
  constructor() public {
  }

  mapping(address=>address) public generatedTokens;

  //Create a regular ERC20 token
  function createErc20Token(uint256 totalSupply, string memory name, string memory symbol) public returns (address){
    address owner = msg.sender;

    BasicToken tokenInstance = new BasicToken(name, symbol, totalSupply);

    //transfer owner

    //return address
    return address(tokenInstance);
  }

  //Create a mintable token
  function createMintableERC20Token(uint256 totalSupply, string memory name, string memory symbol) public returns (address){
    address owner = msg.sender;

    MintableToken tokenInstance = new MintableToken (name, symbol, totalSupply);

    //transfer owner

    //return address
    return address(tokenInstance);
  }

}
