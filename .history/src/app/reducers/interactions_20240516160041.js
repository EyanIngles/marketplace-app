import { setAccount, setNetwork, setProvider } from "./provider";
import { setContract } from "./marketplaceStore";
import { setMintNft, setNContract, setNftBalance } from './nftStore'
import { ethers, BrowserProvider } from "ethers";
import config from '../abis/config.json';
import MARKETPLACE_ABI from '../abis/MARKETPLACE_ABI.json';
import NFT_ABI from '../abis/NFT_ABI.json';
import { useState } from 'react'



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

    // Mint NFT
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