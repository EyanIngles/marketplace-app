// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


 contract Marketplace {
    uint256 public ID;
    string public nftCollection;
    function NFT(uint256 _ID, string memory _nftCollection) public {
        ID = _ID;
        nftCollection = _nftCollection;
    }
    constructor() {

    }
}
