/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  AaveCoreInterface,
  AaveCoreInterfaceInterface,
} from "../AaveCoreInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
    ],
    name: "getReserveATokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class AaveCoreInterface__factory {
  static readonly abi = _abi;
  static createInterface(): AaveCoreInterfaceInterface {
    return new utils.Interface(_abi) as AaveCoreInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveCoreInterface {
    return new Contract(address, _abi, signerOrProvider) as AaveCoreInterface;
  }
}
