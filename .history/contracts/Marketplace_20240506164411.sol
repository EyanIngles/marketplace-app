// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


 contract Marketplace {
    uint256 public ID;
    string public nftCollection;
    function NFT(uint256 _ID) public {
        ID = _ID;
    }
    constructor() {

    }
}
