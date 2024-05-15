const hre = require("hardhat");

async function main() {

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
