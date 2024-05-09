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
    mapping(uint256 => NFTListing) public nftListings;

function listNFT(address _contractAddress, uint256 _tokenId, uint256 _price) public payable{
    collectionMapping[_contractID] = nftCollectionStruct(_contractID, _contractName, _nftID, 0 );

    nextIdListing ++;
    }

}
