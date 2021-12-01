/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EventHelpers, EventHelpersInterface } from "../EventHelpers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
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
    name: "LogDepositLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
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
    name: "LogFlashBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
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
        name: "feeCollected",
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
    name: "LogFlashPayback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "origin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
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
        name: "originFeeAmt",
        type: "uint256",
      },
    ],
    name: "LogOriginFeeCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
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
    name: "LogWithdrawLiquidity",
    type: "event",
  },
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
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
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
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
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610822806100206000396000f3fe6080604052600436106100345760003560e01c80634532d77614610039578063ce88b4391461004e578063eb15f78114610061575b600080fd5b61004c610047366004610686565b61008d565b005b61004c61005c366004610686565b610223565b34801561006d57600080fd5b50610076610511565b60405161008492919061075f565b60405180910390f35b60006100998385610519565b90506100a36105b4565b6001600160a01b031663f3fef3a386836040518363ffffffff1660e01b81526004016100d0929190610717565b600060405180830381600087803b1580156100ea57600080fd5b505af11580156100fe573d6000803e3d6000fd5b5050505061010c82826105cc565b846001600160a01b03167f9ff4cb7f3b4986a113dbb55a03744331895ce0f50a84928bd60a323e213a82ab828585604051610149939291906107d6565b60405180910390a26040517f9ff4cb7f3b4986a113dbb55a03744331895ce0f50a84928bd60a323e213a82ab9060009061018d908890859088908890602001610730565b60405160208183030381529060405290506000806101a9610511565b915091506101b561063e565b6001600160a01b031663e14d4fb1838387876040518563ffffffff1660e01b81526004016101e6949392919061076d565b600060405180830381600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b50505050505050505050505050565b600061022f8385610519565b9050600061023b610656565b6001600160a01b0316866001600160a01b0316141561026f5760001982146102635781610265565b475b9150819050610387565b85600019831461027f57826102fb565b6040516370a0823160e01b81526001600160a01b038216906370a08231906102ab903090600401610703565b60206040518083038186803b1580156102c357600080fd5b505afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb91906106eb565b9250806001600160a01b031663095ea7b36103146105b4565b856040518363ffffffff1660e01b8152600401610332929190610717565b602060405180830381600087803b15801561034c57600080fd5b505af1158015610360573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038491906106cb565b50505b61038f6105b4565b6001600160a01b03166347e7ef248288856040518463ffffffff1660e01b81526004016103bd929190610717565b6000604051808303818588803b1580156103d657600080fd5b505af11580156103ea573d6000803e3d6000fd5b50505050506103f983836105cc565b856001600160a01b03167f14f2c3630383ff6f8febe0920fe216fdd5215bad47bc4330529f4dec17994603838686604051610436939291906107d6565b60405180910390a26040517f14f2c3630383ff6f8febe0920fe216fdd5215bad47bc4330529f4dec179946039060009061047a908990869089908990602001610730565b6040516020818303038152906040529050600080610496610511565b915091506104a261063e565b6001600160a01b031663e14d4fb1838387876040518563ffffffff1660e01b81526004016104d3949392919061076d565b600060405180830381600087803b1580156104ed57600080fd5b505af1158015610501573d6000803e3d6000fd5b5050505050505050505050505050565b600190602190565b600082156105ab5761052961066e565b6001600160a01b031663a9c70eaa846040518263ffffffff1660e01b81526004016105549190610756565b602060405180830381600087803b15801561056e57600080fd5b505af1158015610582573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a691906106eb565b6105ad565b815b9392505050565b7306cb7c24990cbe6b9f99982f975f9147c000fec690565b811561063a576105da61066e565b6001600160a01b03166361e3c94483836040518363ffffffff1660e01b815260040161060792919061075f565b600060405180830381600087803b15801561062157600080fd5b505af1158015610635573d6000803e3d6000fd5b505050505b5050565b732af7ea6cb911035f3eb1ed895cb6692c39ecba9790565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b738a5419cfc711b2343c17a6abf4b2bafabb06957f90565b6000806000806080858703121561069b578384fd5b84356001600160a01b03811681146106b1578485fd5b966020860135965060408601359560600135945092505050565b6000602082840312156106dc578081fd5b815180151581146105ad578182fd5b6000602082840312156106fc578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0394909416845260208401929092526040830152606082015260800190565b90815260200190565b918252602082015260400190565b600085825260208581840152846040840152608060608401528351806080850152825b818110156107ac5785810183015185820160a001528201610790565b818111156107bd578360a083870101525b50601f01601f19169290920160a0019695505050505050565b928352602083019190915260408201526060019056fea26469706673582212207afae087ac7aa80d9bc9219d0610038e7e9ada49899dcd2b8dc821b46aec114564736f6c63430007060033";

type EventHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EventHelpers__factory extends ContractFactory {
  constructor(...args: EventHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EventHelpers> {
    return super.deploy(overrides || {}) as Promise<EventHelpers>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EventHelpers {
    return super.attach(address) as EventHelpers;
  }
  connect(signer: Signer): EventHelpers__factory {
    return super.connect(signer) as EventHelpers__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventHelpersInterface {
    return new utils.Interface(_abi) as EventHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventHelpers {
    return new Contract(address, _abi, signerOrProvider) as EventHelpers;
  }
}
