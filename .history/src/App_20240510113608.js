import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import { loadNetwork, loadProvider } from './app/walletConnect';

import BuyNft from './BuyNft';
import MintNft from './MintNft';
import ListNft from './ListNft';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function App() {
  const loadBlockchainData = async () => {

    const provider = await loadProvider(dispatch)

    const chainId = await loadNetwork(provider, dispatch)

    // reload page when network changes
    window.ethereum.on('chainChanged', () => {
      window.location.reload()
    })
    //reload page when accounts are changed
    window.ethereum.on('accountsChanged', async () => {
      console.log("account changed")
      await loadAccount(dispatch)
    })

    await loadTokens(provider, chainId, dispatch)
    await loadAMM(provider, chainId, dispatch)

  }

const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (
    <div className="App">
      <header >
        <h1>NFT Marketplace</h1>
      </header>
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
