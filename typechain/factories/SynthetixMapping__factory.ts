/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SynthetixMapping,
  SynthetixMappingInterface,
} from "../SynthetixMapping";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "stakingMapping",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakingPool",
            type: "address",
          },
          {
            internalType: "address",
            name: "stakingToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "rewardToken",
            type: "address",
          },
        ],
        internalType: "struct SynthetixMapping.StakingData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class SynthetixMapping__factory {
  static readonly abi = _abi;
  static createInterface(): SynthetixMappingInterface {
    return new utils.Interface(_abi) as SynthetixMappingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SynthetixMapping {
    return new Contract(address, _abi, signerOrProvider) as SynthetixMapping;
  }
}
