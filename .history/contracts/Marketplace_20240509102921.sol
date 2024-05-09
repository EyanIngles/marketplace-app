// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

    contract Marketplace is ReentrancyGuard{
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
        IERC721 NFT,
        address seller,
        uint256 tokenId,
        uint256 price,
        bool sold
    );

function listNFT(IERC721 _NFT, uint256 _tokenId, uint256 _price) external nonReentrant {
    _NFT.approve(address(this), _tokenId);

    _NFT.safeTransferFrom(msg.sender, address(this), _tokenId);
    //nftListings[nextIdListing] = NFTListing({
        // basically the inputs for the NFTListings.. ---
   // });
    nextIdListing ++;
    // emit event

    emit nftListed (nextIdListing, _NFT, msg.sender, _tokenId, _price, false);

    }

}