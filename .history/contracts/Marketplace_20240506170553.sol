// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


 contract Marketplace {

    struct nftCollectionStruct  {
        uint256 contractID;
        string contractName;
        uint256 nftID;
    }
    mapping(uint256 => nftCollectionStruct) public collectionMapping;

function uploadNFT(uint256 _contractID, string memory _contractName, uint256 _nftID) public {
    collectionMapping[_contractID] = nftCollectionStruct(_contractID, _contractName, _nftID);

    }
    constructor() {

    }
}
