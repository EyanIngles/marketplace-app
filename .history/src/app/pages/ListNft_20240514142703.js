import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const ListNft = () => {
  const marketplace = useSelector(state => state.marketplace.contract)
  const provider = useSelector(state => state.provider.connection)

  const listHandler = async (e) => {
    e.preventDefault()
    const signer = await provider.getSigner()
    //approve nft transfer

    // transfer to marketplace address
    //let transaction = await marketplace.connect(signer).ListNft(e.target.id(first))

  console.log("listhandler working")
  console.log(e.target.id)

  }
  return (<>
    <div className='form-container'>
    <Form>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control id='first' type="text" placeholder="NFT address"/><br></br>
            <Form.Control id='second' type="number" placeholder="Token ID"/><br></br>
            <Form.Control id='third' type="text" placeholder="Price in Eth" onSubmit={(e) => listHandler(e)} />
            <br></br>
            <Button variant="primary" type="submit">List NFT</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft