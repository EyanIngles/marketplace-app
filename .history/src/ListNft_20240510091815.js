import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import TestImage from './testImage1.png';

const ListNft = () => {
  return (

    <Carousel data-bs-theme="light" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000} >
      <Image src={TestImage} alt="First slide" style={{maxWidth:'40%'}}/>
        <Carousel.Caption>
          <h3>First slide NFT</h3>
          <p>NFT name and price here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <Image src={TestImage} alt="second slide" style={{maxWidth:'40%'}} />
        <Carousel.Caption>
          <h3>Second slide NFT</h3>
          <p>NFT name and price here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={TestImage} alt="third slide" style={{maxWidth:'40%'}} />
        <Carousel.Caption>
          <h3>Third slide NFT</h3>
          <p>NFT name and price here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ListNft