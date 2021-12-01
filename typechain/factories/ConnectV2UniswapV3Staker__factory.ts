/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConnectV2UniswapV3Staker,
  ConnectV2UniswapV3StakerInterface,
} from "../ConnectV2UniswapV3Staker";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
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
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "incentiveId",
        type: "bytes32",
      },
    ],
    name: "LogDepositAndStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "LogDepositTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "incentiveId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "poolAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "refundee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "LogIncentiveCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "incentiveId",
        type: "bytes32",
      },
    ],
    name: "LogStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "incentiveId",
        type: "bytes32",
      },
    ],
    name: "LogUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "LogWithdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "claimRewards",
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
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundee",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "createIncentive",
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
        name: "_tokenId",
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
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "depositAndStake",
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
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
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
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "transferDeposit",
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
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_refundee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "unstake",
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
        name: "_tokenId",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061135d806100206000396000f3fe6080604052600436106100865760003560e01c80638dfbf220116100595780638dfbf220146100fd5780639a99b4f014610110578063b6b55f2514610123578063cc6ea29f14610136578063d7f346021461014957610086565b806306fdde031461008b57806326bfee04146100b65780632e1a7d4d146100d757806388ff1ba3146100ea575b600080fd5b34801561009757600080fd5b506100a061015c565b6040516100ad9190611139565b60405180910390f35b6100c96100c4366004610efc565b61018e565b6040516100ad92919061114c565b6100c96100e5366004610ecc565b610244565b6100c96100f8366004610e6c565b61030a565b6100c961010b366004610e12565b61045f565b6100c961011e366004610de7565b610637565b6100c9610131366004610ecc565b610690565b6100c9610144366004610e6c565b610764565b6100c9610157366004610e6c565b6107ff565b60405180604001604052806016815260200175556e69737761702d56332d5374616b65722d76312e3160501b81525081565b6040516309affb8160e21b81526060908190731f98407aab862cddef78ed252d6f557aa5b0f00d906326bfee04906101cc90879087906004016111e9565b600060405180830381600087803b1580156101e657600080fd5b505af11580156101fa573d6000803e3d6000fd5b5050505060405180606001604052806023815260200161127d602391399150838360405160200161022c9291906111e9565b60405160208183030381529060405290509250929050565b604051633c423f0b60e01b81526060908190731f98407aab862cddef78ed252d6f557aa5b0f00d90633c423f0b906102829086903090600401611200565b600060405180830381600087803b15801561029c57600080fd5b505af11580156102b0573d6000803e3d6000fd5b50505050604051806040016040528060148152602001734c6f6757697468647261772875696e743235362960601b8152509150826040516020016102f491906111e0565b6040516020818303038152906040529050915091565b6060808261031e5761031b3061089a565b92505b604051635c46a7ef60e11b815273c36442b4a4522e871399cd717abdd847ab11fe889063b88d4fde9061036d903090731f98407aab862cddef78ed252d6f557aa5b0f00d908890600401611095565b600060405180830381600087803b15801561038757600080fd5b505af115801561039b573d6000803e3d6000fd5b5050505060006103aa846109bd565b6040805160a0810182526001600160a01b03808c16825280841660208301529181018a905260608101899052908716608082015290915081906103ed8682610b90565b6040518060600160405280602381526020016112e4602391399450858160405160200161041a91906111b1565b60405160208183030381529060405280519060200120604051602001610441929190611226565b60405160208183030381529060405293505050509550959350505050565b6040805160a0810182526001600160a01b0380881680835281861660208401524293830184905287840160608481018290529288166080850152919384938793919273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146105515760405163095ea7b360e01b81526001600160a01b038c169063095ea7b3906104fd90731f98407aab862cddef78ed252d6f557aa5b0f00d908b906004016110c8565b602060405180830381600087803b15801561051757600080fd5b505af115801561052b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054f9190610eac565b505b604051635cc5e3d960e01b8152731f98407aab862cddef78ed252d6f557aa5b0f00d90635cc5e3d99061058a9084908b906004016111c5565b600060405180830381600087803b1580156105a457600080fd5b505af11580156105b8573d6000803e3d6000fd5b505050506040518060800160405280604481526020016112a0604491399550806040516020016105e891906111b1565b60405160208183030381529060405280519060200120888a85858b604051602001610618969594939291906110e1565b6040516020818303038152906040529450505050509550959350505050565b6060806000610647853086610bff565b905060405180606001604052806021815260200161130760219139925084816040516020016106779291906110c8565b6040516020818303038152906040529150509250929050565b606080826106a4576106a13061089a565b92505b604051635c46a7ef60e11b815273c36442b4a4522e871399cd717abdd847ab11fe889063b88d4fde906106f3903090731f98407aab862cddef78ed252d6f557aa5b0f00d908890600401611095565b600060405180830381600087803b15801561070d57600080fd5b505af1158015610721573d6000803e3d6000fd5b50505050604051806040016040528060138152602001724c6f674465706f7369742875696e743235362960681b8152509150826040516020016102f491906111e0565b6060806000610772846109bd565b6040805160a0810182526001600160a01b03808c16825280841660208301529181018a905260608101899052908716608082015290915081906107b58682610b90565b6040518060400160405280601981526020017f4c6f675374616b652875696e743235362c6279746573333229000000000000008152509450858160405160200161041a91906111b1565b606080600061080d846109bd565b6040805160a0810182526001600160a01b03808c16825280841660208301529181018a905260608101899052908716608082015290915081906108508187610c97565b6040518060400160405280601b81526020017f4c6f67556e7374616b652875696e743235362c627974657333322900000000008152509450858160405160200161041a91906111b1565b6040516370a0823160e01b8152600090819073c36442b4a4522e871399cd717abdd847ab11fe88906370a08231906108d6908690600401611081565b60206040518083038186803b1580156108ee57600080fd5b505afa158015610902573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109269190610ee4565b604051632f745c5960e01b815290915073c36442b4a4522e871399cd717abdd847ab11fe8890632f745c59906109669086906000198601906004016110c8565b60206040518083038186803b15801561097e57600080fd5b505afa158015610992573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b69190610ee4565b9392505050565b600080600073c36442b4a4522e871399cd717abdd847ab11fe886001600160a01b03166399fbab8860e01b856040516024016109f991906111e0565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610a379190611065565b600060405180830381855afa9150503d8060008114610a72576040519150601f19603f3d011682016040523d82523d6000602084013e610a77565b606091505b509150915081610aa25760405162461bcd60e51b8152600401610a999061117a565b60405180910390fd5b600080600083806020019051810190610abb9190610f2b565b5050509450945094505050610b8573c36442b4a4522e871399cd717abdd847ab11fe886001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1657600080fd5b505afa158015610b2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4e9190610dcb565b6040518060600160405280866001600160a01b03168152602001856001600160a01b031681526020018462ffffff16815250610cd0565b979650505050505050565b60405163f2d2909b60e01b8152731f98407aab862cddef78ed252d6f557aa5b0f00d9063f2d2909b90610bc990849086906004016111c5565b600060405180830381600087803b158015610be357600080fd5b505af1158015610bf7573d6000803e3d6000fd5b505050505050565b604051632f2d783d60e01b8152600090731f98407aab862cddef78ed252d6f557aa5b0f00d90632f2d783d90610c3d90879087908790600401611115565b602060405180830381600087803b158015610c5757600080fd5b505af1158015610c6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8f9190610ee4565b949350505050565b604051637aa4d5a160e11b8152731f98407aab862cddef78ed252d6f557aa5b0f00d9063f549ab4290610bc990859085906004016111c5565b600081602001516001600160a01b031682600001516001600160a01b031610610cf857600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b8051600281900b8114610dc657600080fd5b919050565b600060208284031215610ddc578081fd5b81516109b681611264565b60008060408385031215610df9578081fd5b8235610e0481611264565b946020939093013593505050565b600080600080600060a08688031215610e29578081fd5b8535610e3481611264565b9450602086013593506040860135610e4b81611264565b92506060860135610e5b81611264565b949793965091946080013592915050565b600080600080600060a08688031215610e83578081fd5b8535610e8e81611264565b945060208601359350604086013592506060860135610e5b81611264565b600060208284031215610ebd578081fd5b815180151581146109b6578182fd5b600060208284031215610edd578081fd5b5035919050565b600060208284031215610ef5578081fd5b5051919050565b60008060408385031215610f0e578182fd5b823591506020830135610f2081611264565b809150509250929050565b600080600080600080600080610100898b031215610f47578283fd5b88516bffffffffffffffffffffffff81168114610f62578384fd5b60208a0151909850610f7381611264565b60408a0151909750610f8481611264565b60608a0151909650610f9581611264565b60808a015190955062ffffff81168114610fad578384fd5b9350610fbb60a08a01610db4565b9250610fc960c08a01610db4565b915060e08901516fffffffffffffffffffffffffffffffff81168114610fed578182fd5b809150509295985092959890939650565b60008151808452611016816020860160208601611234565b601f01601f19169290920160200192915050565b80516001600160a01b039081168352602080830151821690840152604080830151908401526060808301519084015260809182015116910152565b60008251611077818460208701611234565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260806060820181905260009082015260a00190565b6001600160a01b03929092168252602082015260400190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082526109b66020830184610ffe565b60006040825261115f6040830185610ffe565b82810360208401526111718185610ffe565b95945050505050565b60208082526019908201527f6665746368696e6720706f736974696f6e73206661696c656400000000000000604082015260600190565b60a081016111bf828461102a565b92915050565b60c081016111d3828561102a565b8260a08301529392505050565b90815260200190565b9182526001600160a01b0316602082015260400190565b9182526001600160a01b0316602082015260606040820181905260009082015260800190565b918252602082015260400190565b60005b8381101561124f578181015183820152602001611237565b8381111561125e576000848401525b50505050565b6001600160a01b038116811461127957600080fd5b5056fe4c6f674465706f7369745472616e736665722875696e743235362c61646472657373294c6f67496e63656e746976654372656174656428627974657333322c616464726573732c616464726573732c75696e743235362c75696e743235362c75696e74323536294c6f674465706f736974416e645374616b652875696e743235362c62797465733332294c6f67526577617264436c61696d656428616464726573732c75696e7432353629a2646970667358221220a2600941d9421f81f4b3f043527af4e1f1432c311815767b31b6b4e6124cec9664736f6c63430007060033";

type ConnectV2UniswapV3StakerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2UniswapV3StakerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2UniswapV3Staker__factory extends ContractFactory {
  constructor(...args: ConnectV2UniswapV3StakerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2UniswapV3Staker> {
    return super.deploy(overrides || {}) as Promise<ConnectV2UniswapV3Staker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2UniswapV3Staker {
    return super.attach(address) as ConnectV2UniswapV3Staker;
  }
  connect(signer: Signer): ConnectV2UniswapV3Staker__factory {
    return super.connect(signer) as ConnectV2UniswapV3Staker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2UniswapV3StakerInterface {
    return new utils.Interface(_abi) as ConnectV2UniswapV3StakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2UniswapV3Staker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConnectV2UniswapV3Staker;
  }
}
