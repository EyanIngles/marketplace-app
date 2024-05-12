import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState } from 'react';
import { ethers } from 'ethers';
import NFT_ABI from './abis/NFT_ABI.json'
import MARKETPLACE_ABI from './abis/MARKETPLACE_ABI.json';
import config from './config.json'




function App() {
//const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
const [account, setAccount] = useState(null);

const [isLoading, setIsLoading] = useState(true)

const loadBlockchain = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
//connecting to meta mask, but having issues with ethers.
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  setAccount(account);
  }
  return (
    <div className="App">
      <header >
        <h1>NFT Marketplace</h1><Button onClick={console.log("wallet connect")}></Button>
        <p>Account:{account}</p>
      </header>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="my-3"
      justify>
        <Tab
        eventKey="home"
        title="List"
        className='nav'>
        </Tab>
        <Tab eventKey="profile"
        title="Buy"
        className='nav'
        >
        </Tab>
        <Tab eventKey="longer-tab"
        title="Mint"
        className='nav'>
        </Tab>
    </Tabs>
    <div className="card-container"
    style={{ margin: '20px auto' }}>
<Card className="card">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>nft1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"
    className='button'
    style={{ width:'100%', margin:'1px' }}>Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="card">
  <Card.Img variant="middle" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>nft2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"
    className='button'
    style={{ width:'100%', margin:'1px' }}>Go somewhere</Button>
  </Card.Body>
</Card>

<Card className="card">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>nft3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary"
    className='button'
    style={{ width:'100%', margin:'1px' }}>Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    </div>
  );
}

export default App;
