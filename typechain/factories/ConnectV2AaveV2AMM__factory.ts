/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConnectV2AaveV2AMM,
  ConnectV2AaveV2AMMInterface,
} from "../ConnectV2AaveV2AMM";

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
        indexed: true,
        internalType: "uint256",
        name: "rateMode",
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
    name: "LogBorrow",
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
    name: "LogDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "LogEnableCollateral",
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
        indexed: true,
        internalType: "uint256",
        name: "rateMode",
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
    name: "LogPayback",
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
        name: "rateMode",
        type: "uint256",
      },
    ],
    name: "LogSwapRateMode",
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
    name: "LogWithdraw",
    type: "event",
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
        name: "rateMode",
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
    name: "borrow",
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
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "enableCollateral",
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
        name: "rateMode",
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
    name: "payback",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
    ],
    name: "swapBorrowRateMode",
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
  "0x608060405234801561001057600080fd5b50611730806100206000396000f3fe6080604052600436106100705760003560e01c80636abcd3de1161004e5780636abcd3de1461025357806394ba89a214610291578063ce88b439146102bd578063da2b65c8146102f557610070565b806306fdde03146100755780634532d776146100ff5780634e5e60e714610215575b600080fd5b34801561008157600080fd5b5061008a610365565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100c45781810151838201526020016100ac565b50505050905090810190601f1680156100f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101376004803603608081101561011557600080fd5b506001600160a01b03813516906020810135906040810135906060013561038e565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610178578181015183820152602001610160565b50505050905090810190601f1680156101a55780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156101d85781810151838201526020016101c0565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b610137600480360360a081101561022b57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060800135610660565b610137600480360360a081101561026957600080fd5b506001600160a01b038135169060208101359060408101359060608101359060800135610855565b610137600480360360408110156102a757600080fd5b506001600160a01b038135169060200135610a25565b610137600480360360808110156102d357600080fd5b506001600160a01b038135169060208101359060408101359060600135610ba4565b6101376004803603602081101561030b57600080fd5b81019060208101813564010000000081111561032657600080fd5b82018360208201111561033857600080fd5b8035906020019184602083028401116401000000008311171561035a57600080fd5b509092509050610e90565b6040518060400160405280600d81526020016c4161766556322d414d4d2d763160981b81525081565b606080600061039d85876110af565b9050600073acc030ef66f9dfeae9cbb0cd1b25654b82cfa8d56001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ee57600080fd5b505afa158015610402573d6000803e3d6000fd5b505050506040513d602081101561041857600080fd5b505190506001600160a01b03881673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14600081610449578961045f565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b905060008190506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156104b557600080fd5b505afa1580156104c9573d6000803e3d6000fd5b505050506040513d60208110156104df57600080fd5b505160408051631a4ca37b60e21b81526001600160a01b038681166004830152602482018a90523060448301529151929350908716916369328dec9160648082019260009290919082900301818387803b15801561053c57600080fd5b505af1158015610550573d6000803e3d6000fd5b505050506000826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156105a357600080fd5b505afa1580156105b7573d6000803e3d6000fd5b505050506040513d60208110156105cd57600080fd5b505190506105db818361114b565b96506105e8858489611157565b6105f28a886111cc565b6040518060600160405280602c815260200161169c602c913998508c878c8c60405160200180856001600160a01b0316815260200184815260200183815260200182815260200194505050505060405160208183030381529060405297505050505050505094509492505050565b606080600061066f85886110af565b9050600073acc030ef66f9dfeae9cbb0cd1b25654b82cfa8d56001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106c057600080fd5b505afa1580156106d4573d6000803e3d6000fd5b505050506040513d60208110156106ea57600080fd5b505190506001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1460008161071b578a610731565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b9050806000198514610743578461074d565b61074d828b611249565b9450821561076057610760838287611307565b61076b818587611366565b6040805163573ade8160e01b81526001600160a01b03848116600483015260248201889052604482018d905230606483015291519186169163573ade819160848082019260009290919082900301818387803b1580156107ca57600080fd5b505af11580156107de573d6000803e3d6000fd5b505050506107ec88866111cc565b6040518060600160405280603381526020016116c860339139604080516001600160a01b03909e1660208f01528d81019690965260608d019a909a52505050506080880194909452505060a0808601919091528151808603909101815260c09094019052929050565b606080600061086485886110af565b9050600073acc030ef66f9dfeae9cbb0cd1b25654b82cfa8d56001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108b557600080fd5b505afa1580156108c9573d6000803e3d6000fd5b505050506040513d60208110156108df57600080fd5b505190506001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14600081610910578a610926565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b6040805163a415bcad60e01b81526001600160a01b03808416600483015260248201889052604482018d9052610c9c606483015230608483015291519293509085169163a415bcad9160a48082019260009290919082900301818387803b15801561099057600080fd5b505af11580156109a4573d6000803e3d6000fd5b505050506109b3828286611157565b6109bd87856111cc565b60405180606001604052806032815260200161166a60329139604080516001600160a01b03909d1660208e01528c81019590955260608c01999099525050506080880194909452505060a0808601919091528151808603909101815260c09094019052929050565b606080600073acc030ef66f9dfeae9cbb0cd1b25654b82cfa8d56001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a7757600080fd5b505afa158015610a8b573d6000803e3d6000fd5b505050506040513d6020811015610aa157600080fd5b50519050600060018514610ab6576001610ab9565b60025b60ff1690506000610aca8783611249565b1115610b4057816001600160a01b03166394ba89a287876040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610b2757600080fd5b505af1158015610b3b573d6000803e3d6000fd5b505050505b505060408051808201825260208082527f4c6f6753776170526174654d6f646528616464726573732c75696e74323536298183015282516001600160a01b039097169087015285820194909452805180860382018152606090950190525090929050565b6060806000610bb385876110af565b9050600073acc030ef66f9dfeae9cbb0cd1b25654b82cfa8d56001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c0457600080fd5b505afa158015610c18573d6000803e3d6000fd5b505050506040513d6020811015610c2e57600080fd5b505190506001600160a01b03881673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14600081610c5f5789610c75565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b9050808215610ca1576000198514610c8d5784610c8f565b475b9450610c9c838287611307565b610d26565b6000198514610cb05784610d23565b604080516370a0823160e01b815230600482015290516001600160a01b038316916370a08231916024808301926020929190829003018186803b158015610cf657600080fd5b505afa158015610d0a573d6000803e3d6000fd5b505050506040513d6020811015610d2057600080fd5b50515b94505b610d31818587611366565b6040805163e8eda9df60e01b81526001600160a01b03848116600483015260248201889052306044830152610c9c606483015291519186169163e8eda9df9160848082019260009290919082900301818387803b158015610d9157600080fd5b505af1158015610da5573d6000803e3d6000fd5b50505050610db2826114ad565b610e215760408051635a3b74b960e01b81526001600160a01b03848116600483015260016024830152915191861691635a3b74b99160448082019260009290919082900301818387803b158015610e0857600080fd5b505af1158015610e1c573d6000803e3d6000fd5b505050505b610e2b88866111cc565b6040518060600160405280602b815260200161163f602b9139604080516001600160a01b03909d1660208e01528c81019690965260608c0199909952505050506080808801949094528051808803909401845260a09096019095525090939092509050565b6060808280610edd576040805162461bcd60e51b81526020600482015260146024820152730c0b5d1bdad95b9ccb5b9bdd0b585b1b1bddd95960621b604482015290519081900360640190fd5b600073acc030ef66f9dfeae9cbb0cd1b25654b82cfa8d56001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f2c57600080fd5b505afa158015610f40573d6000803e3d6000fd5b505050506040513d6020811015610f5657600080fd5b5051905060005b8281101561101c576000878783818110610f7357fe5b905060200201356001600160a01b031690506000610f9082611549565b118015610fa35750610fa1816114ad565b155b156110135760408051635a3b74b960e01b81526001600160a01b03838116600483015260016024830152915191851691635a3b74b99160448082019260009290919082900301818387803b158015610ffa57600080fd5b505af115801561100e573d6000803e3d6000fd5b505050505b50600101610f5d565b506040518060400160405280601e81526020017f4c6f67456e61626c65436f6c6c61746572616c28616464726573735b5d2900008152509350858560405160200180806020018281038252848482818152602001925060200280828437600081840152601f19601f8201169050808301925050509350505050604051602081830303815290604052925050509250929050565b6000821561114257738a5419cfc711b2343c17a6abf4b2bafabb06957f6001600160a01b031663a9c70eaa846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561111157600080fd5b505af1158015611125573d6000803e3d6000fd5b505050506040513d602081101561113b57600080fd5b5051611144565b815b9392505050565b600061114483836115e1565b82156111c757611168828383611366565b816001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156111ae57600080fd5b505af11580156111c2573d6000803e3d6000fd5b505050505b505050565b81156112455760408051631878f25160e21b815260048101849052602481018390529051738a5419cfc711b2343c17a6abf4b2bafabb06957f916361e3c94491604480830192600092919082900301818387803b15801561122c57600080fd5b505af1158015611240573d6000803e3d6000fd5b505050505b5050565b604080516328dd2d0160e01b81526001600160a01b038416600482015230602482015290516000918291829173c443ad9dde3cecfb9dfc5736578f447afe3590ba916328dd2d019160448082019261012092909190829003018186803b1580156112b257600080fd5b505afa1580156112c6573d6000803e3d6000fd5b505050506040513d6101208110156112dd57600080fd5b5060208101516040909101519092509050600184146112fc57806112fe565b815b95945050505050565b82156111c757816001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561134857600080fd5b505af115801561135c573d6000803e3d6000fd5b5050505050505050565b826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156113bd57600080fd5b505af19250505080156113ce575060015b6111c7576040805163095ea7b360e01b81526001600160a01b03848116600483015260006024830181905292519086169263095ea7b3926044808201939182900301818387803b15801561142157600080fd5b505af1158015611435573d6000803e3d6000fd5b50505050826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561149057600080fd5b505af11580156114a4573d6000803e3d6000fd5b505050506111c7565b604080516328dd2d0160e01b81526001600160a01b0383166004820152306024820152905160009173c443ad9dde3cecfb9dfc5736578f447afe3590ba916328dd2d019160448082019261012092909190829003018186803b15801561151257600080fd5b505afa158015611526573d6000803e3d6000fd5b505050506040513d61012081101561153d57600080fd5b50610100015192915050565b604080516328dd2d0160e01b81526001600160a01b0383166004820152306024820152905160009173c443ad9dde3cecfb9dfc5736578f447afe3590ba916328dd2d019160448082019261012092909190829003018186803b1580156115ae57600080fd5b505afa1580156115c2573d6000803e3d6000fd5b505050506040513d6101208110156115d957600080fd5b505192915050565b600082821115611638576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe4c6f674465706f73697428616464726573732c75696e743235362c75696e743235362c75696e74323536294c6f67426f72726f7728616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e74323536294c6f67576974686472617728616464726573732c75696e743235362c75696e743235362c75696e74323536294c6f675061796261636b28616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e7432353629a2646970667358221220a1ec7af7381af1286b49ba2d29f0e7bb18b6e39f0360a6422f445ad284b7b80664736f6c63430007060033";

type ConnectV2AaveV2AMMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2AaveV2AMMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2AaveV2AMM__factory extends ContractFactory {
  constructor(...args: ConnectV2AaveV2AMMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2AaveV2AMM> {
    return super.deploy(overrides || {}) as Promise<ConnectV2AaveV2AMM>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2AaveV2AMM {
    return super.attach(address) as ConnectV2AaveV2AMM;
  }
  connect(signer: Signer): ConnectV2AaveV2AMM__factory {
    return super.connect(signer) as ConnectV2AaveV2AMM__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2AaveV2AMMInterface {
    return new utils.Interface(_abi) as ConnectV2AaveV2AMMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2AaveV2AMM {
    return new Contract(address, _abi, signerOrProvider) as ConnectV2AaveV2AMM;
  }
}
