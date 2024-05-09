const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Deploying Marketplace contract", async () => {
  let deployer, user1, user2, user3, user4, user5, user6;
  let marketplace; // Declare marketplace variable at a higher scope
  beforeEach(async () => {
    [deployer, user1, user2, user3, user4, user5, user6] = await ethers.getSigners();

    const MARKETPLACE = await ethers.getContractFactory("Marketplace");
    marketplace = await MARKETPLACE.deploy(); // Initialize marketplace
    //const NFT = await ethers.getContractFactory("NFT");
    //const nft = await NFT.deploy('testNFTName', 'testNFTSymbol')
  });
  it('track the markaplce contract and NFT contract', async () => {
    expect(await marketplace.address).to.equal(deployer.address);
  })
});
