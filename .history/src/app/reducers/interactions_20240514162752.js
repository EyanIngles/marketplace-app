import { setAccount, setNetwork, setProvider } from "./provider";
import { setContract } from "./marketplaceStore";
import { setNContract } from './nftStore'
import { ethers, BrowserProvider } from "ethers";
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
        const provider = new ethers.BrowserProvider(window.ethereum);
        // It will prompt user for account connections if it isnt connected
        const signer = await provider.getSigner();
        console.log("Account:", await signer.getAddress());
        //const account = accounts[0];
        //dispatch(setAccount(account));

        return account;
    } catch(err) {
        window.alert('err.message, metamask unable to be located. Please install metamask and try again.')
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
// load marketplace contract
export const loadNft = async (provider, chainId, dispatch) => {
    const nft = new ethers.Contract(config[chainId].nft.address, NFT_ABI, provider)

    dispatch(setNContract(nft))

    return nft
}
export const mintNft = async (dispatch, provider, nft, chainId) => {
// Mint NFT
// getting signer
const signer = await provider.getSigner()
nft = await loadNft(provider, chainId, dispatch)

}