/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OasisHelpers, OasisHelpersInterface } from "../OasisHelpers";

const _abi = [
  {
    inputs: [],
    name: "connectorID",
    outputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50609f8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063eb15f78114602d575b600080fd5b60336050565b604051808381526020018281526020019250505060405180910390f35b6000806001600b8191508090508092508193505050909156fea2646970667358221220dbbdc55343680fc1589f389f5ec86394ce682233fc84af6014fa7a57f990ef0c64736f6c63430006050033";

type OasisHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OasisHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OasisHelpers__factory extends ContractFactory {
  constructor(...args: OasisHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OasisHelpers> {
    return super.deploy(overrides || {}) as Promise<OasisHelpers>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OasisHelpers {
    return super.attach(address) as OasisHelpers;
  }
  connect(signer: Signer): OasisHelpers__factory {
    return super.connect(signer) as OasisHelpers__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OasisHelpersInterface {
    return new utils.Interface(_abi) as OasisHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OasisHelpers {
    return new Contract(address, _abi, signerOrProvider) as OasisHelpers;
  }
}
