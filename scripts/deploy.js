// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const name = 'Dapp Punks'
  const symbol = 'DP'
  const cost = ethers.parseUnits('0.025', 'ether')
  const maxSupply = 100
  const baseURI = 'ipfs://QmQ2jnDYecFhrf3asENjyjZRX1pZSsNWG3qHzmNDvXa9qg/'
  const allowMintingOn = 0 //(Date.now() + 60000).toString().slice(0,10) // slice to take off the miliseconds



  // Deploy NFT
  const NFT = await hre.ethers.getContractFactory('NFT')
  const nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

  console.log(`NFT deployed to: ${await nft.getAddress()}\n`)

  // Deploy Marketplace
  console.log(`Deploying Marketplace....`)
  const MARKETPLACE = await hre.ethers.getContractFactory("Marketplace")
  const marketplace = await MARKETPLACE.deploy()
  console.log(`Marketplace Deployed!!: ${await marketplace.getAddress()}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
