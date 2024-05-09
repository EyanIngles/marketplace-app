// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
// import openzepplin for safe transfer of nft


 contract Marketplace {
    uint256 public uploadedNftCount;

    struct NFTListing {
        address owner;
        address contractAddress;
        uint256 tokenId;
        uint256 price;
    }
    mapping(uint256 => NFTListing) public nftListings;

function listNFT(address _contractAddress, uint256 _tokenId, uint256 _price) public payable{
    collectionMapping[_contractID] = nftCollectionStruct(_contractID, _contractName, _nftID, 0 );
    uploadedNftCount ++;
    }

    function sellNFT(address _contractID, uint256 _nftID, uint256 _price) public payable{
        collectionMapping[_contractID] = nftCollectionStruct(_contractID,'', _nftID , _price);
        uploadedNftCount --;
        // call safeTranfer for nfts here
    }

        // change price function

        // buy function

        // --------- got to have it so that the person who
        //upliaded the nft can be the only one who can sell their own nft
        // ----------
    }
}
