/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MakerMCDAddresses,
  MakerMCDAddressesInterface,
} from "../MakerMCDAddresses";

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
  "0x6080604052348015600f57600080fd5b50609e8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063eb15f78114602d575b600080fd5b60336050565b604051808381526020018281526020019250505060405180910390f35b6000806002808191508090508092508193505050909156fea26469706673582212209d3ed2539fe23bdbb5669ace7328d2e79bc34579f26cceab1852eed42f19c35364736f6c63430006050033";

type MakerMCDAddressesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MakerMCDAddressesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MakerMCDAddresses__factory extends ContractFactory {
  constructor(...args: MakerMCDAddressesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MakerMCDAddresses> {
    return super.deploy(overrides || {}) as Promise<MakerMCDAddresses>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MakerMCDAddresses {
    return super.attach(address) as MakerMCDAddresses;
  }
  connect(signer: Signer): MakerMCDAddresses__factory {
    return super.connect(signer) as MakerMCDAddresses__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MakerMCDAddressesInterface {
    return new utils.Interface(_abi) as MakerMCDAddressesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MakerMCDAddresses {
    return new Contract(address, _abi, signerOrProvider) as MakerMCDAddresses;
  }
}
