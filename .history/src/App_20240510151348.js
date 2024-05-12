import { ethers } from 'ethers';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';

import MARKETPLACE_ABI from './abis/MARKETPLACE_ABI.json';
import NFT_ABI from './abis/NFT_ABI.json';
import config from './config.json'

import BuyNft from './BuyNft';
import MintNft from './MintNft';
import ListNft from './ListNft';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [nft, setNft] = useState({})
  const [marketplace, setMarketplace] = useState({})
  // metamask provider connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);

    if (window.ethereum) {
      const config = new Configuration(
        ["https://node.pokt.network"],
        "5",
        "0022",
        "default",
        "pokt",
        "pocket"
      );
      const pocket = new Pocket([config]);
      const provider = pocket.getProvider();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      loadContracts(signer);
    } else {
      console.error("Web3 injection not available. Please install MetaMask or another Web3 provider.");
    }
  }
  const loadContracts = async (signer) => {
    try {
      const marketplace = new ethers.Contract(config.marketplace.address, MARKETPLACE_ABI, signer);
      setMarketplace(marketplace);
      const nft = new ethers.Contract(config.nft.address, NFT_ABI, signer);
      setNft(nft);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading contracts:', error);
      // Handle error (e.g., display a message to the user)
    }
  };

  return (
    <div className="App">
      <header >
        <h1>NFT Marketplace</h1>
      </header>
      <div className='Button-container'>
      <Button onClick={web3Handler}>connect wallet</Button>
      </div>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="my-3"
      justify>
        <Tab
        eventKey="home"
        title="List"
        className='nav'> <ListNft />
        </Tab>
        <Tab eventKey="profile"
        title="Buy"
        className='nav'
        > <BuyNft />
        </Tab>
        <Tab eventKey="longer-tab"
        title="Mint"
        className='nav'> <MintNft />
        </Tab>
    </Tabs>
    </div>
  );
}

export default App;
