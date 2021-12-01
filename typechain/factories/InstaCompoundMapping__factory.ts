/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InstaCompoundMapping,
  InstaCompoundMappingInterface,
} from "../InstaCompoundMapping";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connectors",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "_ctokenNames",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_ctokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ctoken",
        type: "address",
      },
    ],
    name: "LogCTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ctoken",
        type: "address",
      },
    ],
    name: "LogCTokenUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_ctokens",
        type: "address[]",
      },
    ],
    name: "addCtokenMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "cTokenMapping",
    outputs: [
      {
        internalType: "address",
        name: "ctoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "connectors",
    outputs: [
      {
        internalType: "contract ConnectorsInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ethAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenId",
        type: "string",
      },
    ],
    name: "getMapping",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "instaIndex",
    outputs: [
      {
        internalType: "contract IndexInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_ctokens",
        type: "address[]",
      },
    ],
    name: "updateCtokenMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001eda38038062001eda8339810160408190526200003491620005bd565b6001600160601b0319606085901b16608052620000538383836200005d565b5050505062000952565b81518351146200008a5760405162461bcd60e51b8152600401620000819062000749565b60405180910390fd5b8051835114620000ae5760405162461bcd60e51b8152600401620000819062000749565b60005b8151811015620004f957600080858381518110620000cb57fe5b6020026020010151604051620000e291906200072b565b90815260408051918290036020908101832083830190925281546001600160a01b03908116808552600190930154169083015290915015620001385760405162461bcd60e51b815260040162000081906200084f565b60208101516001600160a01b031615620001665760405162461bcd60e51b815260040162000081906200084f565b60006001600160a01b03168483815181106200017e57fe5b60200260200101516001600160a01b03161415620001b05760405162461bcd60e51b8152600401620000819062000896565b60006001600160a01b0316838381518110620001c857fe5b60200260200101516001600160a01b03161415620001fa5760405162461bcd60e51b815260040162000081906200078a565b60008383815181106200020957fe5b60200260200101519050806001600160a01b031663fe9c44ae6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200024d57600080fd5b505afa15801562000262573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000288919062000709565b620002a75760405162461bcd60e51b8152600401620000819062000818565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316858481518110620002d257fe5b60200260200101516001600160a01b031614620003a557848381518110620002f657fe5b60200260200101516001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200034157600080fd5b505afa15801562000356573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200037c919062000599565b6001600160a01b031614620003a55760405162461bcd60e51b81526004016200008190620007d6565b6040518060400160405280858581518110620003bd57fe5b60200260200101516001600160a01b03168152602001868581518110620003e057fe5b60200260200101516001600160a01b031681525060008785815181106200040357fe5b60200260200101516040516200041a91906200072b565b90815260405160209181900382019020825181546001600160a01b03199081166001600160a01b03928316178355939092015160019091018054909316911617905583518490849081106200046b57fe5b60200260200101516001600160a01b03168584815181106200048957fe5b60200260200101516001600160a01b0316878581518110620004a757fe5b6020026020010151604051620004be91906200072b565b604051908190038120907fcb5f86521b153498b6f9d9de78dbfa3a886b19aeb83e33f63b8198bfa4b03ea390600090a45050600101620000b1565b50505050565b80516001600160a01b03811681146200051757600080fd5b919050565b600082601f8301126200052d578081fd5b8151602062000546620005408362000905565b620008e1565b828152818101908583018385028701840188101562000563578586fd5b855b858110156200058c576200057982620004ff565b8452928401929084019060010162000565565b5090979650505050505050565b600060208284031215620005ab578081fd5b620005b682620004ff565b9392505050565b60008060008060808587031215620005d3578283fd5b620005de85620004ff565b60208601519094506001600160401b0380821115620005fb578485fd5b818701915087601f8301126200060f578485fd5b815162000620620005408262000905565b818152602080820191908501885b84811015620006af57815187018d603f8201126200064a578a8bfd5b6020810151878111156200065a57fe5b6200066f601f8201601f1916602001620008e1565b8181528f604083850101111562000684578c8dfd5b6200069782602083016040860162000923565b8652505060209384019391909101906001016200062e565b505060408a01519097509350505080821115620006ca578384fd5b620006d8888389016200051c565b93506060870151915080821115620006ee578283fd5b50620006fd878288016200051c565b91505092959194509250565b6000602082840312156200071b578081fd5b81518015158114620005b6578182fd5b600082516200073f81846020870162000923565b9190910192915050565b60208082526021908201527f61646443746f6b656e4d617070696e673a206e6f742073616d65206c656e67746040820152600d60fb1b606082015260800190565b6020808252602c908201527f61646443746f6b656e4d617070696e673a205f63746f6b656e7320616464726560408201526b1cdcc81b9bdd081d985a5b1960a21b606082015260800190565b60208082526022908201527f61646443746f6b656e4d617070696e673a206d617070696e67206d69736d61746040820152610c6d60f31b606082015260800190565b6020808252601e908201527f61646443746f6b656e4d617070696e673a206e6f7420612063546f6b656e0000604082015260600190565b60208082526027908201527f61646443746f6b656e4d617070696e673a206d617070696e6720616464656420604082015266616c726561647960c81b606082015260800190565b6020808252602b908201527f61646443746f6b656e4d617070696e673a205f746f6b656e732061646472657360408201526a1cc81b9bdd081d985a5b1960aa1b606082015260800190565b6040518181016001600160401b0381118282101715620008fd57fe5b604052919050565b60006001600160401b038211156200091957fe5b5060209081020190565b60005b838110156200094057818101518382015260200162000926565b83811115620004f95750506000910152565b60805160601c611565620009756000398061071952806107f152506115656000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636d3c94691161005b5780636d3c9469146100f657806395d0af5114610109578063a41098bf1461011c578063bbf646c21461012457610088565b806306fdde031461008d57806311f45e9c146100ab578063530c3aba146100cc57806365050a68146100e1575b600080fd5b61009561012c565b6040516100a291906110e2565b60405180910390f35b6100be6100b936600461104d565b61015d565b6040516100a29291906110c8565b6100df6100da366004610ec9565b6101af565b005b6100e9610717565b6040516100a291906110b4565b6100df610104366004610f5a565b61073b565b6100be61011736600461104d565b6108a2565b6100e96108d3565b6100e96108eb565b60405180604001604052806015815260200174436f6d706f756e642d4d617070696e672d76312e3160581b81525081565b600080600080846040516101719190611098565b908152604080516020928190038301812081830190925281546001600160a01b03908116808352600190930154169201829052909590945092505050565b732971adfa57b20e5a416ae5a708a8655a9c74f7236001600160a01b031663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b1580156101fc57600080fd5b505afa158015610210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102349190610ead565b6001600160a01b0316336001600160a01b03161461026d5760405162461bcd60e51b8152600401610264906112b0565b60405180910390fd5b8251841461028d5760405162461bcd60e51b815260040161026490611315565b8381146102ac5760405162461bcd60e51b815260040161026490611315565b60005b8181101561070f576000808787848181106102c657fe5b90506020028101906102d89190611464565b6040516102e6929190611088565b90815260408051918290036020908101832083830190925281546001600160a01b0390811680855260019093015416908301529091506103385760405162461bcd60e51b81526004016102649061117c565b60208101516001600160a01b03166103625760405162461bcd60e51b81526004016102649061117c565b60006001600160a01b031685838151811061037957fe5b60200260200101516001600160a01b031614156103a85760405162461bcd60e51b8152600401610264906111c7565b60008484848181106103b657fe5b90506020020160208101906103cb9190610e8a565b6001600160a01b031614156103f25760405162461bcd60e51b815260040161026490611215565b600084848481811061040057fe5b90506020020160208101906104159190610e8a565b9050806001600160a01b031663fe9c44ae6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045057600080fd5b505afa158015610464573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610488919061102d565b6104a45760405162461bcd60e51b8152600401610264906112d4565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b03168684815181106104ce57fe5b60200260200101516001600160a01b031614610598578583815181106104f057fe5b60200260200101516001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561053a57600080fd5b505afa15801561054e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105729190610ead565b6001600160a01b0316146105985760405162461bcd60e51b815260040161026490611359565b60405180604001604052808686868181106105af57fe5b90506020020160208101906105c49190610e8a565b6001600160a01b031681526020018785815181106105de57fe5b60200260200101516001600160a01b0316815250600089898681811061060057fe5b90506020028101906106129190611464565b604051610620929190611088565b90815260405160209181900382019020825181546001600160a01b03199081166001600160a01b03928316178355939092015160019091018054909316911617905584848481811061066e57fe5b90506020020160208101906106839190610e8a565b6001600160a01b031686848151811061069857fe5b60200260200101516001600160a01b03168989868181106106b557fe5b90506020028101906106c79190611464565b6040516106d5929190611088565b604051908190038120907f1884eb8af8dca4739644541a6625c3b2c10de7d2c02c2075ae5cc1553a255c7490600090a450506001016102af565b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b732971adfa57b20e5a416ae5a708a8655a9c74f7236001600160a01b031663ee97f7f36040518163ffffffff1660e01b815260040160206040518083038186803b15801561078857600080fd5b505afa15801561079c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c09190610ead565b6001600160a01b0316336001600160a01b0316148061087657506040516335882b5760e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636b1056ae906108269033906004016110b4565b60206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610876919061102d565b6108925760405162461bcd60e51b815260040161026490611115565b61089d838383610903565b505050565b8051602081830181018051600082529282019190930120915280546001909101546001600160a01b03918216911682565b732971adfa57b20e5a416ae5a708a8655a9c74f72381565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b81518351146109245760405162461bcd60e51b81526004016102649061113b565b80518351146109455760405162461bcd60e51b81526004016102649061113b565b60005b8151811015610d615760008085838151811061096057fe5b60200260200101516040516109759190611098565b90815260408051918290036020908101832083830190925281546001600160a01b039081168085526001909301541690830152909150156109c85760405162461bcd60e51b8152600401610264906113d2565b60208101516001600160a01b0316156109f35760405162461bcd60e51b8152600401610264906113d2565b60006001600160a01b0316848381518110610a0a57fe5b60200260200101516001600160a01b03161415610a395760405162461bcd60e51b815260040161026490611419565b60006001600160a01b0316838381518110610a5057fe5b60200260200101516001600160a01b03161415610a7f5760405162461bcd60e51b815260040161026490611264565b6000838381518110610a8d57fe5b60200260200101519050806001600160a01b031663fe9c44ae6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ad057600080fd5b505afa158015610ae4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b08919061102d565b610b245760405162461bcd60e51b81526004016102649061139b565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316858481518110610b4e57fe5b60200260200101516001600160a01b031614610c1857848381518110610b7057fe5b60200260200101516001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b158015610bba57600080fd5b505afa158015610bce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf29190610ead565b6001600160a01b031614610c185760405162461bcd60e51b815260040161026490611359565b6040518060400160405280858581518110610c2f57fe5b60200260200101516001600160a01b03168152602001868581518110610c5157fe5b60200260200101516001600160a01b03168152506000878581518110610c7357fe5b6020026020010151604051610c889190611098565b90815260405160209181900382019020825181546001600160a01b03199081166001600160a01b0392831617835593909201516001909101805490931691161790558351849084908110610cd857fe5b60200260200101516001600160a01b0316858481518110610cf557fe5b60200260200101516001600160a01b0316878581518110610d1257fe5b6020026020010151604051610d279190611098565b604051908190038120907fcb5f86521b153498b6f9d9de78dbfa3a886b19aeb83e33f63b8198bfa4b03ea390600090a45050600101610948565b50505050565b60008083601f840112610d78578182fd5b50813567ffffffffffffffff811115610d8f578182fd5b6020830191508360208083028501011115610da957600080fd5b9250929050565b600082601f830112610dc0578081fd5b81356020610dd5610dd0836114cd565b6114a9565b8281528181019085830183850287018401881015610df1578586fd5b855b85811015610e18578135610e0681611517565b84529284019290840190600101610df3565b5090979650505050505050565b600082601f830112610e35578081fd5b813567ffffffffffffffff811115610e4957fe5b610e5c601f8201601f19166020016114a9565b818152846020838601011115610e70578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610e9b578081fd5b8135610ea681611517565b9392505050565b600060208284031215610ebe578081fd5b8151610ea681611517565b600080600080600060608688031215610ee0578081fd5b853567ffffffffffffffff80821115610ef7578283fd5b610f0389838a01610d67565b90975095506020880135915080821115610f1b578283fd5b610f2789838a01610db0565b94506040880135915080821115610f3c578283fd5b50610f4988828901610d67565b969995985093965092949392505050565b600080600060608486031215610f6e578283fd5b833567ffffffffffffffff80821115610f85578485fd5b818601915086601f830112610f98578485fd5b81356020610fa8610dd0836114cd565b82815281810190858301895b85811015610fdd57610fcb8d8684358b0101610e25565b84529284019290840190600101610fb4565b50909850505087013592505080821115610ff5578384fd5b61100187838801610db0565b93506040860135915080821115611016578283fd5b5061102386828701610db0565b9150509250925092565b60006020828403121561103e578081fd5b81518015158114610ea6578182fd5b60006020828403121561105e578081fd5b813567ffffffffffffffff811115611074578182fd5b61108084828501610e25565b949350505050565b6000828483379101908152919050565b600082516110aa8184602087016114eb565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b60006020825282518060208401526111018160408501602087016114eb565b601f01601f19169190910160400192915050565b6020808252600c908201526b3737ba16b0b716b1b434b2b360a11b604082015260600190565b60208082526021908201527f61646443746f6b656e4d617070696e673a206e6f742073616d65206c656e67746040820152600d60fb1b606082015260800190565b6020808252602b908201527f75706461746543746f6b656e4d617070696e673a206d617070696e6720646f6560408201526a1cc81b9bdd08195e1a5cdd60aa1b606082015260800190565b6020808252602e908201527f75706461746543746f6b656e4d617070696e673a205f746f6b656e732061646460408201526d1c995cdcc81b9bdd081d985a5b1960921b606082015260800190565b6020808252602f908201527f75706461746543746f6b656e4d617070696e673a205f63746f6b656e7320616460408201526e191c995cdcc81b9bdd081d985a5b19608a1b606082015260800190565b6020808252602c908201527f61646443746f6b656e4d617070696e673a205f63746f6b656e7320616464726560408201526b1cdcc81b9bdd081d985a5b1960a21b606082015260800190565b6020808252600a90820152693737ba16b6b0b9ba32b960b11b604082015260600190565b60208082526021908201527f75706461746543746f6b656e4d617070696e673a206e6f7420612063546f6b656040820152603760f91b606082015260800190565b60208082526024908201527f75706461746543746f6b656e4d617070696e673a206e6f742073616d65206c656040820152630dccee8d60e31b606082015260800190565b60208082526022908201527f61646443746f6b656e4d617070696e673a206d617070696e67206d69736d61746040820152610c6d60f31b606082015260800190565b6020808252601e908201527f61646443746f6b656e4d617070696e673a206e6f7420612063546f6b656e0000604082015260600190565b60208082526027908201527f61646443746f6b656e4d617070696e673a206d617070696e6720616464656420604082015266616c726561647960c81b606082015260800190565b6020808252602b908201527f61646443746f6b656e4d617070696e673a205f746f6b656e732061646472657360408201526a1cc81b9bdd081d985a5b1960aa1b606082015260800190565b6000808335601e1984360301811261147a578283fd5b83018035915067ffffffffffffffff821115611494578283fd5b602001915036819003821315610da957600080fd5b60405181810167ffffffffffffffff811182821017156114c557fe5b604052919050565b600067ffffffffffffffff8211156114e157fe5b5060209081020190565b60005b838110156115065781810151838201526020016114ee565b83811115610d615750506000910152565b6001600160a01b038116811461152c57600080fd5b5056fea264697066735822122006b452f3219004cddd66cef7297ebb7cd1c38a9f56f1772b8ce2331e1d394e2f64736f6c63430007060033";

type InstaCompoundMappingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InstaCompoundMappingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InstaCompoundMapping__factory extends ContractFactory {
  constructor(...args: InstaCompoundMappingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _connectors: string,
    _ctokenNames: string[],
    _tokens: string[],
    _ctokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InstaCompoundMapping> {
    return super.deploy(
      _connectors,
      _ctokenNames,
      _tokens,
      _ctokens,
      overrides || {}
    ) as Promise<InstaCompoundMapping>;
  }
  getDeployTransaction(
    _connectors: string,
    _ctokenNames: string[],
    _tokens: string[],
    _ctokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connectors,
      _ctokenNames,
      _tokens,
      _ctokens,
      overrides || {}
    );
  }
  attach(address: string): InstaCompoundMapping {
    return super.attach(address) as InstaCompoundMapping;
  }
  connect(signer: Signer): InstaCompoundMapping__factory {
    return super.connect(signer) as InstaCompoundMapping__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstaCompoundMappingInterface {
    return new utils.Interface(_abi) as InstaCompoundMappingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstaCompoundMapping {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InstaCompoundMapping;
  }
}
