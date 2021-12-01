/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConnectAuth, ConnectAuthInterface } from "../ConnectAuth";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_authority",
        type: "address",
      },
    ],
    name: "LogAddAuth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_authority",
        type: "address",
      },
    ],
    name: "LogRemoveAuth",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "payable",
    type: "function",
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
        name: "authority",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b5c806100206000396000f3fe60806040526004361061003f5760003560e01c806306fdde03146100445780630a3b0a4f1461006f57806329092d0e1461008b578063eb15f781146100a7575b600080fd5b34801561005057600080fd5b506100596100d3565b6040516100669190610906565b60405180910390f35b610089600480360381019061008491906106a0565b61010c565b005b6100a560048036038101906100a091906106a0565b61029d565b005b3480156100b357600080fd5b506100bc610478565b6040516100ca929190610948565b60405180910390f35b6040518060400160405280600781526020017f417574682d76310000000000000000000000000000000000000000000000000081525081565b3073ffffffffffffffffffffffffffffffffffffffff16635bfa1b68826040518263ffffffff1660e01b815260040161014591906108c2565b600060405180830381600087803b15801561015f57600080fd5b505af1158015610173573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f0a0883e359d023e38c8befc2b894f838c1942537ae51cba71e2bc651af2b3a5d60405160405180910390a360006040516101df90610898565b60405180910390209050606033836040516020016101fe9291906108dd565b604051602081830303815290604052905060008061021a610478565b91509150610226610491565b73ffffffffffffffffffffffffffffffffffffffff1663e14d4fb1838387876040518563ffffffff1660e01b81526004016102649493929190610971565b600060405180830381600087803b15801561027e57600080fd5b505af1158015610292573d6000803e3d6000fd5b505050505050505050565b60016102a76104ad565b116102e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102de90610928565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff1663e6c09edf826040518263ffffffff1660e01b815260040161032091906108c2565b600060405180830381600087803b15801561033a57600080fd5b505af115801561034e573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f7289d07acd866f85ba9176bdbac8304ca6072c00bde3d94c43afd8fbc8114db860405160405180910390a360006040516103ba906108ad565b60405180910390209050606033836040516020016103d99291906108dd565b60405160208183030381529060405290506000806103f5610478565b91509150610401610491565b73ffffffffffffffffffffffffffffffffffffffff1663e14d4fb1838387876040518563ffffffff1660e01b815260040161043f9493929190610971565b600060405180830381600087803b15801561045957600080fd5b505af115801561046d573d6000803e3d6000fd5b505050505050505050565b6000806001602581915080905080925081935050509091565b6000732af7ea6cb911035f3eb1ed895cb6692c39ecba97905090565b6000806104b86105e5565b905060008173ffffffffffffffffffffffffffffffffffffffff16636cfaf5e9306040518263ffffffff1660e01b81526004016104f591906108c2565b60206040518083038186803b15801561050d57600080fd5b505afa158015610521573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054591906106f2565b90508173ffffffffffffffffffffffffffffffffffffffff16638028a9fd826040518263ffffffff1660e01b815260040161058091906109bd565b60606040518083038186803b15801561059857600080fd5b505afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d091906106c9565b6040015167ffffffffffffffff169250505090565b6000734c8a1beb8a87765788946d6b19c6c6355194abeb905090565b60008135905061061081610af8565b92915050565b60008151905061062581610af8565b92915050565b60006060828403121561063d57600080fd5b61064760606109d8565b9050600061065784828501610616565b600083015250602061066b84828501610616565b602083015250604061067f8482850161068b565b60408301525092915050565b60008151905061069a81610b0f565b92915050565b6000602082840312156106b257600080fd5b60006106c084828501610601565b91505092915050565b6000606082840312156106db57600080fd5b60006106e98482850161062b565b91505092915050565b60006020828403121561070457600080fd5b60006107128482850161068b565b91505092915050565b61072481610a5a565b82525050565b61073381610a48565b82525050565b61074281610a6c565b82525050565b600061075382610a05565b61075d8185610a1b565b935061076d818560208601610ab4565b61077681610ae7565b840191505092915050565b600061078c82610a10565b6107968185610a2c565b93506107a6818560208601610ab4565b6107af81610ae7565b840191505092915050565b60006107c7601b83610a3d565b91507f4c6f674164644175746828616464726573732c616464726573732900000000006000830152601b82019050919050565b6000610807601883610a2c565b91507f52656d6f76696e672d616c6c2d617574686f72697469657300000000000000006000830152602082019050919050565b6000610847601e83610a3d565b91507f4c6f6752656d6f76654175746828616464726573732c616464726573732900006000830152601e82019050919050565b61088381610a96565b82525050565b61089281610aa0565b82525050565b60006108a3826107ba565b9150819050919050565b60006108b88261083a565b9150819050919050565b60006020820190506108d7600083018461072a565b92915050565b60006040820190506108f2600083018561071b565b6108ff602083018461072a565b9392505050565b600060208201905081810360008301526109208184610781565b905092915050565b60006020820190508181036000830152610941816107fa565b9050919050565b600060408201905061095d600083018561087a565b61096a602083018461087a565b9392505050565b6000608082019050610986600083018761087a565b610993602083018661087a565b6109a06040830185610739565b81810360608301526109b28184610748565b905095945050505050565b60006020820190506109d26000830184610889565b92915050565b6000604051905081810181811067ffffffffffffffff821117156109fb57600080fd5b8060405250919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610a5382610a76565b9050919050565b6000610a6582610a76565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60005b83811015610ad2578082015181840152602081019050610ab7565b83811115610ae1576000848401525b50505050565b6000601f19601f8301169050919050565b610b0181610a48565b8114610b0c57600080fd5b50565b610b1881610aa0565b8114610b2357600080fd5b5056fea26469706673582212205202803556c48e97e15dfb648e671437cc635ea561f5896661421b67fc59719e64736f6c63430006050033";

type ConnectAuthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectAuthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectAuth__factory extends ContractFactory {
  constructor(...args: ConnectAuthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectAuth> {
    return super.deploy(overrides || {}) as Promise<ConnectAuth>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectAuth {
    return super.attach(address) as ConnectAuth;
  }
  connect(signer: Signer): ConnectAuth__factory {
    return super.connect(signer) as ConnectAuth__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectAuthInterface {
    return new utils.Interface(_abi) as ConnectAuthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectAuth {
    return new Contract(address, _abi, signerOrProvider) as ConnectAuth;
  }
}
