import React from 'react'
import { Form , Button } from 'react-bootstrap'

const ListNft = () => {
  return (<>
    <div className='form-container'>
    <Form>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control id='first' type="text" placeholder="NFT address"/><br></br>
            <Form.Control id='second' type="text" placeholder="Token ID"/>
            <br></br>
            <Button variant="primary" type="submit" onClick={console.log('create a input handler for minting')}>List</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft