import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';

const BuyNft = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const marketplace = useSelector(state => state.marketplace.contract);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Fetch the number of listings
        const listingCount = await marketplace.nextIdListing();
        let allListings = [];

        // Loop through each listing ID and fetch its details
        for (let i = 1; i < listingCount; i++) {
          const listing = await marketplace.nftListings(i);
          const formattedListing = {
            listingId: listing.listingId.toString(),
            nftAddress: listing.NFT,
            tokenId: listing.tokenId.toString(),
            price: ethers.utils.formatEther(listing.price.toString()),
            seller: listing.seller,
            sold: listing.sold,
          };
          allListings.push(formattedListing);
        }
        setListings(allListings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchListings();
    }
  }, [loading, marketplace]);

  // Function to get the price of the first listing
  const getPriceOfFirstListing = () => {
    if (listings.length > 0) {
      const { price } = listings[0]; // Extract the price
      return price;
    }
    return null;
  };

  return (
    <div>
      <h2>List of NFTs</h2>
      {loading ? (
        <p>Loading data!...</p>
      ) : (
        <div>
          <p>Price of first listing: {getPriceOfFirstListing()}</p>
          {listings.map((listing) => (
            <div key={listing.listingId}>
              <h3>NFT Listing {listing.listingId}</h3>
              <p>Token ID: {listing.tokenId}</p>
              <p>Price: {listing.price}</p>
              <p>Seller: {listing.seller}</p>
              <p>Sold: {listing.sold ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyNft;


// this is to study and understand how to work on a few different ideas and ways of retrieving data.