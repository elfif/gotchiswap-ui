import React from 'react';
import { useState, useEffect } from "react";

import { ethers } from 'ethers';

import contract from '../artifacts/contracts/Escrow.sol/Escrow.json';
const contractAddress = "0xBef4c6C2c5Fed6B1d19c1508f955Cb39E2383C4f";
const contractAbi = contract.abi;

const Sell = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  //const [approval, setApproval] = useState(false);

  const checkWalletIsConnected = async () => {

    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const addSaleHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        const priceInWei = ethers.utils.parseEther(price);

        console.log("Creating sale");
        let txn = await contract.sellGotchi(
          id,
          priceInWei,
          currentAccount
        );


        console.log("Mining... please wait");
        await txn.wait();

        console.log(
          `Mined, see transaction: https://kovan.etherscan.io/tx/${txn.hash}`
        );

      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    checkWalletIsConnected();
    document.title = 'Gotchiswap: Create Sale';
  });

  return (
    <div className='main-app'>
      <h2>Create Sale</h2>
      <form>
        <label>Gotchi Id:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </form>
      <button onClick={addSaleHandler} className='cta-button sell-button'>
        New Sale
      </button>
    </div>
  );
};

export default Sell;