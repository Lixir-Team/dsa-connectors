/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GebMapping, GebMappingInterface } from "../GebMapping";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "collateralJoinMapping",
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

export class GebMapping__factory {
  static readonly abi = _abi;
  static createInterface(): GebMappingInterface {
    return new utils.Interface(_abi) as GebMappingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GebMapping {
    return new Contract(address, _abi, signerOrProvider) as GebMapping;
  }
}
