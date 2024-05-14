import React from 'react'
import { Form , Button } from 'react-bootstrap'

const listHandler = async (e) => {
  e.preventDefault()
console.log("listhandler working")
console.log(e)
}

const ListNft = () => {
  return (<>
    <div className='form-container'>
    <Form>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control id='first' type="text" placeholder="NFT address"/><br></br>
            <Form.Control id='second' type="number" placeholder="Token ID"/><br></br>
            <Form.Control id='third' type="text" placeholder="Price in Eth" />
            <br></br>
            <Button variant="primary" type="submit" onClick={(e) => listHandler(e)}>List NFT</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft