const hre = require("hardhat");

async function main() {
  const tokens = (n) => {
    return ethers.utils.parseEther(n.toString())
}

  // Deploy a nft project with limited supply to upload to market place
  console.log(`Deploying NFT project....`)
  const NFT = await hre.ethers.getContractFactory("NFT")
  const nft = await NFT.deploy("Landscape", "LNDSCA", tokens(1), 10, Date.now(), "QmNdSXfCZeURiUsxRUAKdsn5rBL1Riw5Se2yDxYU97xRsY")
  console.log(`NFT Deployed, contract address: ${nft.address}`)
  // Deploy nft market place contract
  console.log(`Deploying Marketplace....`)
  const MARKETPLACE = await hre.ethers.getContractFactory("MarketPlace")
  const marketplace = await MARKETPLACE.deploy()
  console.log(`Marketplace Deployed, contract address: ${marketplace.address}`)


}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
