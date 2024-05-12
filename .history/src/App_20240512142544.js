import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
//connecting to meta mask, but having issues with ethers.


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
    provider = new ethers.BrowserProvider(window.ethereum)
    // Get signer
    signer = await provider.getSigner();
    loadContracts(signer);
  } else {
    console.error("Web3 injection not available. Please install MetaMask or another Web3 provider.");
  }
}


// connecting to contracts via web3
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
