const hre = require("hardhat");

async function main() {
    //sudo coded in user1 address
    const user1 = "0x90F79bf6EB2c4f870365E785982E1f101E93b906"

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
console.log("user is minting 1 nft")
  await nft.connect(user1).mint(1)

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
