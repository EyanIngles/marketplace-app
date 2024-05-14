import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ethers } from 'ethers'


const ListNft = () => {
  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)

  const listHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()

    // convert form submit to values to use.
    let mintAmount = e.target.elements.first.value;

    console.log("NFT Address:", nftAddress);
    console.log("Token ID:", tokenId);
    console.log("Price in ETH:", price);

    //get signer
    const signer = await provider.getSigner()

    //approve nft transfer
    let approval = await nft.connect(signer).approve(marketplace.target, tokenId)
    await approval.wait()


  }
  return (<>
    <div className='form-container'>
    <Form onSubmit={(e) => listHandler(e)}>
        <Form.Group>
            <Form.Label>Mint one of our NFT's here!</Form.Label>
            <Form.Control name='mintAmount' type="number" placeholder="How many?"/><br></br>
            <br></br>
            <Button variant="primary" type="submit">Mint NFT</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft