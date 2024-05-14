import React from 'react'
import { Form , Button } from 'react-bootstrap'

const listHandler = async (e) => {

}

const ListNft = () => {
  return (<>
    <div className='form-container'>
    <Form>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control id='first' type="text" placeholder="NFT address"/><br></br>
            <Form.Control id='second' type="text" placeholder="Token ID"/><br></br>
            <Form.Control id='third' type="text" placeholder="Price in Eth" value={e}/>
            <br></br>
            <Button variant="primary" type="submit" onClick={console.log(listHandler(e.target.value))}>List NFT</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft