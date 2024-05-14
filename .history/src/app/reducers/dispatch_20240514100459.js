import { setAccount, setNetwork } from "./provider";
import { ethers } from "ethers";

export const loadAccount = async (dispatch) => {
//connecting to meta mask, but having issues with ethers.
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    dispatch(setAccount(account));

    return account;
}
export const loadNetwork = async (provider, dispatch) => {

    let chainId = (await provider.getNetwork).chainId.toString()
    dispatch(setNetwork(chainId))

    return chainId;
}