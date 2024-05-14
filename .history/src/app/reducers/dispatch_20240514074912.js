import { setAccount } from "./provider";
import { ethers } from "ethers";

export const loadAccount = async (dispatch) => {
//connecting to meta mask, but having issues with ethers.
  const accounts = new ethers.BrowserProvider(window.ethereum);
  const account = accounts[0];
  dispatch(setAccount(account));

  return account
}
