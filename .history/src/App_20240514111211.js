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
// import dispatches
import { loadAccount, loadNetwork, loadProvider, loadMarketplace } from './app/reducers/dispatch';


function App() {
  // useSelectors
  // fetching account from useDispatch()
const account = useSelector(state => state.provider.account);

  // dispatches
const dispatch = useDispatch();

// useState for loading account and balance
const [balance, setBalance] = useState(0);
const [isLoading, setIsLoading] = useState(true)

const loadBlockchain = async () => {
  //load provider
  const provider = await loadProvider(dispatch)
 // loading network and dispatching the data
  const chainId = await loadNetwork(dispatch, provider)
  // Load account address
  let account = await loadAccount(dispatch)

  // load account balance in ether
  let balance = await provider.getBalance(account)
  balance = ethers.formatEther(balance);
  setBalance(balance)
  // load marketplace contract to redux store
  const marketplace = await loadMarketplace(provider, chainId, dispatch)
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
        <h1>NFT Marketplace</h1><Button onClick={loadBlockchain}>Refresh</Button><hr></hr>
        <p>Account: {account}</p>
        <p>Account Balance: {balance}</p><hr></hr>
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
