const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const {ethers} =require("hardhat");

let deployer, user1, user2, user3, user4, user5, user6;
[deployer, user1, user2, user3, user4, user5, user6] = await ethers.getSigners();

describe("Fetching Marketplace contract", function () {
  beforeEach(async function () {
    const MARKETPLACE = await ethers.getContractFactory("Marketplace");
    const marketplace = await MARKETPLACE.deploy()
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy('testNFTName', 'testNFTSymbol')
  })
  describe("", () => {
    it('track the markaplce contract and NFT contract', async () => {
      expect(await ethers.getContract(marketplace.address)).to.equal(deployer.address)
    })
  })

})