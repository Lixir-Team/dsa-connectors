/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConnectV2Dydx, ConnectV2DydxInterface } from "../ConnectV2Dydx";

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
  "0x60c06040526007608081905266447964782d763160c81b60a09081526200002a91600091906200003f565b503480156200003857600080fd5b50620000eb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000775760008555620000c2565b82601f106200009257805160ff1916838001178555620000c2565b82800160010185558215620000c2579182015b82811115620000c2578251825591602001919060010190620000a5565b50620000d0929150620000d4565b5090565b5b80821115620000d05760008155600101620000d5565b61169480620000fb6000396000f3fe60806040526004361061004a5760003560e01c806306fdde031461004f57806338baa4c21461007a5780634532d7761461009b578063a33d406f146100ae578063ce88b439146100c1575b600080fd5b34801561005b57600080fd5b506100646100d4565b60405161007191906113ca565b60405180910390f35b61008d610088366004611125565b610162565b6040516100719291906113dd565b61008d6100a9366004611125565b610340565b61008d6100bc366004611125565b61051e565b61008d6100cf366004611125565b6107ea565b6000805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561015a5780601f1061012f5761010080835404028352916020019161015a565b820191906000526020600020905b81548152906001019060200180831161013d57829003601f168201915b505050505081565b60608060006101718587610a70565b9050600061017e88610b0c565b905060008061018c83610c9d565b91509150816000148061019d575080155b6101c25760405162461bcd60e51b81526004016101b9906114f9565b60405180910390fd5b731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e63a67a6a456101e4610d58565b6101f086886000610dcc565b6040518363ffffffff1660e01b815260040161020d9291906112b5565b600060405180830381600087803b15801561022757600080fd5b505af115801561023b573d6000803e3d6000fd5b505050506001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156102e45773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2610284818087610eb2565b604051632e1a7d4d60e01b81526001600160a01b03821690632e1a7d4d906102b0908890600401611567565b600060405180830381600087803b1580156102ca57600080fd5b505af11580156102de573d6000803e3d6000fd5b50505050505b6102ee8785610ffa565b6040518060600160405280603281526020016115fa6032913995508983858a8a604051602001610322959493929190611287565b60405160208183030381529060405294505050505094509492505050565b606080600061034f8587610a70565b9050600061035c88610b0c565b905060008061036a83610c9d565b915091508061038b5760405162461bcd60e51b81526004016101b990611434565b600019841461039a578361039c565b815b9350818411156103be5760405162461bcd60e51b81526004016101b9906114cf565b731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e63a67a6a456103e0610d58565b6103ec86886000610dcc565b6040518363ffffffff1660e01b81526004016104099291906112b5565b600060405180830381600087803b15801561042357600080fd5b505af1158015610437573d6000803e3d6000fd5b505050506001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156104e05773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2610480818087610eb2565b604051632e1a7d4d60e01b81526001600160a01b03821690632e1a7d4d906104ac908890600401611567565b600060405180830381600087803b1580156104c657600080fd5b505af11580156104da573d6000803e3d6000fd5b50505050505b6104ea8785610ffa565b6040518060600160405280603481526020016115c66034913995508983858a8a604051602001610322959493929190611287565b606080600061052d8587610a70565b9050600061053a88610b0c565b905060008061054883610c9d565b91509150801561056a5760405162461bcd60e51b81526004016101b990611481565b6000198414610579578361057b565b815b93508184111561059d5760405162461bcd60e51b81526004016101b99061140b565b6001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156106705773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2478511156105f75760405162461bcd60e51b81526004016101b9906114a7565b806001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b15801561063257600080fd5b505af1158015610646573d6000803e3d6000fd5b505050505061066a81731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e87610eb2565b5061072f565b6040516370a0823160e01b81528a9085906001600160a01b038316906370a08231906106a0903090600401611273565b60206040518083038186803b1580156106b857600080fd5b505afa1580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f091906111b4565b101561070e5760405162461bcd60e51b81526004016101b990611522565b61072d81731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e87610eb2565b505b731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e63a67a6a45610751610d58565b61075d86886001610dcc565b6040518363ffffffff1660e01b815260040161077a9291906112b5565b600060405180830381600087803b15801561079457600080fd5b505af11580156107a8573d6000803e3d6000fd5b505050506107b68785610ffa565b60405180606001604052806033815260200161162c6033913995508983858a8a604051602001610322959493929190611287565b60608060006107f98587610a70565b9050600061080688610b0c565b905060008061081483610c9d565b9150915081600014806108245750805b6108405760405162461bcd60e51b81526004016101b990611459565b6001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156109065773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26000198514610889578461088b565b475b9450806001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b1580156108c857600080fd5b505af11580156108dc573d6000803e3d6000fd5b505050505061090081731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e87610eb2565b506109b5565b8960001985146109165784610992565b6040516370a0823160e01b81526001600160a01b038216906370a0823190610942903090600401611273565b60206040518083038186803b15801561095a57600080fd5b505afa15801561096e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099291906111b4565b94506109b381731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e87610eb2565b505b731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e63a67a6a456109d7610d58565b6109e386886001610dcc565b6040518363ffffffff1660e01b8152600401610a009291906112b5565b600060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b50505050610a3c8785610ffa565b6040518060600160405280603381526020016115936033913995508983858a8a604051602001610322959493929190611287565b60008215610b0357738a5419cfc711b2343c17a6abf4b2bafabb06957f6001600160a01b031663a9c70eaa846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610ad257600080fd5b505af1158015610ae6573d6000803e3d6000fd5b505050506040513d6020811015610afc57600080fd5b5051610b05565b815b9392505050565b600080731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e6001600160a01b031663295c39a56040518163ffffffff1660e01b815260040160206040518083038186803b158015610b5c57600080fd5b505afa158015610b70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9491906111b4565b905060006001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610bc25783610bd8565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b905060005b82811015610c955760405163062bd3e960e01b8152731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e9063062bd3e990610c1c908490600401611567565b60206040518083038186803b158015610c3457600080fd5b505afa158015610c48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6c9190611109565b6001600160a01b0316826001600160a01b03161415610c8d57809350610c95565b600101610bdd565b505050919050565b60008080731e0447b19bb6ecfdae1e4ae1694b0c3659614e4e63c190c2ec610cc3610d58565b600081518110610ccf57fe5b6020026020010151866040518363ffffffff1660e01b8152600401610cf592919061154c565b6040805180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d46919061115f565b60208101519051909590945092505050565b60408051600180825281830190925260609160009190816020015b610d7b611077565b815260200190600190039081610d735790505090506040518060400160405280306001600160a01b03168152602001600081525081600081518110610dbc57fe5b6020908102919091010152905090565b60408051600180825281830190925260609160009190816020015b610def61108e565b815260200190600190039081610de75750506040805160808101825285151581526000602082018190529181018290526060808201889052929350919085610e38576001610e3b565b60005b9050604051806101000160405280826008811115610e5557fe5b81526020016000815260200184815260200189815260200160008152602001306001600160a01b03168152602001600081526020018381525084600081518110610e9b57fe5b602090810291909101015250919695505050505050565b826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610f0957600080fd5b505af1925050508015610f1a575060015b610ff5576040805163095ea7b360e01b81526001600160a01b03848116600483015260006024830181905292519086169263095ea7b3926044808201939182900301818387803b158015610f6d57600080fd5b505af1158015610f81573d6000803e3d6000fd5b50505050826001600160a01b031663095ea7b383836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610fdc57600080fd5b505af1158015610ff0573d6000803e3d6000fd5b505050505b505050565b81156110735760408051631878f25160e21b815260048101849052602481018390529051738a5419cfc711b2343c17a6abf4b2bafabb06957f916361e3c94491604480830192600092919082900301818387803b15801561105a57600080fd5b505af115801561106e573d6000803e3d6000fd5b505050505b5050565b604080518082019091526000808252602082015290565b6040805161010081018252600080825260208201529081016110ae6110e0565b8152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001606081525090565b604080516080810190915260008082526020820190815260200160008152602001600081525090565b60006020828403121561111a578081fd5b8151610b058161157d565b6000806000806080858703121561113a578283fd5b84356111458161157d565b966020860135965060408601359560600135945092505050565b600060408284031215611170578081fd5b6040516040810181811067ffffffffffffffff8211171561118d57fe5b6040528251801515811461119f578283fd5b81526020928301519281019290925250919050565b6000602082840312156111c5578081fd5b5051919050565b6001600160a01b03169052565b60008151808452815b818110156111fe576020818501810151868301820152016111e2565b8181111561120f5782602083870101525b50601f01601f19169290920160200192915050565b805115158252602081015161123881611570565b6020830152604081015161124b81611570565b6040830152606090810151910152565b80516001600160a01b03168252602090810151910152565b6001600160a01b0391909116815260200190565b6001600160a01b03959095168552602085019390935260408401919091526060830152608082015260a00190565b6040808252835182820181905260009190606090818501906020808901865b838110156112f7576112e785835161125b565b93860193908201906001016112d4565b5050868303818801528751808452818401925080820284018201898301885b838110156113b957601f19878403018652815161016081516009811061133857fe5b855281870151878601528a8201516113528c870182611224565b508982015160c081818801526080840151915060e0828189015260a085015192506113816101008901846111cc565b9084015161012088015290920151610140860182905291506113a5818601836111d9565b978701979450505090840190600101611316565b50909b9a5050505050505050505050565b600060208252610b0560208301846111d9565b6000604082526113f060408301856111d9565b828103602084015261140281856111d9565b95945050505050565b6020808252600f908201526e7061796261636b2d6578636565647360881b604082015260600190565b6020808252600b908201526a7472792d7061796261636b60a81b604082015260600190565b6020808252600e908201526d1d1bdad95b8b589bdc9c9bddd95960921b604082015260600190565b6020808252600c908201526b7472792d776974686472617760a01b604082015260600190565b6020808252600e908201526d0dcdee85acadcdeeaced05acae8d60931b604082015260600190565b60208082526010908201526f77697468647261772d6578636565647360801b604082015260600190565b6020808252600f908201526e1d1bdad95b8b59195c1bdcda5d1959608a1b604082015260600190565b60208082526010908201526f3737ba16b2b737bab3b416ba37b5b2b760811b604082015260600190565b6060810161155a828561125b565b8260408301529392505050565b90815260200190565b6002811061157a57fe5b50565b6001600160a01b038116811461157a57600080fdfe4c6f674465706f73697428616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e74323536294c6f67576974686472617728616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e74323536294c6f67426f72726f7728616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e74323536294c6f675061796261636b28616464726573732c75696e743235362c75696e743235362c75696e743235362c75696e7432353629a264697066735822122014603dc2c3497786805aa5f63c26d1906122f227978f68d1dcfc364b8de3a47664736f6c63430007060033";

type ConnectV2DydxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2DydxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2Dydx__factory extends ContractFactory {
  constructor(...args: ConnectV2DydxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2Dydx> {
    return super.deploy(overrides || {}) as Promise<ConnectV2Dydx>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2Dydx {
    return super.attach(address) as ConnectV2Dydx;
  }
  connect(signer: Signer): ConnectV2Dydx__factory {
    return super.connect(signer) as ConnectV2Dydx__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2DydxInterface {
    return new utils.Interface(_abi) as ConnectV2DydxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2Dydx {
    return new Contract(address, _abi, signerOrProvider) as ConnectV2Dydx;
  }
}
