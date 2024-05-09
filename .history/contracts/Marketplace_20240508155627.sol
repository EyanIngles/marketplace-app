// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

 contract Marketplace is ReentrancyGuard{
    uint256 public nextIdListing;

    struct NFTListing {
        address owner;
        address contractAddress;
        uint256 tokenId;
        uint256 price;
    }
    // mappings
    mapping(uint256 => NFTListing) public nftListings;
    // events
    event nftListed(
        uint256 nextIdListing,
        address owner,
        address contractAddress,
        uint256 tokenId,
        uint256 price
    );

function listNFT(address _contractAddress, uint256 _tokenId, uint256 _price) external{
    IERC721(_contractAddress).safeTransferFrom(msg.sender, address(this), _tokenId);
    nftListings[nextIdListing] = NFTListing({
        owner: msg.sender,
        contractAddress: _contractAddress,
        tokenId: _tokenId,
        price: _price
    });
    // emit event
    emit nftListed (nextIdListing, msg.sender, _contractAddress, _tokenId, _price);
    nextIdListing ++;
    }

}
