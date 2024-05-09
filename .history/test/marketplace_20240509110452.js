const { expect } = require('chai');
const { ethers } = require('hardhat');




describe("Deploying Marketplace contract", async () => {
  let deployer, user1, user2, user3, user4, user5, user6, tranasaction, result, URI;
  let marketplace;
  let nft; // Declare marketplace variable at a higher scope


  beforeEach(async () => {
    [deployer, user1, user2, user3, user4, user5, user6] = await ethers.getSigners();

    const MARKETPLACE = await ethers.getContractFactory("Marketplace");
    marketplace = await MARKETPLACE.deploy(); // Initialize marketplace
    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy(
      "name",
      "symbol",
      100000,
      100,
      0,
      "testURI.."
    )
  });
  it('track the nft args', async () => {
    expect( await nft.name()).to.equal("name")
    expect( await nft.symbol()).to.equal("symbol")
  })
  it('mints an nft', async () => {
    await nft.connect(user1).mint(1)
    console.log(await nft.price())
  })
});
