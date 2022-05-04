const hre = require('hardhat');

async function main() {
  const NFTMint = await hre.ethers.getContractFactory('NFTMint');
  const nftMint = await NFTMint.deploy();

  await nftMint.deployed();

  console.log('NFTMint deployed to:', nftMint.address);

  // For MarketPlace

  const Marketplace = await hre.ethers.getContractFactory('Marketplace');
  const marketplace = await Marketplace.deploy(nftMint.address);

  await marketplace.deployed();

  console.log('Marketplace deployed to:', marketplace.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
