import { ethers } from "ethers";

const contractAddress = "0x8A51038F194CbDdbe1732C1D56bD456e9C5ca75E"; 

const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "int256",
        "name": "newNumber",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newText",
        "type": "string"
      }
    ],
    "name": "ValuesUpdated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getValues",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "_number",
        "type": "int256"
      },
      {
        "internalType": "string",
        "name": "_text",
        "type": "string"
      }
    ],
    "name": "setValues",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const getContract = async () => {
  if (!window.ethereum) throw new Error("No crypto wallet found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};
