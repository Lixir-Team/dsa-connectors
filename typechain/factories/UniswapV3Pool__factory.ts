/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { UniswapV3Pool, UniswapV3PoolInterface } from "../UniswapV3Pool";

const _abi = [
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "slot0",
    outputs: [
      {
        components: [
          {
            internalType: "uint160",
            name: "sqrtPriceX96",
            type: "uint160",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "uint16",
            name: "observationIndex",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "observationCardinality",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "observationCardinalityNext",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "feeProtocol",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "unlocked",
            type: "bool",
          },
        ],
        internalType: "struct UniswapV3Pool.Slot0",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class UniswapV3Pool__factory {
  static readonly abi = _abi;
  static createInterface(): UniswapV3PoolInterface {
    return new utils.Interface(_abi) as UniswapV3PoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Pool {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Pool;
  }
}
