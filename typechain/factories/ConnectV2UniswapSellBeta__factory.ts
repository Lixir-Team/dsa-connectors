/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConnectV2UniswapSellBeta,
  ConnectV2UniswapSellBetaInterface,
} from "../ConnectV2UniswapSellBeta";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOutMinimum",
        type: "uint256",
      },
    ],
    name: "LogSell",
    type: "event",
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
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMinimum",
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
  "0x608060405234801561001057600080fd5b50611005806100206000396000f3fe6080604052600436106100295760003560e01c806306fdde031461002e578063587465d514610059575b600080fd5b34801561003a57600080fd5b5061004361007a565b6040516100509190610e3e565b60405180910390f35b61006c610067366004610c4a565b6100a7565b604051610050929190610e51565b60405180604001604052806011815260200170556e69737761702d53656c6c2d4265746160781b81525081565b6060806100d26001600160a01b03881673e592427a0aece92de3edee1f18e0157c058615648661013a565b60006100ea6100e58989308a8a8a610252565b6102ea565b9050604051806060016040528060278152602001610f496027913992508585828660405160200161011e9493929190610ee8565b6040516020818303038152906040529150509550959350505050565b8015806101c0575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561019257600080fd5b505afa1580156101a6573d6000803e3d6000fd5b505050506040513d60208110156101bc57600080fd5b5051155b6101fb5760405162461bcd60e51b8152600401808060200182810382526036815260200180610f9a6036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261024d90849061037e565b505050565b61025a610bb6565b604051806101000160405280886001600160a01b03168152602001876001600160a01b031681526020018562ffffff168152602001866001600160a01b031681526020014260010181526020018481526020018381526020016102d485896001600160a01b03168b6001600160a01b0316108b8b8a61042f565b6001600160a01b03169052979650505050505050565b60405163414bf38960e01b815260009073e592427a0aece92de3edee1f18e0157c058615649063414bf38990610324908590600401610e7f565b602060405180830381600087803b15801561033e57600080fd5b505af1158015610352573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103769190610d7b565b90505b919050565b60006103d3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661053a9092919063ffffffff16565b80519091501561024d578080602001905160208110156103f257600080fd5b505161024d5760405162461bcd60e51b815260040180806020018281038252602a815260200180610f70602a913960400191505060405180910390fd5b60008061043d858585610553565b905061052f816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561047b57600080fd5b505afa15801561048f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b39190610cab565b60000151826001600160a01b0316631a6865026040518163ffffffff1660e01b815260040160206040518083038186803b1580156104f057600080fd5b505afa158015610504573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105289190610d54565b89896105c2565b979650505050505050565b6060610549848460008561061e565b90505b9392505050565b6000826001600160a01b0316846001600160a01b03161115610573579192915b610549731f98431c8ad98523631ae4a59f267346ea31f9846040518060600160405280876001600160a01b03168152602001866001600160a01b031681526020018562ffffff1681525061076e565b600080856001600160a01b0316116105d957600080fd5b6000846001600160801b0316116105ef57600080fd5b8161060657610601858585600161081f565b610613565b6106138585856001610900565b90505b949350505050565b60608247101561065f5760405162461bcd60e51b8152600401808060200182810382526026815260200180610f236026913960400191505060405180910390fd5b610668856109ec565b6106b9576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106106f75780518252601f1990920191602091820191016106d8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610759576040519150601f19603f3d011682016040523d82523d6000602084013e61075e565b606091505b509150915061052f8282866109f2565b600081602001516001600160a01b031682600001516001600160a01b03161061079657600080fd5b828260000151836020015184604001516040516020016107b893929190610e16565b60408051601f19818403018152908290528051602091820120610800939290917fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b549101610dde565b60408051601f1981840301815291905280516020909101209392505050565b600081156108925760006001600160a01b038411156108555761085084600160601b876001600160801b0316610a96565b61086d565b6001600160801b038516606085901b8161086b57fe5b045b905061088a6108856001600160a01b03881683610b45565b610b5b565b915050610616565b60006001600160a01b038411156108c0576108bb84600160601b876001600160801b0316610b71565b6108d7565b6108d7606085901b6001600160801b038716610bab565b905080866001600160a01b0316116108ee57600080fd5b6001600160a01b038616039050610616565b60008261090e575083610616565b6fffffffffffffffffffffffffffffffff60601b606085901b1682156109a5576001600160a01b0386168481029085828161094557fe5b041415610976578181018281106109745761096a83896001600160a01b031683610b71565b9350505050610616565b505b61099c82610997878a6001600160a01b0316868161099057fe5b0490610b45565b610bab565b92505050610616565b6001600160a01b038616848102908582816109bc57fe5b041480156109c957508082115b6109d257600080fd5b80820361096a610885846001600160a01b038b1684610b71565b3b151590565b60608315610a0157508161054c565b825115610a115782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a5b578181015183820152602001610a43565b50505050905090810190601f168015610a885780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000808060001985870986860292508281109083900303905080610acc5760008411610ac157600080fd5b50829004905061054c565b808411610ad857600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b80820182811015610b5557600080fd5b92915050565b806001600160a01b038116811461037957600080fd5b6000610b7e848484610a96565b905060008280610b8a57fe5b848609111561054c576000198110610ba157600080fd5b6001019392505050565b808204910615150190565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b8051801515811461037957600080fd5b8051600281900b811461037957600080fd5b805161037981610f0a565b805161ffff8116811461037957600080fd5b805160ff8116811461037957600080fd5b600080600080600060a08688031215610c61578081fd5b8535610c6c81610f0a565b94506020860135610c7c81610f0a565b9350604086013562ffffff81168114610c93578182fd5b94979396509394606081013594506080013592915050565b600060e08284031215610cbc578081fd5b60405160e0810181811067ffffffffffffffff82111715610cd957fe5b604052610ce583610c1c565b8152610cf360208401610c0a565b6020820152610d0460408401610c27565b6040820152610d1560608401610c27565b6060820152610d2660808401610c27565b6080820152610d3760a08401610c39565b60a0820152610d4860c08401610bfa565b60c08201529392505050565b600060208284031215610d65578081fd5b81516001600160801b038116811461054c578182fd5b600060208284031215610d8c578081fd5b5051919050565b60008151808452815b81811015610db857602081850181015186830182015201610d9c565b81811115610dc95782602083870101525b50601f01601f19169290920160200192915050565b6001600160f81b0319815260609390931b6bffffffffffffffffffffffff191660018401526015830191909152603582015260550190565b6001600160a01b03938416815291909216602082015262ffffff909116604082015260600190565b60006020825261054c6020830184610d93565b600060408252610e646040830185610d93565b8281036020840152610e768185610d93565b95945050505050565b81516001600160a01b03908116825260208084015182169083015260408084015162ffffff16908301526060808401518216908301526080808401519083015260a0838101519083015260c0808401519083015260e09283015116918101919091526101000190565b62ffffff94909416845260208401929092526040830152606082015260800190565b6001600160a01b0381168114610f1f57600080fd5b5056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4c6f6753656c6c2875696e7432342c75696e743235362c75696e743235362c75696e74323536295361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a264697066735822122051b057b9576629c1679b702ea91bb8b0c5206c7f2e11fe620f57b00aa348a3b364736f6c63430007060033";

type ConnectV2UniswapSellBetaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2UniswapSellBetaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2UniswapSellBeta__factory extends ContractFactory {
  constructor(...args: ConnectV2UniswapSellBetaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2UniswapSellBeta> {
    return super.deploy(overrides || {}) as Promise<ConnectV2UniswapSellBeta>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2UniswapSellBeta {
    return super.attach(address) as ConnectV2UniswapSellBeta;
  }
  connect(signer: Signer): ConnectV2UniswapSellBeta__factory {
    return super.connect(signer) as ConnectV2UniswapSellBeta__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2UniswapSellBetaInterface {
    return new utils.Interface(_abi) as ConnectV2UniswapSellBetaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2UniswapSellBeta {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConnectV2UniswapSellBeta;
  }
}
