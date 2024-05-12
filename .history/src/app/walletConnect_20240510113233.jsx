import { setAccount, setProvider, setNetwork } from './reducers/provider';
import { setContract, sharesLoaded,
    swapRequest, swapSuccess, swapFail,
    depositRequest, depositSuccess, depositFail,
    withdrawRequest, withdrawSuccess, withdrawFail,
    swapsLoaded} from './reducers/amm';
import { ethers } from 'ethers';
import MARKETPLACE_ABI from '../abis/MARKETPLACE_ABI.json'
import NFT_ABI from '../abis/NFT_ABI.json'
import config from '../config.json'



export const loadProvider = (dispatch) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    dispatch(setProvider(provider))
    return provider
}

export const loadNetwork = async (provider, dispatch) => {
    const { chainId } = await provider.getNetwork()
    dispatch(setNetwork(chainId))

    return chainId
}

export const loadAccount = async (dispatch) => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    dispatch(setAccount(account))

return account
}