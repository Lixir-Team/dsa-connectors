/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GebResolver, GebResolverInterface } from "../GebResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
    ],
    name: "LogClose",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getIdDeposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getIdBorrow",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setIdDeposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setIdBorrow",
        type: "uint256",
      },
    ],
    name: "LogDepositAndBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogExit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
    ],
    name: "LogOpen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogPayback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "LogTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "LogWithdrawLiquidated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
    ],
    name: "close",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getIdDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getIdBorrow",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setIdDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setIdBorrow",
        type: "uint256",
      },
    ],
    name: "depositAndBorrow",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "colType",
        type: "string",
      },
    ],
    name: "open",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "payback",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "safe",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "getId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "setId",
        type: "uint256",
      },
    ],
    name: "withdrawLiquidated",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class GebResolver__factory {
  static readonly abi = _abi;
  static createInterface(): GebResolverInterface {
    return new utils.Interface(_abi) as GebResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GebResolver {
    return new Contract(address, _abi, signerOrProvider) as GebResolver;
  }
}
