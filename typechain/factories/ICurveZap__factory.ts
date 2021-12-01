/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurveZap, ICurveZapInterface } from "../ICurveZap";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
    ],
    name: "calc_withdraw_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICurveZap__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveZapInterface {
    return new utils.Interface(_abi) as ICurveZapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveZap {
    return new Contract(address, _abi, signerOrProvider) as ICurveZap;
  }
}
