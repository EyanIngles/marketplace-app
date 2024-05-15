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
    console.log(cost)
    const amount = e.target.elements.mintAmount.value;
    setMintAmount(amount)

    setIsWaiting(true)

    try {
        const signer = await provider.getSigner();
      console.log('transaction')
    } catch {
        window.alert('cost may be out')
    }
    console.log(mintAmount)

    setIsLoading(true)
}
  return (<>
    <div className='form-container'>
    <Form onSubmit={(e) => mintHandler(e)}>
        <Form.Group>
            <Form.Label>Mint one of our NFT's here!</Form.Label>
            <Form.Control name='mintAmount' type="number" placeholder="How many?"/><br></br>
            <br></br>
            <Button variant="primary" type="submit">Mint NFT</Button>
        </Form.Group>
    </Form>
    </div>
    </>
  )
}

export default ListNft