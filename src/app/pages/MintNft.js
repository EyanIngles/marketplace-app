import { React, useState } from 'react'
import { Form , Button, Carousel, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { loadMintNft } from '../reducers/interactions'
import IMAGES1 from './testImages/img1.png'
import IMAGES2 from './testImages/img2.png'
import IMAGES3 from './testImages/img3.png'
import IMAGES4 from './testImages/img4.png'
import IMAGES5 from './testImages/img5.png'
import IMAGES6 from './testImages/img6.png'
import IMAGES7 from './testImages/img7.png'
import IMAGES8 from './testImages/img8.png'


const MintNFT = ()  => {
    // use State for mintamount
    const [mintAmount, setMintAmount] = useState(0)
    const [minting, setMinting] =  useState(false)
    const [mintComplete, setMintComplete] = useState(false)
  const dispatch = useDispatch()

  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)
  const chainId = useSelector(state => state.provider.chainId)

  // mint dispatch

  const mintHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()
    setMinting(true)
    //try statement
    if(mintHandler) {
      try {
         // convert form submit to values to use.
    setMintAmount(1)
    // load minting function
    const mint = await loadMintNft(provider, nft, chainId, mintAmount, dispatch)

    setMinting(false)
      } catch {
        setMinting(false)
        window.alert('Mint rejected or inefficient funds, try again...')
      }
      setMintComplete(true)
    }


  }
  return (<>
    <div className='form-container'>
  { minting ? (
       <Button disabled><p>Minting NFT! Please wait.</p><Spinner primary></Spinner></Button>
     ) : (
          <>
           <p>Mint one of our NFT's here!</p>
           <hr></hr>
           <Button variant="primary" onClick={mintHandler}>Mint NFT</Button>
           </>
     )}
     { !mintComplete ? (
      <p></p>
     ) : (
      window.alert(`CONGRATS! you have successfully minted a DAPP Punk.`)
     )}
    <div><br></br>
    <Carousel>
    <Carousel.Item interval={2000}>
        <img style={{ maxWidth:'23%' }} src={IMAGES1} alt="NFT-Preview"text="First slide" />
        <img style={{ maxWidth:'23%' }} src={IMAGES2} alt="NFT-Preview"text="First slide" />
        <img style={{ maxWidth:'23%' }} src={IMAGES3} alt="NFT-Preview"text="First slide" />
        <img style={{ maxWidth:'23%' }} src={IMAGES4} alt="NFT-Preview"text="First slide" />
        <Carousel.Caption>
          <h2>DAPP PUNKS</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img style={{ maxWidth:'23%' }} src={IMAGES5} alt="NFT-Preview" text="First slide" />
        <img style={{ maxWidth:'23%' }} src={IMAGES6} alt="NFT-Preview" text="First slide" />
        <img style={{ maxWidth:'23%' }} src={IMAGES7} alt="NFT-Preview" text="First slide" />
        <img style={{ maxWidth:'23%' }} src={IMAGES8} alt="NFT-Preview" text="First slide" />
        <Carousel.Caption>
          <h2>DAPP PUNKS</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    </div>
    </>
  )
}

export default MintNFT