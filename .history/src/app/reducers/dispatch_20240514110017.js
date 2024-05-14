import { setAccount, setNetwork, setProvider } from "./provider";
import { ethers } from "ethers";
import { config } from 'src/config.json';


export const loadProvider = async (dispatch) => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    dispatch(setProvider(provider))

    return provider;
}

export const loadAccount = async (dispatch) => {
//connecting to meta mask, but having issues with ethers.
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    dispatch(setAccount(account));

    return account;
}

export const loadNetwork = async (dispatch, provider) => {
    const chainId = (await provider.getNetwork()).chainId.toString()
    dispatch(setNetwork(chainId))

    return chainId
}

// load marketplace contract
export const loadMarketplace = async (dispatch) => {
    const marketplace = await ethers.Contract()
}