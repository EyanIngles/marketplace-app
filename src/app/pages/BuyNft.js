import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Col, Spinner } from 'react-bootstrap';
import { ethers } from 'ethers'

import { loadBuyNft, loadListNft, loadMarketplace, loadNft } from '../reducers/interactions'

const BuyNft = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState (true)

  const dispatch = useDispatch();
  const chainId = useSelector(state => state.provider.chainId)
  const provider = useSelector(state => state.provider.connection)
  const nft = useSelector(state => state.nft.NContract)
  const nftlist = useSelector(state => state.marketplace.listNft)

  const marketplace = useSelector(state => state.marketplace.contract)

// add a for loop to add a listing(individual NFT listing visual)
  const ListHandler = async () => {
          setLoading(true)
        if(ListHandler) {
          try {
            // need to load all the nftList and have it accessable
            await loadMarketplace(provider, chainId, dispatch)
            await loadNft(provider, chainId, dispatch)
            console.log(nftlist)

            let price
            let tokenId
            let listing
            // need to access the smart contract mapping array and pull data from there
            let allListings = []

            // Loop through each listing ID and fetch its details
            for (let i = 0; i < 6; i++) {
              listing = await marketplace.nftListings(i);
              const formattedListing = {
                listingId: listing.listingId,
                nftAddress: listing.NFT.toString(),
                tokenId: listing.tokenId,
                price: listing.price,
                seller: listing.seller.toString(),
                sold: listing.sold.toString(),
              };
              allListings.push(formattedListing);
            }

            setListings(allListings)
            console.log(allListings)
            //setLoading(false)
          } catch {
            console.log('Unable to find any listings, please refresh page or try again later.')
            setLoading(true)
          }
        }}

  const BuyHandler = async (index) => {

if (BuyHandler) {
  try {
  const listingId = await listings[index].listingId
  const price = await listings[index].price

  await loadBuyNft(nft, marketplace, provider, chainId, listingId, price , dispatch)
  } catch {
    window.alert("Insufficient funds or Unavailable NFT, please try again or refresh")
  }
}}
  return (
<>
{ !loading || listings == 0? (
    <Button onClick={ListHandler}>Click me to Reload Blockchain <Spinner></Spinner></Button>
) : (
  <div className="card-container"
  style={{ margin: '20px auto' }}>
{listings?.map((listing, index) => (
<Col key={index} sm={9} md={5} lg={5} xl={5}>
          <Card className="mb-4">
            <Card.Body>
            <Card.Title>{`NFT`}</Card.Title>
            <Card.Title>{`#${listing.tokenId}`}</Card.Title>
              <Card.Text>
                Price: {(`${ethers.formatEther(listing.price)}`)} ETH
              </Card.Text>
              <Button variant="primary" onClick={() => BuyHandler(index)}>
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
))}
</div>
)}
</>
  )
}

export default BuyNft