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
      // Use injected provider if available
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Get signer

    } else {
      console.error("Web3 injection not available. Please install MetaMask or another Web3 provider.");
    }
  }


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
