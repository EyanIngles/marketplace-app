import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ethers } from 'ethers'
import { mintNft } from '../reducers/interactions'


const ListNft = ()  => {
  const dispatch = useDispatch()

  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)
  const chainId = useSelector(state => state.provider.chainId)

  // mint dispatch
  const mintNft = useSelector(state => state.nft.mintNft)
  const mintHandler =  async(e) => {
    const [mintAmount, setMintAmount] = useState(1)
    e.preventDefault()
    setIsWaiting(true)

    try {
        const signer = await provider.getSigner();
        const transaction = await nft.connect(signer).mint(mintAmount, { value: cost * mintAmount });
        await transaction.wait();
    } catch {
        window.alert('User rejected or transaction reverted')
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