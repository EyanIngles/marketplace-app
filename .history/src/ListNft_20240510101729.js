import React from 'react'
import { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

import TestImage from './testImage1.png';

const ListNft = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <>
    <div style={{ borderLine: '10px',
        margin:'10px', padding: '4%' }}>
          <Form>
              <fieldset >
                  <Form.Group className="mb-3">
                      <Form.Label htmlFor="">input 1</Form.Label>
                      <Form.Control id="" placeholder="input1" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                  <Form.Label htmlFor="">input 2</Form.Label>
                      <Form.Control id="" placeholder="input2" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Check
                          type="checkbox"
                          id=""
                          label="accept gas fees and dev fees" />
                  </Form.Group>
                  <Button type="submit" onClick={handleShow}>List NFT</Button>
                  <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
              </fieldset>
          </Form>
      </div>
      <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} />
      ))}
        </>
    <div className='carousel-container'>
              <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item interval={3000}>
                      <Image src={TestImage} alt="First slide" style={{ maxWidth: '45%' }} />
                      <Image src={TestImage} alt="First slide" style={{ maxWidth: '45%' }} />
                      <Carousel.Caption>
                          <h3>First slide NFT</h3>
                          <p>NFT name and price here</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                      <Image src={TestImage} alt="First slide" style={{ maxWidth: '45%' }} />
                      <Image src={TestImage} alt="First slide" style={{ maxWidth: '45%' }} />
                      <Carousel.Caption>
                          <h3>Second slide NFT</h3>
                          <p>NFT name and price here</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Image src={TestImage} alt="First slide" style={{ maxWidth: '45%' }} />
                      <Image src={TestImage} alt="First slide" style={{ maxWidth: '45%' }} />
                      <Carousel.Caption>
                          <h3>Third slide NFT</h3>
                          <p>NFT name and price here</p>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
          </div>
          </>
  )
}

export default ListNft