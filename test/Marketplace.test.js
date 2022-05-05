const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFTMint', function () {
  it("Should return the new greeting once it's changed", async function () {
    [owner, creator, addr1, addr2] = await ethers.getSigners();

    const NFTMint = await ethers.getContractFactory('NFTMint');
    const nftMint = await NFTMint.deploy();
    await nftMint.deployed();
    nftMintAddress = nftMint.address;

    const Marketplace = await ethers.getContractFactory('Marketplace');
    const marketplace = await Marketplace.deploy(nftMintAddress);
    await marketplace.deployed();
    marketplaceAddress = marketplace.address;

    await nftMint.mint(1, 24);

    await nftMint.setApprovalForAll(marketplaceAddress, true);
    await nftMint.balanceOf(marketplaceAddress, 1);

    listNFT = await marketplace.listNft(1, 24, 234, 11);
    await nftMint.balanceOf(marketplaceAddress, 1);

    await nftMint.setApprovalForAll(marketplaceAddress, true);
    // await marketplace.buyNFT(1, 5);
    // await marketplace.onERC1155Received(
    //   address(this),
    //   msg.sender,
    //   tokenId,
    //   amount,
    //   ''
    // );
    // buyNFT1 = await marketplace.buyNFT(1, 24);
    // await marketplace.buyNFT(1, 24);
  });
});
