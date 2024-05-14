import React from 'react'
import { Form , Button } from 'react-bootstrap'

const ListNft = () => {
  return (<>
    <div className='form-container'>
    <Form>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control type="text" placeholder="first"/><br></br>
            <Form.Control type="text" placeholder="first"/>
            <Button type="submit" onClick={console.log('form submitting..')}></Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft