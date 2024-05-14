import React from 'react'
import { Card, Button } from 'react-bootstrap'

const BuyNft = () => {
  return (
    
<div className="card-container"
    style={{ margin: '20px auto' }}>
<Card className="card">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>nft1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"
    className='button'
    style={{ width:'100%', margin:'1px' }}>Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="card">
  <Card.Img variant="middle" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>nft2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"
    className='button'
    style={{ width:'100%', margin:'1px' }}>Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="card">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>nft3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"
    className='button'
    style={{ width:'100%', margin:'1px' }}>Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  )
}

export default BuyNft