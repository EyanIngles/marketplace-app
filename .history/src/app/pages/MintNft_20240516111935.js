import { React, useState } from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { ethers } from 'ethers'
import { loadMintNft } from '../reducers/interactions'


const ListNft = ()  => {
    // use State for mintamount
    const [mintAmount, setMintAmount] = useState(0)
    const [cost, setCost] = useState(0)
  const dispatch = useDispatch()

  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)
  const chainId = useSelector(state => state.provider.chainId)

  // mint dispatch
  const mintNft = useSelector(state => state.nft.mintNft)

  const nftCostHandler = async () => {
    cost = await nft.cost()
    console.log(cost)
  }

  const mintHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()

    // convert form submit to values to use.
    const amount = e.target.elements.amount.value;
    setMintAmount(amount)

    await setMintNft(provider, nft, chainId, mintAmount, dispatch)

  }
  return (<>
    <div className='form-container'>
    <Form onSubmit={(e) => nftCostHandler(e)}>
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