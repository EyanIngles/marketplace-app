import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const ListNft = () => {
  const marketplace = useSelector(state => state.marketplace.contract)
  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)

  const listHandler = async (e) => {
    e.preventDefault()
    const signer = await provider.getSigner()

    const nftAddress = e.target.elements.first.value;
    const tokenId = e.target.elements.second.value;
    const price = e.target.elements.third.value;

    console.log("NFT Address:", nftAddress);
    console.log("Token ID:", tokenId);
    console.log("Price in ETH:", price);

    const approval = await nft.connect(signer).approve(marketplace.contract.target)
    //approve nft transfer

    // transfer to marketplace address
    //let transaction = await marketplace.connect(signer).ListNft(e.target.id(first))



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