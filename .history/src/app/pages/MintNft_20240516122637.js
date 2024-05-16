import { React, useState } from 'react'
import { Form , Button, Carousel } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { ethers } from 'ethers'
import { loadMintNft } from '../reducers/interactions'
import IMAGES1 from './testImages/1.png'
import IMAGES2 from './testImages/5.png'
import IMAGES3 from './testImages/8.png'
import IMAGES4 from './testImages/12.png'
import IMAGES5 from './testImages/10.png'
import IMAGES6 from './testImages/2.png'
import IMAGES7 from './testImages/18.png'
import IMAGES8 from './testImages/20.png'


const ListNft = ()  => {
    // use State for mintamount
    const [mintAmount, setMintAmount] = useState(0)
  const dispatch = useDispatch()

  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)
  const chainId = useSelector(state => state.provider.chainId)

  // mint dispatch
  const mintNft = useSelector(state => state.nft.mintNft)

  const mintHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()

    // convert form submit to values to use.
    setMintAmount(1)

  // load minting function
  const mint = await loadMintNft(provider, nft, chainId, mintAmount, dispatch)

  }
  return (<>
    <div className='form-container'>
    <Form onSubmit={mintHandler}>
        <Form.Group>
            <Form.Label>Mint one of our NFT's here!</Form.Label>
            <hr></hr>
            <Button variant="primary" type="submit">Mint NFT</Button>
        </Form.Group>
    </Form>
    <div><br></br>
    <Carousel>
    <Carousel.Item interval={1000}>
        <img style={{ maxWidth:'20%' }} src={IMAGES1} text="First slide" />
        <img style={{ maxWidth:'20%' }} src={IMAGES2} text="First slide" />
        <img style={{ maxWidth:'20%' }} src={IMAGES3} text="First slide" />
        <img style={{ maxWidth:'20%' }} src={IMAGES4} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p>preview of nft collection here</p>
    </div>

    </div>
    </>
  )
}

export default ListNft