import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Col } from 'react-bootstrap';
import { ethers } from 'ethers'

import { loadBuyNft } from '../reducers/interactions'

const BuyNft = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState (true)

  const dispatch = useDispatch();
  const chainId = useSelector(state => state.provider.chainId)
  const provider = useSelector(state => state.provider.connection)
  const nft = useSelector(state => state.nft.NContract)

  const marketplace = useSelector(state => state.marketplace.contract)

// add a for loop to add a listing(individual NFT listing visual)
  const ListHandler = async (e) => {
        e.preventDefault()

        const listingCount = await marketplace.nextIdListing();
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
  }

  const BuyHandler = async (index) => {

  const listingId = await listings[index].listingId
  const price = await listings[index].price
  const seller = await listings[index].seller

  await loadBuyNft(nft, marketplace, provider, chainId, listingId, price , dispatch)

  console.log(index)
  console.log(price)
  console.log(listingId)
  console.log(seller)
}
  return (
<>
<Button onClick={(e) => ListHandler(e)}>Click me!</Button>
<div className="card-container"
    style={{ margin: '20px auto' }}>
{listings?.map((listing, index) => (
<Col key={index} sm={12} md={6} lg={4} xl={3}>
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
</>
  )
}

export default BuyNft