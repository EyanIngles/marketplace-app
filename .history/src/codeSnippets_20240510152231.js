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