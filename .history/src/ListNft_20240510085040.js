import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import TestImage from './testImage1.png';

const ListNft = () => {
  return (

    <Carousel>
      <Carousel.Item interval={1000}>
      <Image src='TestImage' alt="First slide"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image src='/Users/eyaningles/Blockchain/marketplace-app/src/testImage1.png' alt="second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='./testImage1.png' alt="third slide"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ListNft