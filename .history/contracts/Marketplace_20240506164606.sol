// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


 contract Marketplace {
    uint256 public contractID;
    string public nftCollection;
    function NFT(uint256 _contractID, string memory _nftCollection) public {
        contractID = _contractID;
        nftCollection = _nftCollection;
    }
    constructor() {

    }
}
