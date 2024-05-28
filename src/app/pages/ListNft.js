import { React, useState} from 'react'
import { Form , Button, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { ethers } from 'ethers'
import { loadListNft } from '../reducers/interactions'


const ListNft = () => {
  const dispatch = useDispatch()

  const chainId = useSelector(state => state.provider.chainId)
  const marketplace = useSelector(state => state.marketplace.contract)
  const provider = useSelector(state => state.provider.connection)

  const [isListing, setIsListing] = useState(false)

  const listHandler = async (e) => {
    // prevent any auto behaviour from e value.
    e.preventDefault()
    setIsListing(true)

    if (listHandler) {
      try{

    // convert form submit to values to use.
    let nft = e.target.elements.first.value;
    let tokenId = e.target.elements.second.value;
    let inputPrice = e.target.elements.third.value;
    let price = ethers.parseEther(inputPrice).toString()


        await loadListNft(nft, marketplace, provider, chainId, tokenId, price, dispatch)
        setIsListing(false)
    } catch {
      window.alert("rejected or you are not the owner.")
      setIsListing(false)
    }
  }
}
  return (<>
    <div className='form-container'>
      { !isListing? (
        <Form onSubmit={(e) => listHandler(e)}>
        <Form.Group>
            <Form.Label> List Your NFT Here!</Form.Label>
            <Form.Control name='first' type="text" placeholder="NFT Address"/><br></br>
            <Form.Control name='second' type="number" placeholder="Token ID"/><br></br>
            <Form.Control name='third' type="text" placeholder="Price in ETH" />
            <br></br>
            <Button type="click">List NFT</Button>
        </Form.Group>
    </Form>
      ) : (
        <Button><p>Listing Your NFT! Please Wait...</p><Spinner></Spinner></Button>
      )}
    </div>
    </>
  )
}

export default ListNft