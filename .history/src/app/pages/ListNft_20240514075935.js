import React from 'react'
import Form from 'react-bootstrap/Form'

const ListNft = () => {
  return (<>
    <div className='form-container'>
    <Form>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control type="text" placeholder="first"/>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft