/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DsrResolver, DsrResolverInterface } from "../DsrResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "vault",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
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
        indexed: false,
        internalType: "uint256",
        name: "tokenAmt",
        type: "uint256",
      },
    ],
    name: "LogWithdrawDai",
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
        internalType: "uint256",
        name: "vault",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "withdrawDai",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611492806100206000396000f3fe6080604052600436106100345760003560e01c8063441a3e701461003957806393a991af14610071578063eb15f7811461009f575b600080fd5b61006f6004803603604081101561004f57600080fd5b8101908080359060200190929190803590602001909291905050506100d1565b005b61009d6004803603602081101561008757600080fd5b8101908080359060200190929190505050610933565b005b3480156100ab57600080fd5b506100b46110bb565b604051808381526020018281526020019250505060405180910390f35b60006100db6110d3565b90506000806100ea83866110ef565b9150915060006100f8611215565b73ffffffffffffffffffffffffffffffffffffffff16634445d799846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561014857600080fd5b505afa15801561015c573d6000803e3d6000fd5b505050506040513d602081101561017257600080fd5b810190808051906020019092919050505090506000819050600086905060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561039a578673ffffffffffffffffffffffffffffffffffffffff166336569e776040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ff57600080fd5b505afa158015610213573d6000803e3d6000fd5b505050506040513d602081101561022957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16632424be5c87876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604080518083038186803b1580156102bd57600080fd5b505afa1580156102d1573d6000803e3d6000fd5b505050506040513d60408110156102e757600080fd5b81019080805190602001909291908051906020019092919050505050809150506103938373ffffffffffffffffffffffffffffffffffffffff1663b3bcfa826040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561035257600080fd5b505af1158015610366573d6000803e3d6000fd5b505050506040513d602081101561037c57600080fd5b810190808051906020019092919050505082611231565b9150610429565b6104268373ffffffffffffffffffffffffffffffffffffffff1663b3bcfa826040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156103e557600080fd5b505af11580156103f9573d6000803e3d6000fd5b505050506040513d602081101561040f57600080fd5b81019080805190602001909291905050508361124b565b90505b8673ffffffffffffffffffffffffffffffffffffffff166345e6bdcd8a61044f84611265565b60000360006040518463ffffffff1660e01b8152600401808481526020018381526020018281526020019350505050600060405180830381600087803b15801561049857600080fd5b505af11580156104ac573d6000803e3d6000fd5b505050508673ffffffffffffffffffffffffffffffffffffffff16639bb8f8388a30846040518463ffffffff1660e01b8152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561053f57600080fd5b505af1158015610553573d6000803e3d6000fd5b5050505060008373ffffffffffffffffffffffffffffffffffffffff16637bd2bea76040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156105a157600080fd5b505af11580156105b5573d6000803e3d6000fd5b505050506040513d60208110156105cb57600080fd5b810190808051906020019092919050505090506105e7816112e6565b156106fb578373ffffffffffffffffffffffffffffffffffffffff1663ef693bed30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561067357600080fd5b505af1158015610687573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d846040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b5050505061079b565b8373ffffffffffffffffffffffffffffffffffffffff1663ef693bed30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561078257600080fd5b505af1158015610796573d6000803e3d6000fd5b505050505b868a7f766a035c6306d5af4b44f9d10cfa85fb68e5dd6faba20ecb7367ba90f1524d36856040518082815260200191505060405180910390a3600060405180806114396024913960240190506040518091039020905060608b898660405160200180848152602001838152602001828152602001935050505060405160208183030381529060405290506000806108306110bb565b9150915061083c611333565b73ffffffffffffffffffffffffffffffffffffffff1663e14d4fb1838387876040518563ffffffff1660e01b81526004018085815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108bc5780820151818401526020810190506108a1565b50505050905090810190601f1680156108e95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561090b57600080fd5b505af115801561091f573d6000803e3d6000fd5b505050505050505050505050505050505050565b600061093d61134f565b9050600081905060008173ffffffffffffffffffffffffffffffffffffffff166336569e776040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561098e57600080fd5b505af11580156109a2573d6000803e3d6000fd5b505050506040513d60208110156109b857600080fd5b8101908080519060200190929190505050905060006109d561136b565b905060008173ffffffffffffffffffffffffffffffffffffffff16639f678cca6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610a2157600080fd5b505af1158015610a35573d6000803e3d6000fd5b505050506040513d6020811015610a4b57600080fd5b810190808051906020019092919050505090506000808790507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811415610b6c578373ffffffffffffffffffffffffffffffffffffffff16630bebac86306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b0957600080fd5b505afa158015610b1d573d6000803e3d6000fd5b505050506040513d6020811015610b3357600080fd5b810190808051906020019092919050505091506b033b2e3c9fd0803ce8000000610b5d8484611387565b81610b6457fe5b049050610b8e565b82610b83826b033b2e3c9fd0803ce8000000611387565b81610b8a57fe5b0491505b8373ffffffffffffffffffffffffffffffffffffffff16637f8661a1836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610be157600080fd5b505af1158015610bf5573d6000803e3d6000fd5b5050505060008573ffffffffffffffffffffffffffffffffffffffff16636c25b346306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610c7857600080fd5b505afa158015610c8c573d6000803e3d6000fd5b505050506040513d6020811015610ca257600080fd5b8101908080519060200190929190505050905060008673ffffffffffffffffffffffffffffffffffffffff16634538c4eb308b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610d6857600080fd5b505afa158015610d7c573d6000803e3d6000fd5b505050506040513d6020811015610d9257600080fd5b81019080805190602001909291905050501415610e41578573ffffffffffffffffffffffffffffffffffffffff1663a3b22fc4896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015610e2857600080fd5b505af1158015610e3c573d6000803e3d6000fd5b505050505b8673ffffffffffffffffffffffffffffffffffffffff1663ef693bed30610e74856b033b2e3c9fd0803ce8000000611387565b841015610e96576b033b2e3c9fd0803ce80000008481610e9057fe5b04610e98565b845b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015610f0157600080fd5b505af1158015610f15573d6000803e3d6000fd5b505050507f62b0a70c53b0ef7ee9d7280fa16a348b9491398f672f8da46aede91758c0eb3d826040518082815260200191505060405180910390a1600060405180807f4c6f6757697468647261774461692875696e7432353629000000000000000000815250601701905060405180910390209050606083604051602001808281526020019150506040516020818303038152906040529050600080610fb96110bb565b91509150610fc5611333565b73ffffffffffffffffffffffffffffffffffffffff1663e14d4fb1838387876040518563ffffffff1660e01b81526004018085815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561104557808201518184015260208101905061102a565b50505050905090810190601f1680156110725780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561109457600080fd5b505af11580156110a8573d6000803e3d6000fd5b5050505050505050505050505050505050565b60008060028081915080905080925081935050509091565b6000735ef30b9986345249bc32d8928b7ee64de9435e39905090565b6000808373ffffffffffffffffffffffffffffffffffffffff16632c2cb9fd846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561114357600080fd5b505afa158015611157573d6000803e3d6000fd5b505050506040513d602081101561116d57600080fd5b810190808051906020019092919050505091508373ffffffffffffffffffffffffffffffffffffffff16632726b073846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156111d157600080fd5b505afa1580156111e5573d6000803e3d6000fd5b505050506040513d60208110156111fb57600080fd5b810190808051906020019092919050505090509250929050565b600073e81f70cc7c0d46e12d70efc60607f16bbd617e88905090565b600082601203600a0a828161124257fe5b04905092915050565b600061125d8284601203600a0a611387565b905092915050565b600081905060008112156112e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f696e742d6f766572666c6f77000000000000000000000000000000000000000081525060200191505060405180910390fd5b919050565b60006112f061141c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461132957600061132c565b60015b9050919050565b6000732af7ea6cb911035f3eb1ed895cb6692c39ecba97905090565b6000739759a6ac90977b93b58547b4a71c78317f391a28905090565b600073197e90f9fad81970ba7976f33cbd77088e5d7cf7905090565b6000808214806113a457508282838502925082816113a157fe5b04145b611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f6d6174682d6e6f742d736166650000000000000000000000000000000000000081525060200191505060405180910390fd5b92915050565b600073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290509056fe4c6f6757697468647261772875696e743235362c627974657333322c75696e7432353629a2646970667358221220206d1c8e99a562e41cb7c4463c2efdecdca0e92ecb8b5906304c880e485b18d264736f6c63430006050033";

type DsrResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DsrResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DsrResolver__factory extends ContractFactory {
  constructor(...args: DsrResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DsrResolver> {
    return super.deploy(overrides || {}) as Promise<DsrResolver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DsrResolver {
    return super.attach(address) as DsrResolver;
  }
  connect(signer: Signer): DsrResolver__factory {
    return super.connect(signer) as DsrResolver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DsrResolverInterface {
    return new utils.Interface(_abi) as DsrResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DsrResolver {
    return new Contract(address, _abi, signerOrProvider) as DsrResolver;
  }
}
