import './App.css';
import { useSelector, useDispatch } from "react-redux";
// bootstrap imports
import { Card, Button, Tab, Tabs } from 'react-bootstrap';
// page imports
import BuyNft from './app/pages/BuyNft';
import ListNft from './app/pages/ListNft';
import MintNft from './app/pages/MintNft';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// contract imports
import NFT_ABI from './abis/NFT_ABI.json'
import MARKETPLACE_ABI from './abis/MARKETPLACE_ABI.json';
import config from './config.json'




function App() {
  // useSelectors
//const testAccount = useSelector((state) => state.setAccount.value);
const dispatch = useDispatch();
// useState for loading account and balance
const [account, setAccount] = useState(null);
const [balance, setBalance] = useState(0);

const [isLoading, setIsLoading] = useState(true)

const loadBlockchain = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
//connecting to meta mask, but having issues with ethers.
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  setAccount(account);
  dispatch(account)
  let signer = await provider.getSigner();

  // load account balance in ether
  let balance = await provider.getBalance(account)
  balance = ethers.formatEther(balance);
  setBalance(balance)
  // finish loading so set isLoading to false
  setIsLoading(false);
  }

  // useEffect to load blockchain and access blockchain data
  useEffect(() => {
    if(isLoading) {
      loadBlockchain()
    }
  }, [isLoading])

  return (
    <div className="App">
      <header >
        <h1>NFT Marketplace</h1><Button onClick={loadBlockchain}></Button>
        <p>Account: {account}</p>
        <p>Account Balance: {balance}</p>
      </header>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="my-3"
      justify>
        <Tab
        eventKey="home"
        title="List"
        className='nav'><ListNft></ListNft>
        </Tab>
        <Tab eventKey="profile"
        title="Buy"
        className='nav'><BuyNft></BuyNft>
        </Tab>
        <Tab eventKey="longer-tab"
        title="Mint"
        className='nav'><MintNft></MintNft>
        </Tab>
    </Tabs>
    </div>
  );
}

export default App;
