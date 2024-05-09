// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
// import openzepplin for safe transfer of nft


 contract Marketplace {
    uint256 public uploadedNftCount;

    struct nftCollectionStruct  {
        uint256 contractID;
        string contractName;
        uint256 nftID;
        uint256 price;
    }
    mapping(uint256 => nftCollectionStruct) public collectionMapping;

function mintNFT(uint256 _contractID, string memory _contractName, uint256 _nftID) public payable{
    collectionMapping[_contractID] = nftCollectionStruct(_contractID, _contractName, _nftID, 0 );
    uploadedNftCount ++;
    }

    function sellNFT(uint256 _contractID, uint256 _nftID, uint256 _price) public payable{
        collectionMapping[_contractID] = nftCollectionStruct(_contractID,'', _nftID , _price);
        uploadedNftCount --;
        // call safeTranfer for nfts here
    }
    constructor() {

        // change price function

        // buy function

        // --------- got to have it so that the person who
        //upliaded the nft can be the only one who can sell their own nft
        // ----------
    }
}
