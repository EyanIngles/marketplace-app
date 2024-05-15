import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ethers } from 'ethers'
import { mintNft } from '../reducers/interactions'


const ListNft = ({ provider, nft, cost, setIsLoading})  => {
  const dispatch = useDispatch()
  const [isWaiting, setIsWaiting] = useState(false)
  const [mintAmount, setMintAmount] = useState(1)


  const chainId = useSelector(state => state.provider.chainId)

  // mint dispatch
  const mintHandler =  async(e) => {
    e.preventDefault()
    setIsWaiting(true)

    try {
        const signer = await provider.getSigner();
        const transaction = await nft.connect(signer).mint(mintAmount, { value: cost });
        await transaction.wait();
    } catch {
        window.alert('User rejected or transaction reverted')
    }
    console.log(mintAmount)
    console.log(parseFloat(cost));

    setIsLoading(true)

}
return(
    <Form onSubmit={mintHandler} style={{maxWidth: '450px', margin: '50px auto'}}>
        <Form.Group>
            <Form.Label>Choose how many you want mint:</Form.Label>
            <Form.Control type='number' value={mintAmount} onChange={(e) => setMintAmount(parseInt(e.target.value))} />
        </Form.Group>
        <Form.Group>
        {isWaiting? (
            <p>loading...</p>

        ) : (
            <Button variant='primary' type='submit' style={{ width: '100%'}}>MINT</Button>
        )}
        </Form.Group>
    </Form>
)
  //return (<>
  //  <div className='form-container'>
  //  <Form onSubmit={(e) => mintHandler(e)}>
  //      <Form.Group>
  //          <Form.Label>Mint one of our NFT's here!</Form.Label>
  //          <Form.Control name='mintAmount' type="number" placeholder="How many?"/><br></br>
  //          <br></br>
  //          <Button variant="primary" type="submit">Mint NFT</Button>
  //      </Form.Group>
  //  </Form>
  //  </div>
  //  </>
  //)
}

export default ListNft