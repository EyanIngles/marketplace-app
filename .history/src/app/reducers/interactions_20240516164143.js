import { setAccount, setNetwork, setProvider } from "./provider";
import { setContract, setListNFT, setBuyNFT } from "./marketplaceStore";
import { setMintNft, setNContract, setNftBalance } from './nftStore'
import { ethers } from "ethers";
import config from '../abis/config.json';
import MARKETPLACE_ABI from '../abis/MARKETPLACE_ABI.json';
import NFT_ABI from '../abis/NFT_ABI.json';



export const loadProvider = async (dispatch) => {
    try{
    const provider = new ethers.BrowserProvider(window.ethereum)
    dispatch(setProvider(provider))

    return provider;
    } catch(err) {
        window.alert('provider unable to be located')
    }}

export const loadAccount = async (dispatch) => {
//connecting to meta mask with a try and catch to catch an error if metamask if not installed
if(typeof window.ethereum !== 'undefined') {
    try{
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        dispatch(setAccount(account));

        return account;
    } catch(err) {
        window.alert('Metamask unable to be located. Please install metamask and try again.')
    }
}

}

export const loadNetwork = async (dispatch, provider) => {
    const chainId = (await provider.getNetwork()).chainId.toString()
    dispatch(setNetwork(chainId))

    return chainId
}

// load marketplace contract
export const loadMarketplace = async (provider, chainId, dispatch) => {
    const marketplace = new ethers.Contract(config[chainId].marketplace.address, MARKETPLACE_ABI, provider)

    dispatch(setContract(marketplace))

    return marketplace
}
//export const load
// load marketplace contract
export const loadNft = async (provider, chainId, dispatch) => {
    const nft = new ethers.Contract(config[chainId].nft.address, NFT_ABI, provider)

    dispatch(setNContract(nft))

    return nft
}
export const loadMintNft = async ( provider, nft, chainId, mintAmount, dispatch ) => {
    // getting signer
    const signer = await provider.getSigner()
    nft = await loadNft(provider, chainId, dispatch)
    //retrieve the cost of the nft collection
    const cost = await nft.cost()
    mintAmount = 1;

    // Mint NFT (have to pass the cost variable through a value)
    let transaction = await nft.connect(signer).mint(mintAmount, { value: cost })
    let result = await transaction.wait()

    dispatch(setMintNft(result))
}
export const loadNftBalance = async (nft, provider, chainId, account, dispatch) => {
    // load nft
    nft = await loadNft(provider, chainId, dispatch)
    //load account
    account = await loadAccount(dispatch)

    const nftBalance = (await nft.balanceOf(account)).toString();

    dispatch(setNftBalance(nftBalance))
}
// listnft Loader
export const loadListNft = async (nft, marketplace, provider, chainId, dispatch) => {
    // get signer
    const signer = await provider.getSigner()
    // load nft
    nft = await loadNft(provider, chainId, dispatch)
    // declare nft address
    const nftAddress = await nft.getAddress()
    // declare tokenId?


    // load marketplace
    marketplace = await loadMarketplace(provider, chainId, dispatch)
    // declare marketplace address
    const marketplaceAddress = await marketplace.getAddress()
    //approve signer to allow transfer to marketplace address
    const approveNft = await nft.connect(signer).approve(marketplaceAddress, tokenId)
    // marketplace list nft
    const listNFT = await marketplace.connect(signer).listNFT(nftAddress, )
    const listedNft = 1
    dispatch(setListNFT(listedNft))
}



// buyNFT loader