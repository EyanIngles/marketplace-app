// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

    contract Marketplace {
    uint256 public nextIdListing;

    struct NFTListing {
        uint256 listingId;
        IERC721 NFT;
        uint256 tokenId;
        uint256 price;
        address payable seller;
        bool sold;
    }
    // mappings
    mapping(uint256 => NFTListing) public nftListings;
    // events
    event nftListed(
        uint256 listingId,
        address indexed NFT,
        address indexed seller,
        uint256 tokenId,
        uint256 price
    );
    event soldNft(
        uint256 listingId,
        address indexed NFT,
        address buyer,
        address seller,
        uint256 price,
        bool sold
    );

function listNFT(IERC721 _NFT, uint256 _tokenId, uint256 _price) external  {
   require(_price > 0, "input has to be more than 0");


    _NFT.transferFrom(msg.sender, address(this), _tokenId);
    nftListings[nextIdListing] = NFTListing(
        nextIdListing,
        _NFT,
        _tokenId,
        _price,
        payable(msg.sender),
        false
    );
    nextIdListing ++;

    // emit event
    emit nftListed (nextIdListing, address(_NFT), msg.sender, _tokenId, _price);

    }
    function buyNFT(uint256 _listingId, uint256 _tokenId) external payable{
        require(uint256 price > 0, 'not enough currency in wallet for this purchase');
            nftListings[nextIdListing] = NFTListing(
        nextIdListing,
        _NFT,
        _tokenId,
        price,
        payable(msg.sender),
        true );
        nextIdListing --;
        // emmiting event
        emit soldNft(
        nextIdListing,
        address(NFT),
        msg.sender,
        address seller,
        price,
        true);
    }
}