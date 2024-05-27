import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Col, Spinner } from 'react-bootstrap';
import { ethers } from 'ethers'

import { loadBuyNft, loadListNft } from '../reducers/interactions'

const BuyNft = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState (true)

  const dispatch = useDispatch();
  const chainId = useSelector(state => state.provider.chainId)
  const provider = useSelector(state => state.provider.connection)
  const nft = useSelector(state => state.nft.NContract)
  const nftList = useSelector(state => state.marketplace.listNft)

  const marketplace = useSelector(state => state.marketplace.contract)

// add a for loop to add a listing(individual NFT listing visual)
  const ListHandler = async () => {
        if(ListHandler) {
          try {
            // load marketplace listed nfts to be fetched
            console.log("try statement")
            const listingCount = await marketplace.nftListings();
            console.log(marketplace)
            let allListings = [];


            // Loop through each listing ID and fetch its details
            for (let i = 1; i < listingCount; i++) {
              const listing = await marketplace.nftListings(i);
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
            setLoading(false)
          } catch {
            window.alert('Unable to find any listings, please refresh page or try again later.')
            setLoading(false)
          }
        }}

  const BuyHandler = async (index) => {

if (BuyHandler) {
  try {
  const listingId = await listings[index].listingId
  const price = await listings[index].price

  await loadBuyNft(nft, marketplace, provider, chainId, listingId, price , dispatch)
  console.log(index)
  console.log(price)
  console.log(listingId)
  } catch {
    window.alert("Insufficient funds or Unavailable NFT, please try again or refresh")
  }
}}
  return (
<>
{ loading === false? (
    <Button onClick={ListHandler}>Loading Data... <Spinner></Spinner></Button>
) : (
  <div className="card-container"
  style={{ margin: '20px auto' }}>
{listings.map((listing, index) => (
<Col key={index} sm={9} md={5} lg={5} xl={5}>
          <Card className="mb-4">
            <Card.Img variant="top" src={`${listing.image}`} />
            <Card.Body>
            <Card.Title>{`${listing.name}`}</Card.Title>
            <Card.Title>{`${listing.listingId}`}</Card.Title>
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