/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  PodTokenDropInterface,
  PodTokenDropInterfaceInterface,
} from "../PodTokenDropInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class PodTokenDropInterface__factory {
  static readonly abi = _abi;
  static createInterface(): PodTokenDropInterfaceInterface {
    return new utils.Interface(_abi) as PodTokenDropInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PodTokenDropInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PodTokenDropInterface;
  }
}
