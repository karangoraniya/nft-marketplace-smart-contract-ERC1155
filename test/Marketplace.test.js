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

    await nftMint.connect(owner).mint(1, 2000);

    expect(await nftMint.balanceOf(owner.address, 1)).to.be.equal(2000);

    await nftMint.connect(addr1).setApprovalForAll(marketplaceAddress, true);
    await nftMint.connect(addr2).setApprovalForAll(marketplaceAddress, true);
    await nftMint.connect(owner).setApprovalForAll(marketplaceAddress, true);

    listNFT = await marketplace.connect(owner).listNft(1, 44, 14, 4);

    // const ownerAmount = await nftMint.balanceOf(owner.address, 0);
    // console.log(ownerAmount);

    await nftMint.safeTransferFrom(
      owner.address,
      addr2.address,
      0,
      14000,
      '0x00'
    );

    // const addr1Amount = await nftMint.balanceOf(addr2.address, 1);
    // console.log(addr1Amount);

    buyNFT1 = await marketplace.connect(addr2).buyNFT(1, 14);
  });
});
