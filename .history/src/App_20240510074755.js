import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import { BuyNft } from './BuyNft';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function App() {
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
        className='nav'> <BuyNft></BuyNft>
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
    </div>
  );
}

export default App;
