const hre = require("hardhat");

async function main() {
    //sudo coded in user1 address
    const user1 = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"

    const ether = (n) => {
      return ethers.parseEther(n.toString())
    }

    const name = 'Ease'
    const symbol = 'ES'
    const cost = ether(10)
    const max_supply = 100
    const BASE_URI = 'ipfs://QmNdSXfCZeURiUsxRUAKdsn5rBL1Riw5Se2yDxYU97xRsY/'


  // Deploy a nft project with limited supply to upload to market place
  console.log(`Deploying NFT project....`)
  const NFT = await hre.ethers.getContractFactory("NFT")
  const nft = await NFT.deploy(name, symbol, cost, max_supply, BASE_URI)
  console.log(`NFT Deployed!!:${await nft.getAddress()}`)
  // Deploy nft market place contract
  console.log(`Deploying Marketplace....`)
  const MARKETPLACE = await hre.ethers.getContractFactory("Marketplace")
  const marketplace = await MARKETPLACE.deploy()
  console.log(`Marketplace Deployed!!: ${await marketplace.getAddress()}`)
  // user1 is minting 1 nft to upload
  console.log('user 1 is minting one nft to address: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E')
  transaction = await nft.connect(user1).mint(1, { value: cost })
  result = await transaction.wait()


}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
