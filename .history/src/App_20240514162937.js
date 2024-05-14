import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Blockies from 'react-blockies';
// bootstrap imports
import { Button, Tab, Tabs } from 'react-bootstrap';
// page imports
import BuyNft from './app/pages/BuyNft';
import ListNft from './app/pages/ListNft';
import MintNft from './app/pages/MintNft';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// import dispatches
import { loadAccount, loadNetwork, loadProvider, loadMarketplace, loadNft } from './app/reducers/interactions';


function App() {
  // useSelectors
  // fetching account from useDispatch()
let account = useSelector(state => state.provider.account);

  // dispatches
const dispatch = useDispatch();

// useState for loading account and balance
const [balance, setBalance] = useState(0);
const [isLoading, setIsLoading] = useState(true)

const loadBlockchain = async () => {
  //load provider
  let provider = await loadProvider(dispatch)
 // loading network and dispatching the data
  const chainId = await loadNetwork(dispatch, provider)
  // Load account address and reload page when account has been changed.
  provider = new ethers.BrowserProvider(window.ethereum);
  // It will prompt user for account connections if it isnt connected
  const signer = await provider.getSigner();
  console.log("Account:", await signer.getAddress());

  // load account balance in ether
  if(account = 'undefined') {
    loadBlockchain()
}
  else {
  let balance = await provider.getBalance(account)
  balance = ethers.formatEther(balance);
  setBalance(balance)
  }

  // load marketplace contract to redux store
  const marketplace = await loadMarketplace(provider, chainId, dispatch)

  // load NFT contract to redux store
  const nft = await loadNft(provider, chainId, dispatch)
  }

  // useEffect to load blockchain and access blockchain data
  useEffect((account) => {
    if(account = 'undefined') {
      console.log(account)
      loadBlockchain()
    }
  }, [account])

  return (
    <div className="App">
      <header >
        <h1>NFT Marketplace</h1><Button onClick={loadBlockchain}>Refresh data</Button><hr></hr>
        { account ? (
          <>
          <h4></h4><Blockies
          className='Identicon mx-2'
          seed={account}/>
          <p>Account: {account}<br></br>
          Account Balance: {balance}</p><hr></hr>
          </>
        ) : (
          <><p>Loading... Please Connect Wallet</p></>
        )}
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
