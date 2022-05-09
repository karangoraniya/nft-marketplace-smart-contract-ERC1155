// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract NFTMint is ERC1155 {


    uint256 private constant GOLD = 0;
    address private owner;

    constructor() ERC1155("") {
         _mint(msg.sender, GOLD, 10**18, "");
    }

    function mint(uint256 id,uint256 amount) external {
        _mint(msg.sender,id, amount, '');
    }

}