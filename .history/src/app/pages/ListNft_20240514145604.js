import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ethers } from 'ethers'


const ListNft = () => {
  const marketplace = useSelector(state => state.marketplace.contract)
  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)

  const listHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()

    //
    let nftAddress = e.target.elements.first.value;
    let tokenId = e.target.elements.second.value;
    let price = e.target.elements.third.value;
    price = ethers.parseEther(price)

    console.log("NFT Address:", nftAddress);
    console.log("Token ID:", tokenId);
    console.log("Price in ETH:", price);
    console.log(marketplace.target)

    //get signer
    const signer = await provider.getSigner()

    //approve nft transfer
    let approval = await nft.connect(signer).approve(marketplace.target, tokenId)
    await approval.wait()

    // transfer to marketplace address
    let transaction = await marketplace.connect(signer).listNFT(nftAddress, tokenId, price)
    await transaction.wait()



  }
  return (<>
    <div className='form-container'>
    <Form onSubmit={(e) => listHandler(e)}>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control name='first' type="text" placeholder="NFT address"/><br></br>
            <Form.Control name='second' type="number" placeholder="Token ID"/><br></br>
            <Form.Control name='third' type="text" placeholder="Price in Eth" />
            <br></br>
            <Button variant="primary" type="submit">List NFT</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft