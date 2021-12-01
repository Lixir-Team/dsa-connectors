/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConnectV2InstadappGovernanceBravo,
  ConnectV2InstadappGovernanceBravoInterface,
} from "../ConnectV2InstadappGovernanceBravo";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "LogDelegate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "support",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "LogVoteCast",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "support",
        type: "uint256",
      },
    ],
    name: "voteCast",
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
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "support",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "voteCastWithReason",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506106cf806100206000396000f3fe60806040526004361061003f5760003560e01c806306fdde031461004457806320d314991461006f5780635c19a95c146100905780638bfc83a8146100a3575b600080fd5b34801561005057600080fd5b506100596100b6565b604051610066919061054f565b60405180910390f35b61008261007d36600461044b565b6100ef565b604051610066929190610562565b61008261009e3660046103eb565b6101af565b6100826100b136600461042a565b610335565b6040518060400160405280601d81526020017f496e737461646170702d676f7665726e616e63652d627261766f2d763100000081525081565b604051637b3c71d360e01b81526060908190730204cd037b2ec03605cfdfe482d8e257c765fa1b90637b3c71d39061013190899089908990899060040161061b565b600060405180830381600087803b15801561014b57600080fd5b505af115801561015f573d6000803e3d6000fd5b505050506040518060600160405280602381526020016106776023913991508585858560405160200161019594939291906105d4565b604051602081830303815290604052905094509492505050565b604051632c3e6f0f60e11b815260609081906001600160a01b03841690736f40d4a6237c257fff2db00fa0510deeecd303eb9063587cde1e906101f690309060040161053b565b60206040518083038186803b15801561020e57600080fd5b505afa158015610222573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610246919061040e565b6001600160a01b031614156102765760405162461bcd60e51b815260040161026d90610590565b60405180910390fd5b6040516317066a5760e21b8152736f40d4a6237c257fff2db00fa0510deeecd303eb90635c19a95c906102ad90869060040161053b565b600060405180830381600087803b1580156102c757600080fd5b505af11580156102db573d6000803e3d6000fd5b50505050604051806040016040528060148152602001734c6f6744656c656761746528616464726573732960601b81525091508260405160200161031f919061053b565b6040516020818303038152906040529050915091565b604051637b3c71d360e01b81526060908190730204cd037b2ec03605cfdfe482d8e257c765fa1b90637b3c71d390610373908790879060040161063e565b600060405180830381600087803b15801561038d57600080fd5b505af11580156103a1573d6000803e3d6000fd5b5050505060405180606001604052806023815260200161067760239139915083836040516020016103d39291906105fe565b60405160208183030381529060405290509250929050565b6000602082840312156103fc578081fd5b81356104078161065e565b9392505050565b60006020828403121561041f578081fd5b81516104078161065e565b6000806040838503121561043c578081fd5b50508035926020909101359150565b60008060008060608587031215610460578182fd5b8435935060208501359250604085013567ffffffffffffffff80821115610485578384fd5b818701915087601f830112610498578384fd5b8135818111156104a6578485fd5b8860208285010111156104b7578485fd5b95989497505060200194505050565b60008151808452815b818110156104eb576020818501810151868301820152016104cf565b818111156104fc5782602083870101525b50601f01601f19169290920160200192915050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6001600160a01b0391909116815260200190565b60006020825261040760208301846104c6565b60006040825261057560408301856104c6565b828103602084015261058781856104c6565b95945050505050565b60208082526024908201527f416c72656164792064656c65676174656420746f2073616d652064656c6567616040820152633a32b29760e11b606082015260800190565b6000858252846020830152606060408301526105f4606083018486610511565b9695505050505050565b918252602082015260606040820181905260009082015260800190565b600085825260ff85166020830152606060408301526105f4606083018486610511565b91825260ff16602082015260606040820181905260009082015260800190565b6001600160a01b038116811461067357600080fd5b5056fe4c6f67566f7465436173742875696e743235362c75696e743235362c737472696e6729a26469706673582212208df05f3c93a20074975af2f2a405b093bb541edb3d2b0a8c0961f2f40fe4738264736f6c63430007060033";

type ConnectV2InstadappGovernanceBravoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2InstadappGovernanceBravoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2InstadappGovernanceBravo__factory extends ContractFactory {
  constructor(...args: ConnectV2InstadappGovernanceBravoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2InstadappGovernanceBravo> {
    return super.deploy(
      overrides || {}
    ) as Promise<ConnectV2InstadappGovernanceBravo>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2InstadappGovernanceBravo {
    return super.attach(address) as ConnectV2InstadappGovernanceBravo;
  }
  connect(signer: Signer): ConnectV2InstadappGovernanceBravo__factory {
    return super.connect(signer) as ConnectV2InstadappGovernanceBravo__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2InstadappGovernanceBravoInterface {
    return new utils.Interface(
      _abi
    ) as ConnectV2InstadappGovernanceBravoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2InstadappGovernanceBravo {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConnectV2InstadappGovernanceBravo;
  }
}
