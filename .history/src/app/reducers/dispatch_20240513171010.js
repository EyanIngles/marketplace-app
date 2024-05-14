import { setAccount } from "./provider";
import { ethers } from "ethers";
import React from 'react'

export const loadAccount = async (dispatch) => {
//connecting to meta mask, but having issues with ethers.
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  dispatch(setAccount(account));

  return account
}
