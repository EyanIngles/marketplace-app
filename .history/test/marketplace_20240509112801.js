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
    console.log(nft1)
    console.log(marketplace)
  })
  it('lists that minted nft onto the marketplace contract.', async () => {
    //approve the nft transfer first
    let approve = await nft.connect(user1).approve('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',1)
    await approve.wait()

  })
});
