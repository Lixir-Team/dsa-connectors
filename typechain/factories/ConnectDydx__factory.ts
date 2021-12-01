/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConnectDydx, ConnectDydxInterface } from "../ConnectDydx";

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
        name: "marketId",
        type: "uint256",
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
        name: "marketId",
        type: "uint256",
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
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
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
        name: "marketId",
        type: "uint256",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDydxAddress",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getWETHAddr",
    outputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
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
    name: "payback",
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
  "0x60c06040526007608081905266447964782d763160c81b60a09081526200002a91600091906200003f565b503480156200003857600080fd5b50620000eb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000775760008555620000c2565b82601f106200009257805160ff1916838001178555620000c2565b82800160010185558215620000c2579182015b82811115620000c2578251825591602001919060010190620000a5565b50620000d0929150620000d4565b5090565b5b80821115620000d05760008155600101620000d5565b61166d80620000fb6000396000f3fe6080604052600436106100705760003560e01c80634532d7761161004e5780634532d776146100d7578063a33d406f146100ea578063b980d3df146100fd578063ce88b4391461011257610070565b806306fdde03146100755780631bad4d2c146100a057806338baa4c2146100c2575b600080fd5b34801561008157600080fd5b5061008a610125565b6040516100979190611482565b60405180910390f35b3480156100ac57600080fd5b506100b56101b3565b6040516100979190611340565b6100d56100d03660046111f2565b6101cb565b005b6100d56100e53660046111f2565b6103f6565b6100d56100f83660046111f2565b61062c565b34801561010957600080fd5b506100b561098a565b6100d56101203660046111f2565b6109a2565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101ab5780601f10610180576101008083540402835291602001916101ab565b820191906000526020600020905b81548152906001019060200180831161018e57829003601f168201915b505050505081565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290565b60006101d561098a565b905060006101e38486610cba565b905060006101f18388610d56565b90506000806102008584610ebb565b915091508160001480610211575080155b6102365760405162461bcd60e51b815260040161022d90611583565b60405180910390fd5b846001600160a01b031663a67a6a4561024d610f6d565b61025986886000610fe1565b6040518363ffffffff1660e01b815260040161027692919061136d565b600060405180830381600087803b15801561029057600080fd5b505af11580156102a4573d6000803e3d6000fd5b505050506001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561039a5760006102d76101b3565b60405163095ea7b360e01b81529091506001600160a01b0382169063095ea7b3906103089084908990600401611354565b600060405180830381600087803b15801561032257600080fd5b505af1158015610336573d6000803e3d6000fd5b5050604051632e1a7d4d60e01b81526001600160a01b0384169250632e1a7d4d91506103669088906004016115f1565b600060405180830381600087803b15801561038057600080fd5b505af1158015610394573d6000803e3d6000fd5b50505050505b6103a486856110c7565b886001600160a01b03167f7a820240d9f3ec4b998f20c82601ad5d316c006138f52c435c349ef46eae7ffb84868a8a6040516103e394939291906115fa565b60405180910390a2505050505050505050565b600061040061098a565b9050600061040e8486610cba565b9050600061041c8388610d56565b905060008061042b8584610ebb565b915091508061044c5760405162461bcd60e51b815260040161022d906114be565b600019841461045b578361045d565b815b93508184111561047f5760405162461bcd60e51b815260040161022d90611559565b846001600160a01b031663a67a6a45610496610f6d565b6104a286886000610fe1565b6040518363ffffffff1660e01b81526004016104bf92919061136d565b600060405180830381600087803b1580156104d957600080fd5b505af11580156104ed573d6000803e3d6000fd5b505050506001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156105e35760006105206101b3565b60405163095ea7b360e01b81529091506001600160a01b0382169063095ea7b3906105519084908990600401611354565b600060405180830381600087803b15801561056b57600080fd5b505af115801561057f573d6000803e3d6000fd5b5050604051632e1a7d4d60e01b81526001600160a01b0384169250632e1a7d4d91506105af9088906004016115f1565b600060405180830381600087803b1580156105c957600080fd5b505af11580156105dd573d6000803e3d6000fd5b50505050505b6105ed86856110c7565b886001600160a01b03167f71ec6330779eb13064fdcb040e03c78e2f9e68fb56bcf3ad120223fd1bcd421884868a8a6040516103e394939291906115fa565b600061063661098a565b905060006106448486610cba565b905060006106528388610d56565b90506000806106618584610ebb565b9150915080156106835760405162461bcd60e51b815260040161022d9061150b565b60001984146106925783610694565b815b9350818411156106b65760405162461bcd60e51b815260040161022d90611495565b6001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156107c85760006106e56101b3565b9050844710156107075760405162461bcd60e51b815260040161022d90611531565b806001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b15801561074257600080fd5b505af1158015610756573d6000803e3d6000fd5b5050505050806001600160a01b031663095ea7b361077261098a565b876040518363ffffffff1660e01b8152600401610790929190611354565b600060405180830381600087803b1580156107aa57600080fd5b505af11580156107be573d6000803e3d6000fd5b50505050506108cf565b6040516370a0823160e01b8152899085906001600160a01b038316906370a08231906107f8903090600401611340565b60206040518083038186803b15801561081057600080fd5b505afa158015610824573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108489190611281565b10156108665760405162461bcd60e51b815260040161022d906115ac565b806001600160a01b031663095ea7b361087d61098a565b876040518363ffffffff1660e01b815260040161089b929190611354565b600060405180830381600087803b1580156108b557600080fd5b505af11580156108c9573d6000803e3d6000fd5b50505050505b846001600160a01b031663a67a6a456108e6610f6d565b6108f286886001610fe1565b6040518363ffffffff1660e01b815260040161090f92919061136d565b600060405180830381600087803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b5050505061094b86856110c7565b886001600160a01b03167fda2016a89958b5c9b3ee30a3e0858b2dfcce432f8792d8f71dbf040e295e98e284868a8a6040516103e394939291906115fa565b731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e90565b60006109ac61098a565b905060006109ba8486610cba565b905060006109c88388610d56565b90506000806109d78584610ebb565b9150915081600014806109e75750805b610a035760405162461bcd60e51b815260040161022d906114e3565b6001600160a01b03891673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610b08576000610a326101b3565b90506000198514610a435784610a45565b475b9450806001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b158015610a8257600080fd5b505af1158015610a96573d6000803e3d6000fd5b5050505050806001600160a01b031663095ea7b3610ab261098a565b876040518363ffffffff1660e01b8152600401610ad0929190611354565b600060405180830381600087803b158015610aea57600080fd5b505af1158015610afe573d6000803e3d6000fd5b5050505050610bff565b886000198514610b185784610b94565b6040516370a0823160e01b81526001600160a01b038216906370a0823190610b44903090600401611340565b60206040518083038186803b158015610b5c57600080fd5b505afa158015610b70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b949190611281565b9450806001600160a01b031663095ea7b3610bad61098a565b876040518363ffffffff1660e01b8152600401610bcb929190611354565b600060405180830381600087803b158015610be557600080fd5b505af1158015610bf9573d6000803e3d6000fd5b50505050505b846001600160a01b031663a67a6a45610c16610f6d565b610c2286886001610fe1565b6040518363ffffffff1660e01b8152600401610c3f92919061136d565b600060405180830381600087803b158015610c5957600080fd5b505af1158015610c6d573d6000803e3d6000fd5b50505050610c7b86856110c7565b886001600160a01b03167f5b5dbc6c64043a15d3fe6943a6e443a826b78755edc257b2ec890c022225dbcf84868a8a6040516103e394939291906115fa565b60008215610d4d57738a5419cfc711b2343c17a6abf4b2bafabb06957f6001600160a01b031663a9c70eaa846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610d1c57600080fd5b505af1158015610d30573d6000803e3d6000fd5b505050506040513d6020811015610d4657600080fd5b5051610d4f565b815b9392505050565b600080836001600160a01b031663295c39a56040518163ffffffff1660e01b815260040160206040518083038186803b158015610d9257600080fd5b505afa158015610da6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dca9190611281565b905060006001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610df85783610e00565b610e006101b3565b905060005b82811015610eb25760405163062bd3e960e01b81526001600160a01b0387169063062bd3e990610e399084906004016115f1565b60206040518083038186803b158015610e5157600080fd5b505afa158015610e65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8991906111d6565b6001600160a01b0316826001600160a01b03161415610eaa57809350610eb2565b600101610e05565b50505092915050565b6000806000846001600160a01b031663c190c2ec610ed7610f6d565b600081518110610ee357fe5b6020026020010151866040518363ffffffff1660e01b8152600401610f099291906115d6565b6040805180830381600087803b158015610f2257600080fd5b505af1158015610f36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5a919061122c565b6020810151905190969095509350505050565b60408051600180825281830190925260609160009190816020015b610f90611144565b815260200190600190039081610f885790505090506040518060400160405280306001600160a01b03168152602001600081525081600081518110610fd157fe5b6020908102919091010152905090565b60408051600180825281830190925260609160009190816020015b61100461115b565b815260200190600190039081610ffc575050604080516080810182528515158152600060208201819052918101829052606080820188905292935091908561104d576001611050565b60005b905060405180610100016040528082600881111561106a57fe5b81526020016000815260200184815260200189815260200160008152602001306001600160a01b031681526020016000815260200183815250846000815181106110b057fe5b602090810291909101015250919695505050505050565b81156111405760408051631878f25160e21b815260048101849052602481018390529051738a5419cfc711b2343c17a6abf4b2bafabb06957f916361e3c94491604480830192600092919082900301818387803b15801561112757600080fd5b505af115801561113b573d6000803e3d6000fd5b505050505b5050565b604080518082019091526000808252602082015290565b60408051610100810182526000808252602082015290810161117b6111ad565b8152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001606081525090565b604080516080810190915260008082526020820190815260200160008152602001600081525090565b6000602082840312156111e7578081fd5b8151610d4f81611622565b60008060008060808587031215611207578283fd5b843561121281611622565b966020860135965060408601359560600135945092505050565b60006040828403121561123d578081fd5b6040516040810181811067ffffffffffffffff8211171561125a57fe5b6040528251801515811461126c578283fd5b81526020928301519281019290925250919050565b600060208284031215611292578081fd5b5051919050565b6001600160a01b03169052565b60008151808452815b818110156112cb576020818501810151868301820152016112af565b818111156112dc5782602083870101525b50601f01601f19169290920160200192915050565b805115158252602081015161130581611615565b6020830152604081015161131881611615565b6040830152606090810151910152565b80516001600160a01b03168252602090810151910152565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6040808252835182820181905260009190606090818501906020808901865b838110156113af5761139f858351611328565b938601939082019060010161138c565b5050868303818801528751808452818401925080820284018201898301885b8381101561147157601f1987840301865281516101608151600981106113f057fe5b855281870151878601528a82015161140a8c8701826112f1565b508982015160c081818801526080840151915060e0828189015260a08501519250611439610100890184611299565b90840151610120880152909201516101408601829052915061145d818601836112a6565b9787019794505050908401906001016113ce565b50909b9a5050505050505050505050565b600060208252610d4f60208301846112a6565b6020808252600f908201526e7061796261636b2d6578636565647360881b604082015260600190565b6020808252600b908201526a7472792d7061796261636b60a81b604082015260600190565b6020808252600e908201526d1d1bdad95b8b589bdc9c9bddd95960921b604082015260600190565b6020808252600c908201526b7472792d776974686472617760a01b604082015260600190565b6020808252600e908201526d0dcdee85acadcdeeaced05acae8d60931b604082015260600190565b60208082526010908201526f77697468647261772d6578636565647360801b604082015260600190565b6020808252600f908201526e1d1bdad95b8b59195c1bdcda5d1959608a1b604082015260600190565b60208082526010908201526f3737ba16b2b737bab3b416ba37b5b2b760811b604082015260600190565b606081016115e48285611328565b8260408301529392505050565b90815260200190565b93845260208401929092526040830152606082015260800190565b6002811061161f57fe5b50565b6001600160a01b038116811461161f57600080fdfea2646970667358221220716f9860a8934d6bb9d43004db3ca99c393c7725340bbbe7f3e3a76c32322ba764736f6c63430007060033";

type ConnectDydxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectDydxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectDydx__factory extends ContractFactory {
  constructor(...args: ConnectDydxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectDydx> {
    return super.deploy(overrides || {}) as Promise<ConnectDydx>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectDydx {
    return super.attach(address) as ConnectDydx;
  }
  connect(signer: Signer): ConnectDydx__factory {
    return super.connect(signer) as ConnectDydx__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectDydxInterface {
    return new utils.Interface(_abi) as ConnectDydxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectDydx {
    return new Contract(address, _abi, signerOrProvider) as ConnectDydx;
  }
}
