/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConnectV2Oasis,
  ConnectV2OasisInterface,
} from "../ConnectV2Oasis";

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
  "0x60c060405260086080819052674f617369732d763160c01b60a09081526200002b916000919062000040565b503480156200003957600080fd5b50620000ec565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000785760008555620000c3565b82601f106200009357805160ff1916838001178555620000c3565b82800160010185558215620000c3579182015b82811115620000c3578251825591602001919060010190620000a6565b50620000d1929150620000d5565b5090565b5b80821115620000d15760008155600101620000d6565b61126180620000fc6000396000f3fe6080604052600436106100345760003560e01c806306fdde031461003957806345c9acfe146100c3578063848d8f28146101e9575b600080fd5b34801561004557600080fd5b5061004e610231565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610088578181015183820152602001610070565b50505050905090810190601f1680156100b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61010b600480360360c08110156100d957600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a001356102bf565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561014c578181015183820152602001610134565b50505050905090810190601f1680156101795780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156101ac578181015183820152602001610194565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b61010b600480360360c08110156101ff57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a0013561083c565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156102b75780601f1061028c576101008083540402835291602001916102b7565b820191906000526020600020905b81548152906001019060200180831161029a57829003601f168201915b505050505081565b60608060006102ce8588610cd7565b90506000806102dd8b8b610d73565b9150915060001983141561038b576001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1461038657604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561035557600080fd5b505afa158015610369573d6000803e3d6000fd5b505050506040513d602081101561037f57600080fd5b5051610388565b475b92505b6000610404836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156103c957600080fd5b505afa1580156103dd573d6000803e3d6000fd5b505050506040513d60208110156103f357600080fd5b50516103ff8b87610e01565b610e36565b60408051630374fc6f60e01b81526001600160a01b03858116600483015286166024820152905191925073794e6e91555438afc3ccf1c5076a74f42133d08d91630374fc6f91604480820192602092909190829003018186803b15801561046a57600080fd5b505afa15801561047e573d6000803e3d6000fd5b505050506040513d602081101561049457600080fd5b50516104d2576040805162461bcd60e51b8152602060048201526008602482015267373796b7b33332b960c11b604482015290519081900360640190fd5b8373794e6e91555438afc3ccf1c5076a74f42133d08d6001600160a01b031663511fa487846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561053457600080fd5b505afa158015610548573d6000803e3d6000fd5b505050506040513d602081101561055e57600080fd5b505111156105ab576040805162461bcd60e51b81526020600482015260156024820152741b195cdccb5d1a185b8b5b5a5b8b5c185e4b585b5d605a1b604482015290519081900360640190fd5b60408051630a2513a960e11b81526001600160a01b0385811660048301528416602482015260448101869052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d9163144a275291606480820192602092909190829003018186803b15801561061857600080fd5b505afa15801561062c573d6000803e3d6000fd5b505050506040513d602081101561064257600080fd5b505190508082111561068f576040805162461bcd60e51b8152602060048201526011602482015270546f6f206d75636820736c69707061676560781b604482015290519081900360640190fd5b6001600160a01b03831673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2146106ba818588610e47565b6106d98473794e6e91555438afc3ccf1c5076a74f42133d08d88610ea7565b60408051630310da7b60e11b81526001600160a01b038681166004830152602482018990528716604482015260648101859052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d91630621b4f69160848082019260209290919082900301818787803b15801561074e57600080fd5b505af1158015610762573d6000803e3d6000fd5b505050506040513d602081101561077857600080fd5b50516001600160a01b03871673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc214925090506107a9828783610fee565b6107b38a82611062565b6040518060600160405280603881526020016111d36038913998508e8e82898e8e60405160200180876001600160a01b03168152602001866001600160a01b031681526020018581526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052975050505050505050965096945050505050565b606080600061084b8588610cd7565b905060008061085a8b8b610d73565b91509150600061089c826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156103c957600080fd5b60408051630374fc6f60e01b81526001600160a01b03858116600483015286166024820152905191925073794e6e91555438afc3ccf1c5076a74f42133d08d91630374fc6f91604480820192602092909190829003018186803b15801561090257600080fd5b505afa158015610916573d6000803e3d6000fd5b505050506040513d602081101561092c57600080fd5b505161096a576040805162461bcd60e51b8152602060048201526008602482015267373796b7b33332b960c11b604482015290519081900360640190fd5b8073794e6e91555438afc3ccf1c5076a74f42133d08d6001600160a01b031663511fa487846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156109cc57600080fd5b505afa1580156109e0573d6000803e3d6000fd5b505050506040513d60208110156109f657600080fd5b50511115610a43576040805162461bcd60e51b81526020600482015260156024820152741b195cdccb5d1a185b8b5b5a5b8b5c185e4b585b5d605a1b604482015290519081900360640190fd5b604080516001623809a360e21b031981526001600160a01b0384811660048301528516602482015260448101869052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d9163ff1fd97491606480820192602092909190829003018186803b158015610ab357600080fd5b505afa158015610ac7573d6000803e3d6000fd5b505050506040513d6020811015610add57600080fd5b5051905080821015610b2a576040805162461bcd60e51b8152602060048201526011602482015270546f6f206d75636820736c69707061676560781b604482015290519081900360640190fd5b6001600160a01b03831673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc214610b55818584610e47565b610b748473794e6e91555438afc3ccf1c5076a74f42133d08d84610ea7565b60408051638185402b60e01b81526001600160a01b038781166004830152602482018990528616604482015260648101859052905160009173794e6e91555438afc3ccf1c5076a74f42133d08d91638185402b9160848082019260209290919082900301818787803b158015610be957600080fd5b505af1158015610bfd573d6000803e3d6000fd5b505050506040513d6020811015610c1357600080fd5b50516001600160a01b03871673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc21492509050610c44828789610fee565b610c4e8a82611062565b60405180606001604052806037815260200161119c6037913998508e8e88838e8e60405160200180876001600160a01b03168152602001866001600160a01b031681526020018581526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052975050505050505050965096945050505050565b60008215610d6a57738a5419cfc711b2343c17a6abf4b2bafabb06957f6001600160a01b031663a9c70eaa846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610d3957600080fd5b505af1158015610d4d573d6000803e3d6000fd5b505050506040513d6020811015610d6357600080fd5b5051610d6c565b815b9392505050565b6000806001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610da05783610db6565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b91506001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610de25782610df8565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b90509250929050565b6000670de0b6b3a7640000610e27610e1985856110df565b6706f05b59d3b20000611141565b81610e2e57fe5b049392505050565b600082601203600a0a8281610e2e57fe5b8215610ea257816001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e8857600080fd5b505af1158015610e9c573d6000803e3d6000fd5b50505050505b505050565b826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610efe57600080fd5b505af1925050508015610f0f575060015b610ea2576040805163095ea7b360e01b81526001600160a01b03848116600483015260006024830181905292519086169263095ea7b3926044808201939182900301818387803b158015610f6257600080fd5b505af1158015610f76573d6000803e3d6000fd5b50505050826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610fd157600080fd5b505af1158015610fe5573d6000803e3d6000fd5b50505050610ea2565b8215610ea257610fff828383610ea7565b816001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561104557600080fd5b505af1158015611059573d6000803e3d6000fd5b50505050505050565b81156110db5760408051631878f25160e21b815260048101849052602481018390529051738a5419cfc711b2343c17a6abf4b2bafabb06957f916361e3c94491604480830192600092919082900301818387803b1580156110c257600080fd5b505af11580156110d6573d6000803e3d6000fd5b505050505b5050565b6000826110ee5750600061113b565b828202828482816110fb57fe5b04146111385760405162461bcd60e51b815260040180806020018281038252602181526020018061120b6021913960400191505060405180910390fd5b90505b92915050565b600082820183811015611138576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fdfe4c6f6742757928616464726573732c616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e74323536294c6f6753656c6c28616464726573732c616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e7432353629536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212209b5be3d1b4aacd789458bb048faf6449c4f371fec1c6d5ebe71a6a43b4e03dd964736f6c63430007060033";

type ConnectV2OasisConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2OasisConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2Oasis__factory extends ContractFactory {
  constructor(...args: ConnectV2OasisConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2Oasis> {
    return super.deploy(overrides || {}) as Promise<ConnectV2Oasis>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2Oasis {
    return super.attach(address) as ConnectV2Oasis;
  }
  connect(signer: Signer): ConnectV2Oasis__factory {
    return super.connect(signer) as ConnectV2Oasis__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2OasisInterface {
    return new utils.Interface(_abi) as ConnectV2OasisInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2Oasis {
    return new Contract(address, _abi, signerOrProvider) as ConnectV2Oasis;
  }
}
