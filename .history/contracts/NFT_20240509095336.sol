// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage{
    uint256 public tokenCount;

    constructor() ERC721("name", "symbol"){
    }

    function mint(string memory _tokenURI) external payable returns(uint256){
        require(tokenCount <=149, "All NFT's have been minted already...");
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return(tokenCount);
    }
}