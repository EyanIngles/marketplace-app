
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-etherscan");

module.exports = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
  },
};