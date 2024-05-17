import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { ethers } from 'ethers'


const ListNft = () => {
  const dispatch = useDispatch()
  const marketplace = useSelector(state => state.marketplace.contract)
  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)
  const loadListNft = useSelector(state => state.marketplace.listNFT)

  const listHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()

    // convert form submit to values to use.
    let nftAddress = e.target.elements.first.value;
    let tokenId = e.target.elements.second.value;
    let inputPrice = e.target.elements.third.value;
    price = ethers.parseEther(inputPrice)

    console.log("NFT Address:", nftAddress);
    console.log("Token ID:", tokenId);
    console.log("Price in ETH:", price);


    await loadListNft(nft, marketplace, provider, chainId, tokenId, price, dispatch)

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