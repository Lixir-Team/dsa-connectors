/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OasisResolver, OasisResolverInterface } from "../OasisResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sellToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellAmt",
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
    name: "LogBuy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sellToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyAmt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellAmt",
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
    name: "LogSell",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "sellAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "buyAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unitAmt",
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
    name: "buy",
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
        internalType: "address",
        name: "buyAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "sellAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sellAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unitAmt",
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
    name: "sell",
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
  "0x608060405234801561001057600080fd5b5061113e806100206000396000f3fe6080604052600436106100295760003560e01c806345c9acfe1461002e578063848d8f2814610154575b600080fd5b610076600480360360c081101561004457600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a0013561019c565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156100b757818101518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156101175781810151838201526020016100ff565b50505050905090810190601f1680156101445780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610076600480360360c081101561016a57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a00135610719565b60608060006101ab8588610bb4565b90506000806101ba8b8b610c50565b91509150600019831415610268576001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461026357604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561023257600080fd5b505afa158015610246573d6000803e3d6000fd5b505050506040513d602081101561025c57600080fd5b5051610265565b475b92505b60006102e1836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a657600080fd5b505afa1580156102ba573d6000803e3d6000fd5b505050506040513d60208110156102d057600080fd5b50516102dc8b87610cde565b610d13565b60408051630374fc6f60e01b81526001600160a01b03858116600483015286166024820152905191925073794e6e91555438afc3ccf1c5076a74f42133d08d91630374fc6f91604480820192602092909190829003018186803b15801561034757600080fd5b505afa15801561035b573d6000803e3d6000fd5b505050506040513d602081101561037157600080fd5b50516103af576040805162461bcd60e51b8152602060048201526008602482015267373796b7b33332b960c11b604482015290519081900360640190fd5b8373794e6e91555438afc3ccf1c5076a74f42133d08d6001600160a01b031663511fa487846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561041157600080fd5b505afa158015610425573d6000803e3d6000fd5b505050506040513d602081101561043b57600080fd5b50511115610488576040805162461bcd60e51b81526020600482015260156024820152741b195cdccb5d1a185b8b5b5a5b8b5c185e4b585b5d605a1b604482015290519081900360640190fd5b60408051630a2513a960e11b81526001600160a01b0385811660048301528416602482015260448101869052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d9163144a275291606480820192602092909190829003018186803b1580156104f557600080fd5b505afa158015610509573d6000803e3d6000fd5b505050506040513d602081101561051f57600080fd5b505190508082111561056c576040805162461bcd60e51b8152602060048201526011602482015270546f6f206d75636820736c69707061676560781b604482015290519081900360640190fd5b6001600160a01b03831673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc214610597818588610d24565b6105b68473794e6e91555438afc3ccf1c5076a74f42133d08d88610d84565b60408051630310da7b60e11b81526001600160a01b038681166004830152602482018990528716604482015260648101859052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d91630621b4f69160848082019260209290919082900301818787803b15801561062b57600080fd5b505af115801561063f573d6000803e3d6000fd5b505050506040513d602081101561065557600080fd5b50516001600160a01b03871673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc21492509050610686828783610ecb565b6106908a82610f3f565b6040518060600160405280603881526020016110b06038913998508e8e82898e8e60405160200180876001600160a01b03168152602001866001600160a01b031681526020018581526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052975050505050505050965096945050505050565b60608060006107288588610bb4565b90506000806107378b8b610c50565b915091506000610779826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a657600080fd5b60408051630374fc6f60e01b81526001600160a01b03858116600483015286166024820152905191925073794e6e91555438afc3ccf1c5076a74f42133d08d91630374fc6f91604480820192602092909190829003018186803b1580156107df57600080fd5b505afa1580156107f3573d6000803e3d6000fd5b505050506040513d602081101561080957600080fd5b5051610847576040805162461bcd60e51b8152602060048201526008602482015267373796b7b33332b960c11b604482015290519081900360640190fd5b8073794e6e91555438afc3ccf1c5076a74f42133d08d6001600160a01b031663511fa487846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156108a957600080fd5b505afa1580156108bd573d6000803e3d6000fd5b505050506040513d60208110156108d357600080fd5b50511115610920576040805162461bcd60e51b81526020600482015260156024820152741b195cdccb5d1a185b8b5b5a5b8b5c185e4b585b5d605a1b604482015290519081900360640190fd5b604080516001623809a360e21b031981526001600160a01b0384811660048301528516602482015260448101869052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d9163ff1fd97491606480820192602092909190829003018186803b15801561099057600080fd5b505afa1580156109a4573d6000803e3d6000fd5b505050506040513d60208110156109ba57600080fd5b5051905080821015610a07576040805162461bcd60e51b8152602060048201526011602482015270546f6f206d75636820736c69707061676560781b604482015290519081900360640190fd5b6001600160a01b03831673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc214610a32818584610d24565b610a518473794e6e91555438afc3ccf1c5076a74f42133d08d84610d84565b60408051638185402b60e01b81526001600160a01b038781166004830152602482018990528616604482015260648101859052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d91638185402b9160848082019260209290919082900301818787803b158015610ac657600080fd5b505af1158015610ada573d6000803e3d6000fd5b505050506040513d6020811015610af057600080fd5b50516001600160a01b03871673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc21492509050610b21828789610ecb565b610b2b8a82610f3f565b6040518060600160405280603781526020016110796037913998508e8e88838e8e60405160200180876001600160a01b03168152602001866001600160a01b031681526020018581526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052975050505050505050965096945050505050565b60008215610c4757738a5419cfc711b2343c17a6abf4b2bafabb06957f6001600160a01b031663a9c70eaa846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610c1657600080fd5b505af1158015610c2a573d6000803e3d6000fd5b505050506040513d6020811015610c4057600080fd5b5051610c49565b815b9392505050565b6000806001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610c7d5783610c93565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b91506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610cbf5782610cd5565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b90509250929050565b6000670de0b6b3a7640000610d04610cf68585610fbc565b6706f05b59d3b2000061101e565b81610d0b57fe5b049392505050565b600082601203600a0a8281610d0b57fe5b8215610d7f57816001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610d6557600080fd5b505af1158015610d79573d6000803e3d6000fd5b50505050505b505050565b826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610ddb57600080fd5b505af1925050508015610dec575060015b610d7f576040805163095ea7b360e01b81526001600160a01b03848116600483015260006024830181905292519086169263095ea7b3926044808201939182900301818387803b158015610e3f57600080fd5b505af1158015610e53573d6000803e3d6000fd5b50505050826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610eae57600080fd5b505af1158015610ec2573d6000803e3d6000fd5b50505050610d7f565b8215610d7f57610edc828383610d84565b816001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610f2257600080fd5b505af1158015610f36573d6000803e3d6000fd5b50505050505050565b8115610fb85760408051631878f25160e21b815260048101849052602481018390529051738a5419cfc711b2343c17a6abf4b2bafabb06957f916361e3c94491604480830192600092919082900301818387803b158015610f9f57600080fd5b505af1158015610fb3573d6000803e3d6000fd5b505050505b5050565b600082610fcb57506000611018565b82820282848281610fd857fe5b04146110155760405162461bcd60e51b81526004018080602001828103825260218152602001806110e86021913960400191505060405180910390fd5b90505b92915050565b600082820183811015611015576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fdfe4c6f6742757928616464726573732c616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e74323536294c6f6753656c6c28616464726573732c616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e7432353629536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220a9272333965dd4e72e11e5f9ddc1f90378dc04914437502411638c48d84b7b8e64736f6c63430007060033";

type OasisResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OasisResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OasisResolver__factory extends ContractFactory {
  constructor(...args: OasisResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OasisResolver> {
    return super.deploy(overrides || {}) as Promise<OasisResolver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OasisResolver {
    return super.attach(address) as OasisResolver;
  }
  connect(signer: Signer): OasisResolver__factory {
    return super.connect(signer) as OasisResolver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OasisResolverInterface {
    return new utils.Interface(_abi) as OasisResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OasisResolver {
    return new Contract(address, _abi, signerOrProvider) as OasisResolver;
  }
}
