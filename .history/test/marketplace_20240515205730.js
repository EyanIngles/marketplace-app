const { expect } = require('chai');
const { getValue } = require('@testing-library/user-event/dist/utils');
const { ethers } = require('hardhat');

describe("Deploying Marketplace contract", async () => {


  let deployer, user1, user2, user3, user4, user5, user6, tranasaction, result, URI;
  let marketplace;
  let nft;
  // price needs to be passed through in wei by using parseEther function
  let price = (n) => {
    return ethers.parseEther(n.toString())
  }


  beforeEach(async () => {
    [, , ,deployer, user1, user2, user3, user4, user5, user6] = await ethers.getSigners();

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

  })
  it('lists that minted nft onto the marketplace contract.', async () => {
    //mint nft
    await nft.connect(user1).mint(1)
    //approve the nft transfer first
    await nft.connect(user1).approve(marketplace.address, 1)
    // transact nft to marketplace address and list function.
    let listNft = await marketplace.connect(user1).listNFT( nft, 1,  1)
    await listNft.wait()


  })
});
