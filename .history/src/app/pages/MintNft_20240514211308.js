import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useSelector, dispatch } from 'react-redux'
import { ethers } from 'ethers'


const ListNft = ()  => {
  const dispatch = useDispatch()

  const nft = useSelector(state => state.nft.contract)
  const provider = useSelector(state => state.provider.connection)

  // mint dispatch
  const mintNft = useSelector(state => state.nft.mintNft)

  const mintHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()

    // convert form submit to values to use.
    let mintAmount = e.target.elements.mintAmount.value;

    console.log("Mint Amount:", mintAmount);

    await mint(dispatch, provider, nft, chainId, mintAmount)


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