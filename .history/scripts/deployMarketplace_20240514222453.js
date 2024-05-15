const hre = require("hardhat");

async function main() {
    //sudo coded in user1 address
    const user1 = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"

    const ether = (n) => {
      return ethers.parseEther(n.toString())
    }

  console.log(`Deploying Marketplace....`)
  const MARKETPLACE = await hre.ethers.getContractFactory("Marketplace")
  const marketplace = await MARKETPLACE.deploy()
  console.log(`Marketplace Deployed!!: ${await marketplace.getAddress()}`)

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
