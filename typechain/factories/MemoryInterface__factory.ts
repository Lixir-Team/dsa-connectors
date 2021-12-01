/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  MemoryInterface,
  MemoryInterfaceInterface,
} from "../MemoryInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getUint",
    outputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "setUint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class MemoryInterface__factory {
  static readonly abi = _abi;
  static createInterface(): MemoryInterfaceInterface {
    return new utils.Interface(_abi) as MemoryInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MemoryInterface {
    return new Contract(address, _abi, signerOrProvider) as MemoryInterface;
  }
}
