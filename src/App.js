import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Blockies from 'react-blockies';
// bootstrap imports
import { Button, Tab, Tabs, Card } from 'react-bootstrap';
// page imports
import BuyNft from './app/pages/BuyNft';
import ListNft from './app/pages/ListNft';
import MintNft from './app/pages/MintNft';


import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// import dispatches
import { loadAccount, loadNetwork, loadProvider, loadNft, loadNftBalance } from './app/reducers/interactions';



function App() {
  // useSelectors
  // fetching account from useDispatch()
let account = useSelector(state => state.provider.account);
const NFTBalance = useSelector(state => state.nft.nftBalance)

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
  if(loadBlockchain) {
  // loadAccount
    account = await loadAccount(dispatch)
  // Load account address and reload page when account has been changed.
    window.ethereum.on('accountsChanged', async () => {
    account = await loadAccount(dispatch)
  })
  // load account balance in ether
  let balance = await provider.getBalance(account)
  balance = ethers.formatEther(balance);
  setBalance(balance.slice(0,7))
  } else {
    window.alert("MetaMask error, Please try again")
  }


  // load NFT contract to redux store
  const nft = await loadNft(provider, chainId, dispatch)
  if(nft) {
    //get NFT balance or how many the account has in NFT's and display it on redux.
    await loadNftBalance(nft, provider, chainId, account, dispatch)
  } else {
    window.alert('Error message: unable to load NFT contract and retrieve balance')
    setIsLoading(false)
  }

  setIsLoading(false)
  }

  // useEffect to load blockchain and access blockchain data
  useEffect(() => {
    if(isLoading) {
    }
  }, [isLoading, account])

  return (
    <div className="App">
      <header >
        { account ? (
          <>
          <h1>NFT Marketplace</h1><hr></hr>
          <Card style={{ maxWidth: '100%', maxHeight: '50%', textAlign: 'center'}}><Blockies
          className='blockie'
          seed={account}/>
          <p>Account: {account.slice(0,6)}...{account.slice(37)}<br></br>
          Account Balance: {balance} ETH <br></br>
          NFT Balance: {NFTBalance}</p>
          </Card><hr></hr>
          </>
        ) : (
          <><h1>NFT Marketplace</h1><Button onClick={loadBlockchain}>Connect Wallet</Button><hr></hr></>
        )}
        </header>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="my-3"
      justify
      >
        <Tab
        eventKey="home"
        title="List"
        className='nav'>
          <ListNft/>
        </Tab>
        <Tab eventKey="profile"
        title="Buy"
        className='nav'>
          <BuyNft/>
        </Tab>
        <Tab eventKey="Profile"
        title="Mint"
        className='nav'>
          <MintNft/>
        </Tab>
    </Tabs>
    </div>
  );
}

export default App;
