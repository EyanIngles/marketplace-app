const hre = require("hardhat");

async function main() {


  // Deploy a nft project with limited supply to upload to market place
  console.log(`Deploying NFT project....`)
  const NFT = await hre.ethers.getContractFactory("NFT")
  const nft = await NFT.deploy("Landscape", "LNDSCA", 10000000, 10, 0, "QmNdSXfCZeURiUsxRUAKdsn5rBL1Riw5Se2yDxYU97xRsY")
  console.log(`NFT Deployed, contract address: ${nft.address}`)
  // Deploy nft market place contract
  console.log(`Deploying Marketplace....`)
  const MARKETPLACE = await hre.ethers.getContractFactory("Marketplace")
  const marketplace = await MARKETPLACE.deploy()
  console.log(`Marketplace Deployed, contract address: ${marketplace.address}`)


}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
