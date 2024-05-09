const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Deploying Marketplace contract", async () => {


  let deployer, user1, user2, user3, user4, user5, user6, tranasaction, result, URI;
  let marketplace;
  let nft; // Declare marketplace variable at a higher scope


  beforeEach(async () => {
    [deployer, user1, user2, user3, user4, user5, user6] = await ethers.getSigners();

    async function deployMarketplace() {
      try {
          const MARKETPLACE = await ethers.getContractFactory("Marketplace");
          const marketplace = await MARKETPLACE.deploy();
          await marketplace.wait(); // Wait for deployment to complete
          console.log(`Marketplace deployed at: ${marketplace.address}`);
          return marketplace;
      } catch (error) {
          console.error("Error deploying Marketplace:", error);
          throw error; // Rethrow the error for further handling
      }
  }
  // Call the deployMarketplace function
  deployMarketplace()
      .then((marketplace) => {
          // You can now use the deployed marketplace instance
          // For example: console.log(marketplace.address);
      })
      .catch((error) => {
          // Handle deployment errors
          console.error("Deployment error:", error);
      });

    const MARKETPLACE = await ethers.getContractFactory("Marketplace");
    marketplace = await MARKETPLACE.deploy(); // Initialize marketplace
    console.log(`deployed at :${await marketplace.address}`)
    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy(
      "name",
      "symbol",
      1,
      100,
      0,
      "testURI.."
    )
  });
  it('track the nft args', async () => {
    expect( await nft.name()).to.equal("name")
    expect( await nft.symbol()).to.equal("symbol")
    expect( await nft.cost()).to.equal(1)
    expect( await nft.maxSupply()).to.equal(100)
    expect( await nft.allowMintingOn()).to.equal(0)
    expect( await nft.baseURI()).to.equal("testURI..")
  })
  it('mints an nft', async () => {
    await nft.connect(user1).mint(1)
    let nft1 = await nft.tokenURI(0)

  })
  it('lists that minted nft onto the marketplace contract.', async () => {
    await nft.connect(user1).mint(1)
    //approve the nft transfer first
    let approve = await nft.connect(user1).approve( 1)
    await approve.wait()
    let tranasaction = await marketplace.connect(user1).listNFT('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', 1, 1)

  })
});
