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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get signer
    const signer = provider.getSigner();
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

  // metamask provider connect
const web3Handler2 = async () => {
  let provider, signer;
  if (window.ethereum == null) {
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
  } else {
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    let blockNumber = await provider.getBlockNumber();
    let balance = await provider.getBalance("ethers.eth");
  }
};