import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xb3dCC017d4D511668fBD80550A678f1cE6Aca527';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
