import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import {
  ThirdwebProvider,
  ConnectButton,
} from "thirdweb/react";
import {
  createWallet,
  walletConnect,
  inAppWallet,
} from "thirdweb/wallets";




function App() {

  const client = createThirdwebClient({
    clientId: "YOUR_CLIENT_ID",
  });

  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    inAppWallet({
      auth: {
        options: [
          "email",
          "google",
          "apple",
          "facebook",
          "phone",
        ],
      },
    }),
  ];
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (

    <ThirdwebProvider>
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={"dark"}
      connectModal={{ size: "compact" }}
    />
  </ThirdwebProvider>

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
