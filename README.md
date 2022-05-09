# NFT-Marketplace-Smart-Contract

NFT-MArketplace Smart Contract users can set royalty of NFT, buy with ERC20 token & 2.5% platform fees.

## Important Step

```bash
create .env file in root directory.
```

```bash
    API_URL = "https://eth-ropsten.alchemyapi.io/v2/your-api-key"
    PRIVATE_KEY = "YOUR-METAMASK-PRIVATE_KEY"
    ETHERSCAN_API_KEY = "YOUR-ETHERSCAN_API_KEY"

```

-Get Your API Key

- [Alchemy](https://alchemy.com/?r=36af7883c4699196)

-Get Your Rinkeby Faucet

- [Rinkeby Faucet](https://faucets.chain.link/rinkeby)

## NPM Packages

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Hardhat-Ethers](https://www.npmjs.com/package/hardhat-ethers)
- [Chai](https://www.npmjs.com/package/chai)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Ethereum-Waffle](https://www.npmjs.com/package/ethereum-waffle)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Hardhat-Etherscan](https://www.npmjs.com/package/hardhat-etherscan)

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Openzeppelin](https://openzeppelin.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/nft-marketplace-smart-contract-ERC1155
```

Go to the project directory

```bash
  cd nft-marketplace-smart-contract-
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy

```bash
  node scripts/deploy.js
```

Deploy on Rinkeby

```bash
  npx hardhat run scripts/deploy.js --network rinkeby
```

Verify Contract

```bash
npx hardhat verify --network rinkeby <YOUR_CONTRACT_ADDRESS>
```

Help

```bash
  npx hardhat help
```

## Check on Rinkeby Explorer

- [NFTMint](https://rinkeby.etherscan.io/address/0xCA1967f1c5bA5071a1D71ca2329f342Db1773e1E)
- [Marketplace](https://rinkeby.etherscan.io/address/0xfD2966873206819F2eCaA24Dbb715C72bDb29990)
