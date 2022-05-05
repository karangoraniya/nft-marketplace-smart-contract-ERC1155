// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract  Marketplace is ERC1155Holder {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _nftSold;
    IERC1155 public nftContract;
    address owner;
    uint256 public platformFee = 25;
    uint256 public deno = 1000;

    constructor(address _nftContract) {
        nftContract = IERC1155(_nftContract);
    }

    struct NFTMarketItem{
        uint256 tokenId;
        uint256 nftId;
        uint256 amount;
        uint256 price;
        uint256 royalty;
        address payable seller;
        address payable owner;
        bool sold;
    }

    mapping(uint256 => NFTMarketItem) private marketItem;

    function listNft(uint256 nftId,uint256 amount, uint256 price, uint256 royalty) public {

        require(nftId > 0, "Token doesnot exist");
        require(royalty >= 0, 'royalty should be between 0 to 30');
        require(royalty < 29, 'royalty should be less than 30');
        
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        marketItem[tokenId] = NFTMarketItem(
            tokenId,
            nftId,
            amount,
            price,
            royalty,
            payable(msg.sender),
            payable(msg.sender),
            false
        );

        IERC1155(nftContract).safeTransferFrom(msg.sender, address(this), nftId, amount, "");
    }

   

    function buyNFT(uint256 tokenId, uint256 amount) public payable {
        uint256 price = marketItem[tokenId].price ;
        uint256 royaltyPer = price * marketItem[tokenId].royalty / deno;
        uint256 marketFee = price * platformFee / deno;

        nftContract.safeTransferFrom(msg.sender, address(this), 0, price, "");
        nftContract.safeTransferFrom(msg.sender, marketItem[tokenId].owner, 0, royaltyPer, "");
        nftContract.safeTransferFrom(msg.sender, address(this), 0, marketFee, "");


        marketItem[tokenId].owner = payable(msg.sender);
        _nftSold.increment();

        onERC1155Received(address(this), msg.sender, tokenId, amount, "");
        nftContract.safeTransferFrom(msg.sender, address(this), tokenId, 1, "");


    }

}