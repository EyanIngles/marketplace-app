const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("Fetching Marketplace contract", async () => {
  let deployer, user1, user2, user3, user4, user5, user6;
  [deployer, user1, user2, user3, user4, user5, user6] = await ethers.getSigners();
  beforeEach(async () => {
    const MARKETPLACE = await ethers.getContractFactory("Marketplace");
    const marketplace = await MARKETPLACE.deploy()
    //const NFT = await ethers.getContractFactory("NFT");
    //const nft = await NFT.deploy('testNFTName', 'testNFTSymbol')
  })
  console.log(marketplace.address)
    it('track the markaplce contract and NFT contract', async () => {
      console.log(deployer.address)
      expect(await marketplace.address()).to.equal(deployer.address)
    })

})