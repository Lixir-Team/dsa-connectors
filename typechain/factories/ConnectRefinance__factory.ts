/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConnectRefinance,
  ConnectRefinanceInterface,
} from "../ConnectRefinance";

const _abi = [
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
        components: [
          {
            internalType: "enum Helpers.Protocol",
            name: "source",
            type: "uint8",
          },
          {
            internalType: "enum Helpers.Protocol",
            name: "target",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "collateralFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtFee",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "ctokenIds",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "borrowAmts",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "withdrawAmts",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "borrowRateModes",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "paybackRateModes",
            type: "uint256[]",
          },
        ],
        internalType: "struct RefinanceResolver.RefinanceData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "refinance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600e60808190526d2932b334b730b731b296bb18971960911b60a090815262000031916000919062000046565b503480156200003f57600080fd5b50620000f2565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200007e5760008555620000c9565b82601f106200009957805160ff1916838001178555620000c9565b82800160010185558215620000c9579182015b82811115620000c9578251825591602001919060010190620000ac565b50620000d7929150620000db565b5090565b5b80821115620000d75760008155600101620000dc565b61418680620001026000396000f3fe6080604052600436106100345760003560e01c806306fdde03146100395780637f19b34414610064578063eb15f78114610079575b600080fd5b34801561004557600080fd5b5061004e61009c565b60405161005b9190613dc0565b60405180910390f35b610077610072366004613ad4565b61012a565b005b34801561008557600080fd5b5061008e611022565b60405161005b929190613fd8565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101225780601f106100f757610100808354040283529160200191610122565b820191906000526020600020905b81548152906001019060200180831161010557829003601f168201915b505050505081565b61013a6040820160208301613ab5565b600281111561014557fe5b6101526020830183613ab5565b600281111561015d57fe5b14156101845760405162461bcd60e51b815260040161017b90613f20565b60405180910390fd5b60006101936080830183613fe6565b91508190506101a560c0840184614033565b9050146101c45760405162461bcd60e51b815260040161017b90613f7e565b806101d260e0840184614033565b9050146101f15760405162461bcd60e51b815260040161017b90613f7e565b80610200610100840184614033565b90501461021f5760405162461bcd60e51b815260040161017b90613f7e565b8061022e610120840184614033565b90501461024d5760405162461bcd60e51b815260040161017b90613f7e565b8061025b60a0840184614033565b90501461027a5760405162461bcd60e51b815260040161017b90613f7e565b600061028461102a565b6001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102bc57600080fd5b505afa1580156102d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f491906139d5565b90506000610300611042565b6001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561033857600080fd5b505afa15801561034c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037091906139d5565b9050600061037c611042565b6001600160a01b031663ed6ff7606040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b457600080fd5b505afa1580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec91906139d5565b905060006103f861105a565b905060608060006104478861041060808c018c613fe6565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061107292505050565b9050600061046a8961045c60a08d018d614033565b61046591614089565b611184565b9050600061047b60208c018c613ab5565b600281111561048657fe5b1480156104ad575060016104a060408c0160208d01613ab5565b60028111156104ab57fe5b145b15610619576104ba613825565b6001600160a01b038916815260208082018b905260608c013560408301526104e4908c018c613ab5565b816060019060028111156104f457fe5b9081600281111561050157fe5b9052506080810183905260a0810182905261051f60c08c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060c08201526105636101008c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060e08201526105a2816112de565b93506105b188888c86886113d7565b6105ff88888c868f8060e001906105c89190614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061142592505050565b945061061389878c8e60400135878a6114d5565b50611016565b600061062860208c018c613ab5565b600281111561063357fe5b14801561065a5750600261064d60408c0160208d01613ab5565b600281111561065857fe5b145b15610785576106698982611524565b61067161386b565b89815260608b013560208083019190915261068e908c018c613ab5565b8160400190600281111561069e57fe5b908160028111156106ab57fe5b90525060608101829052608081018390526106c960c08c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060a082015261070d6101008c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060c082015261074c8161164a565b935061075b88888c86886113d7565b61077288888c868f8060e001906105c89190614033565b94506106138a8c60400135848689611732565b600161079460208c018c613ab5565b600281111561079f57fe5b1480156107c6575060006107b960408c0160208d01613ab5565b60028111156107c457fe5b145b15610a44576107d3613891565b6107db6138dd565b6107e3613925565b6001600160a01b038a16835260208084018d905260608e0135604085015261080d908e018e613ab5565b8360600190600281111561081d57fe5b9081600281111561082a57fe5b9052506080830185905260a0830184905261084860c08e018e614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060c084015261088c6101008e018e614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060e08401526108d06101208e018e614033565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050506101008401526109108361178a565b6001600160a01b03808d16845289166020840152604083018d9052606083018690526080830181905295506109496101208e018e614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060a083015261098882611893565b6001600160a01b03808c16825288166020820152604081018c9052606081018590526109b760e08e018e614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060808201526109f681611909565b9650610a00613966565b6001600160a01b03808c1682528a16602082015260408082018e90528e013560608201526080810186905260a08101889052610a3b816119c4565b50505050611016565b6001610a5360208c018c613ab5565b6002811115610a5e57fe5b148015610a8557506002610a7860408c0160208d01613ab5565b6002811115610a8357fe5b145b15610c8257610a948982611524565b610a9c61386b565b89815260608b0135602080830191909152610ab9908c018c613ab5565b81604001906002811115610ac957fe5b90816002811115610ad657fe5b9052506060810182905260808101839052610af460c08c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060a0820152610b386101008c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060c0820152610b778161164a565b935050610b826138dd565b6001600160a01b03808a16825286166020820152604081018a90526060810183905260808101849052610bb96101208c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060a0820152610bf881611893565b610c00613925565b6001600160a01b03808b16825287166020820152604081018b905260608101849052610c2f60e08d018d614033565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050506080820152610c6e81611909565b9550506106138a8c60400135848689611732565b6002610c9160208c018c613ab5565b6002811115610c9c57fe5b148015610cc357506000610cb660408c0160208d01613ab5565b6002811115610cc157fe5b145b15610ea457610cd0613891565b6001600160a01b038816815260208082018b905260608c01356040830152610cfa908c018c613ab5565b81606001906002811115610d0a57fe5b90816002811115610d1757fe5b9052506080810183905260a08101829052610d3560c08c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060c0820152610d796101008c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060e0820152610dbd6101208c018c614033565b80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250505050610100820152610dfd8161178a565b9350610e0b8a838587611a22565b610e588a83858e8060e00190610e219190614033565b80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250611a7a92505050565b9450610e62613966565b6001600160a01b03808a1682528816602082015260408082018c90528c013560608201526080810184905260a08101869052610e9d816119c4565b5050611016565b6002610eb360208c018c613ab5565b6002811115610ebe57fe5b148015610ee557506001610ed860408c0160208d01613ab5565b6002811115610ee357fe5b145b15610ffe57610ef2613825565b6001600160a01b038916815260208082018b905260608c01356040830152610f1c908c018c613ab5565b81606001906002811115610f2c57fe5b90816002811115610f3957fe5b9052506080810183905260a08101829052610f5760c08c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060c0820152610f9b6101008c018c614033565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050505060e0820152610fda816112de565b9350610fe88a838587611a22565b6105ff8a83858e8060e00190610e219190614033565b60405162461bcd60e51b815260040161017b90613e13565b50505050505050505050565b600190606090565b73b53c1a33016b2dc2ff3653530bff1848a515c8c590565b7324a42fd28c976a61df5d00d0599c34c4f90748c890565b73057835ad21a177dbdd3090bb1cae03eacf78fc6d90565b60606000836001600160401b038111801561108c57600080fd5b506040519080825280602002602001820160405280156110b6578160200160208202803683370190505b50905060005b8481101561117a576110cc611b3b565b6001600160a01b03168482815181106110e157fe5b60200260200101516001600160a01b0316141561113157611100611b53565b82828151811061110c57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050611172565b83818151811061113d57fe5b602002602001015182828151811061115157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b6001016110bc565b5090505b92915050565b60606000836001600160401b038111801561119e57600080fd5b506040519080825280602002602001820160405280156111c8578160200160208202803683370190505b50905060005b8481101561117a576000806111e1611b6b565b6001600160a01b03166311f45e9c8785815181106111fb57fe5b60200260200101516040518263ffffffff1660e01b815260040161121f9190613dc0565b604080518083038186803b15801561123657600080fd5b505afa15801561124a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126e91906139ef565b90925090506001600160a01b0382161580159061129357506001600160a01b03811615155b6112af5760405162461bcd60e51b815260040161017b90613ee9565b808484815181106112bc57fe5b6001600160a01b039092166020928302919091019091015250506001016111ce565b6060600082602001516001600160401b03811180156112fc57600080fd5b50604051908082528060200260200182016040528015611326578160200160208202803683370190505b50905060005b83602001518110156113ce576113af8460000151856040015186606001518760800151858151811061135a57fe5b60200260200101518860a00151868151811061137257fe5b60200260200101518960c00151878151811061138a57fe5b60200260200101518a60e0015188815181106113a257fe5b6020026020010151611b83565b8282815181106113bb57fe5b602090810291909101015260010161132c565b5090505b919050565b60005b8381101561141d5761141486868584815181106113f357fe5b602002602001015185858151811061140757fe5b6020026020010151611c81565b506001016113da565b505050505050565b60606000846001600160401b038111801561143f57600080fd5b50604051908082528060200260200182016040528015611469578160200160208202803683370190505b50905060005b858110156114c8576114a9888887848151811061148857fe5b602002602001015187858151811061149c57fe5b6020026020010151611dbd565b8282815181106114b557fe5b602090810291909101015260010161146f565b5090505b95945050505050565b60005b8481101561151b576115138787868685815181106114f257fe5b602002602001015186868151811061150657fe5b6020026020010151611ef7565b6001016114d8565b50505050505050565b600061152e6120a2565b90506000836001600160401b038111801561154857600080fd5b50604051908082528060200260200182016040528015611572578160200160208202803683370190505b50905060005b848110156115c05783818151811061158c57fe5b60200260200101518282815181106115a057fe5b6001600160a01b0390921660209283029190910190910152600101611578565b50604051631853304760e31b81526001600160a01b0383169063c2998238906115ed908490600401613d7f565b600060405180830381600087803b15801561160757600080fd5b505af115801561161b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116439190810190613a21565b5050505050565b6060600082600001516001600160401b038111801561166857600080fd5b50604051908082528060200260200182016040528015611692578160200160208202803683370190505b50905060005b83518110156113ce576117138460200151856060015183815181106116b957fe5b6020026020010151866080015184815181106116d157fe5b60200260200101518760a0015185815181106116e957fe5b602002602001015188604001518960c00151878151811061170657fe5b60200260200101516120ba565b82828151811061171f57fe5b6020908102919091010152600101611698565b60005b8581101561141d576117828585838151811061174d57fe5b602002602001015185848151811061176157fe5b602002602001015185858151811061177557fe5b60200260200101516121d5565b600101611735565b6060600082602001516001600160401b03811180156117a857600080fd5b506040519080825280602002602001820160405280156117d2578160200160208202803683370190505b50905060005b83602001518110156113ce576118748460000151856040015186606001518760800151858151811061180657fe5b60200260200101518860a00151868151811061181e57fe5b60200260200101518960c00151878151811061183657fe5b60200260200101518a60e00151888151811061184e57fe5b60200260200101518b6101000151898151811061186757fe5b60200260200101516123a5565b82828151811061188057fe5b60209081029190910101526001016117d8565b60005b8160400151811015611905576118fc82600001518360200151846060015184815181106118bf57fe5b6020026020010151856080015185815181106118d757fe5b60200260200101518660a0015186815181106118ef57fe5b6020026020010151612491565b50600101611896565b5050565b6060600082604001516001600160401b038111801561192757600080fd5b50604051908082528060200260200182016040528015611951578160200160208202803683370190505b50905060005b83604001518110156113ce576119a5846000015185602001518660600151848151811061198057fe5b60200260200101518760800151858151811061199857fe5b60200260200101516125ae565b8282815181106119b157fe5b6020908102919091010152600101611957565b60005b816040015181101561190557611a1a826000015183602001518460600151856080015185815181106119f557fe5b60200260200101518660a001518681518110611a0d57fe5b6020026020010151612667565b6001016119c7565b60005b8481101561164357611a71848281518110611a3c57fe5b6020026020010151848381518110611a5057fe5b6020026020010151848481518110611a6457fe5b6020026020010151612817565b50600101611a25565b60606000856001600160401b0381118015611a9457600080fd5b50604051908082528060200260200182016040528015611abe578160200160208202803683370190505b50905060005b86811015611b2f57611b10868281518110611adb57fe5b6020026020010151868381518110611aef57fe5b6020026020010151868481518110611b0357fe5b6020026020010151612a29565b828281518110611b1c57fe5b6020908102919091010152600101611ac4565b5090505b949350505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290565b73a8f9d4aa7319c54c04404765117ddbf9448e208290565b60008215611c75576000611b95611b53565b6001600160a01b0316866001600160a01b0316149050600081611bb85786611bc0565b611bc0611b3b565b9050600019851415611bdb57611bd888828887612d32565b94505b600080611bea878c6001612eac565b915091508b6001600160a01b031663a415bcad8a8389611c08612ee3565b306040518663ffffffff1660e01b8152600401611c29959493929190613d4b565b600060405180830381600087803b158015611c4357600080fd5b505af1158015611c57573d6000803e3d6000fd5b50505050611c66848a89612ee9565b611c708383612fae565b505050505b50909695505050505050565b60008115611db557600080611c94611b53565b6001600160a01b0316856001600160a01b0316149050600081611cb75785611cbf565b611cbf611b3b565b9050600019851415611cde57600080611cd88a84613044565b01965050505b8115611cec57849250611d4d565b60405163095ea7b360e01b81526001600160a01b0387169063095ea7b390611d1a908a908990600401613c68565b600060405180830381600087803b158015611d3457600080fd5b505af1158015611d48573d6000803e3d6000fd5b505050505b60405163173aba7160e21b81526001600160a01b03891690635ceae9c4908590611d7f9085908a903090600401613c81565b6000604051808303818588803b158015611d9857600080fd5b505af1158015611dac573d6000803e3d6000fd5b50505050505050505b509392505050565b60008115611db5576000611dcf611b53565b6001600160a01b0316846001600160a01b031614611ded5783611df5565b611df5611b3b565b90506000856001600160a01b03166334b3beee836040518263ffffffff1660e01b8152600401611e259190613c1f565b60206040518083038186803b158015611e3d57600080fd5b505afa158015611e51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7591906139d5565b9050600019841415611e8e57611e8b87836130da565b93505b60405163db006a7560e01b81526001600160a01b0382169063db006a7590611eba908790600401613fcf565b600060405180830381600087803b158015611ed457600080fd5b505af1158015611ee8573d6000803e3d6000fd5b50959998505050505050505050565b801561164357600080611f0c83866000612eac565b915091506000611f1a611b53565b6001600160a01b0316856001600160a01b0316149050600081611f3d5785611f45565b611f45611b3b565b9050611f518185612fae565b611f5c82878561316d565b60405163095ea7b360e01b81526001600160a01b0387169063095ea7b390611f8a908c908790600401613c68565b600060405180830381600087803b158015611fa457600080fd5b505af1158015611fb8573d6000803e3d6000fd5b50505050886001600160a01b031663e8eda9df878530611fd6612ee3565b6040518563ffffffff1660e01b8152600401611ff59493929190613ca4565b600060405180830381600087803b15801561200f57600080fd5b505af1158015612023573d6000803e3d6000fd5b5050505061203188876131cc565b61209757604051635a3b74b960e01b81526001600160a01b038a1690635a3b74b990612064908990600190600401613c4d565b600060405180830381600087803b15801561207e57600080fd5b505af1158015612092573d6000803e3d6000fd5b505050505b505050505050505050565b733d9819210a31b4961b30ef54be2aed79b9c9cd3b90565b600083156121ca5760006120cc611b53565b6001600160a01b0316866001600160a01b0316146120ea57856120f2565b6120f2611b3b565b905060001985141561210d5761210a84878986612d32565b94505b60008061211c878b6001612eac565b60405163317afabb60e21b815291935091506001600160a01b038a169063c5ebeaec9061214d908490600401613fcf565b602060405180830381600087803b15801561216757600080fd5b505af115801561217b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061219f9190613b0c565b156121bc5760405162461bcd60e51b815260040161017b90613eb2565b6121c68383612fae565b5050505b509195945050505050565b801561239f5760006121e5611b53565b6001600160a01b0316836001600160a01b031614612203578261220b565b61220b611b3b565b905060008061221c84886000612eac565b91509150612228611b3b565b6001600160a01b0316836001600160a01b0316146123405760405163095ea7b360e01b81526001600160a01b0386169063095ea7b39061226e9089908590600401613c68565b600060405180830381600087803b15801561228857600080fd5b505af115801561229c573d6000803e3d6000fd5b505060405163140e25ad60e31b81526001600160a01b038916925063a0712d6891506122cc908490600401613fcf565b602060405180830381600087803b1580156122e657600080fd5b505af11580156122fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061231e9190613b0c565b1561233b5760405162461bcd60e51b815260040161017b90613fa7565b612395565b856001600160a01b0316631249c58b826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561237b57600080fd5b505af115801561238f573d6000803e3d6000fd5b50505050505b61151b8383612fae565b50505050565b600083156124845760006123b7611b53565b6001600160a01b0316876001600160a01b0316146123d557866123dd565b6123dd611b3b565b90506000198514156123f8576123f588888886612d32565b94505b600080612407878c6001612eac565b915091508b6001600160a01b031663c858f5f9848389612425612ee3565b6040518563ffffffff1660e01b81526004016124449493929190613d21565b600060405180830381600087803b15801561245e57600080fd5b505af1158015612472573d6000803e3d6000fd5b505050506124808383612fae565b5050505b5091979650505050505050565b600082156114cc5760006124a3611b53565b6001600160a01b0316856001600160a01b031614905060001984146124c857836124d3565b6124d386868561325d565b91506124e081868461316d565b60405163095ea7b360e01b81526001600160a01b0386169063095ea7b39061250e908a908690600401613c68565b600060405180830381600087803b15801561252857600080fd5b505af115801561253c573d6000803e3d6000fd5b505060405163573ade8160e01b81526001600160a01b038a16925063573ade819150612572908890869088903090600401613cf6565b600060405180830381600087803b15801561258c57600080fd5b505af11580156125a0573d6000803e3d6000fd5b505050505095945050505050565b60008115611b335760006125c0611b53565b6001600160a01b0316846001600160a01b0316149050856001600160a01b03166369328dec8585306040518463ffffffff1660e01b815260040161260693929190613c81565b600060405180830381600087803b15801561262057600080fd5b505af1158015612634573d6000803e3d6000fd5b5050505060001983146126475782612651565b6126518585613388565b915061265e818584612ee9565b50949350505050565b801561164357600080600061267e84876000612eac565b91509150600061268c611b53565b6001600160a01b0316866001600160a01b03161490506000816126af57866126b7565b6126b7611b3b565b905081156126c757829450612728565b60405163095ea7b360e01b81526001600160a01b0388169063095ea7b3906126f5908c908790600401613c68565b600060405180830381600087803b15801561270f57600080fd5b505af1158015612723573d6000803e3d6000fd5b505050505b6127328185612fae565b896001600160a01b031663d2d0e06686838661274c612ee3565b6040518563ffffffff1660e01b815260040161276a93929190613cd1565b6000604051808303818588803b15801561278357600080fd5b505af1158015612797573d6000803e3d6000fd5b50505050506127a68a8261341a565b61101657604051635a3b74b960e01b81526001600160a01b038b1690635a3b74b9906127d9908490600190600401613c4d565b600060405180830381600087803b1580156127f357600080fd5b505af1158015612807573d6000803e3d6000fd5b5050505050505050505050505050565b60008115612a1f576000198214156128aa576040516305eff7ef60e21b81526001600160a01b038516906317bfdfbc90612855903090600401613c1f565b602060405180830381600087803b15801561286f57600080fd5b505af1158015612883573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128a79190613b0c565b91505b6128b2611b53565b6001600160a01b0316836001600160a01b0316146129ca5760405163095ea7b360e01b81526001600160a01b0384169063095ea7b3906128f89087908690600401613c68565b600060405180830381600087803b15801561291257600080fd5b505af1158015612926573d6000803e3d6000fd5b505060405163073a938160e11b81526001600160a01b0387169250630e7527029150612956908590600401613fcf565b602060405180830381600087803b15801561297057600080fd5b505af1158015612984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129a89190613b0c565b156129c55760405162461bcd60e51b815260040161017b90613f57565b612a1f565b836001600160a01b0316634e4d9fea836040518263ffffffff1660e01b81526004016000604051808303818588803b158015612a0557600080fd5b505af1158015612a19573d6000803e3d6000fd5b50505050505b50805b9392505050565b60008115612a1f57600019821415612c97576000612a45611b53565b6001600160a01b0316846001600160a01b0316149050600081612ae3576040516370a0823160e01b81526001600160a01b038616906370a0823190612a8e903090600401613c1f565b60206040518083038186803b158015612aa657600080fd5b505afa158015612aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ade9190613b0c565b612ae5565b475b6040516370a0823160e01b81529091506001600160a01b0387169063db006a759082906370a0823190612b1c903090600401613c1f565b60206040518083038186803b158015612b3457600080fd5b505afa158015612b48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b6c9190613b0c565b6040518263ffffffff1660e01b8152600401612b889190613fcf565b602060405180830381600087803b158015612ba257600080fd5b505af1158015612bb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bda9190613b0c565b15612bf75760405162461bcd60e51b815260040161017b90613e89565b600082612c7f576040516370a0823160e01b81526001600160a01b038716906370a0823190612c2a903090600401613c1f565b60206040518083038186803b158015612c4257600080fd5b505afa158015612c56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c7a9190613b0c565b612c81565b475b9050612c8d81836134ac565b9450505050612a1f565b60405163852a12e360e01b81526001600160a01b0385169063852a12e390612cc3908590600401613fcf565b602060405180830381600087803b158015612cdd57600080fd5b505af1158015612cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d159190613b0c565b15612a1f5760405162461bcd60e51b815260040161017b90613e89565b600080612d3d611042565b6001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d7557600080fd5b505afa158015612d89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dad91906139d5565b90506000612db961105a565b90506000876002811115612dc957fe5b1415612de757600080612ddc8489613044565b019450612ea2915050565b6001876002811115612df557fe5b1415612e0d57612e0681878661325d565b9250612ea2565b6002876002811115612e1b57fe5b1415612ea2576040516305eff7ef60e21b81526001600160a01b038616906317bfdfbc90612e4d903090600401613c1f565b602060405180830381600087803b158015612e6757600080fd5b505af1158015612e7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e9f9190613b0c565b92505b5050949350505050565b600080612eb985856134cf565b915082612ecf57612eca85836134ac565b612ed9565b612ed98583613504565b9050935093915050565b610c9c90565b8215612fa95760405163095ea7b360e01b81526001600160a01b0383169063095ea7b390612f1d9085908590600401613c68565b600060405180830381600087803b158015612f3757600080fd5b505af1158015612f4b573d6000803e3d6000fd5b5050604051632e1a7d4d60e01b81526001600160a01b0385169250632e1a7d4d9150612f7b908490600401613fcf565b600060405180830381600087803b158015612f9557600080fd5b505af115801561151b573d6000803e3d6000fd5b505050565b801561190557612fbc611b3b565b6001600160a01b0316826001600160a01b0316141561301c5760405173b1dc62ec38e6e3857a887210c38418e4a17da5b29082156108fc029083906000818181858888f19350505050158015613016573d6000803e3d6000fd5b50611905565b6119056001600160a01b03831673b1dc62ec38e6e3857a887210c38418e4a17da5b283613527565b600080836001600160a01b03166328dd2d0184306040518363ffffffff1660e01b8152600401613075929190613c33565b6101406040518083038186803b15801561308e57600080fd5b505afa1580156130a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130c69190613b24565b50969c919b50909950505050505050505050565b6040516328dd2d0160e01b81526000906001600160a01b038416906328dd2d019061310b9085903090600401613c33565b6101406040518083038186803b15801561312457600080fd5b505afa158015613138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061315c9190613b24565b50979b9a5050505050505050505050565b8215612fa957816001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156131ae57600080fd5b505af11580156131c2573d6000803e3d6000fd5b5050505050505050565b6040516328dd2d0160e01b81526000906001600160a01b038416906328dd2d01906131fd9085903090600401613c33565b6101206040518083038186803b15801561321657600080fd5b505afa15801561322a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061324e9190613b9e565b9b9a5050505050505050505050565b600081600114156132f8576040516328dd2d0160e01b81526001600160a01b038516906328dd2d01906132969086903090600401613c33565b6101206040518083038186803b1580156132af57600080fd5b505afa1580156132c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132e79190613b9e565b50959750612a229650505050505050565b6040516328dd2d0160e01b81526001600160a01b038516906328dd2d01906133269086903090600401613c33565b6101206040518083038186803b15801561333f57600080fd5b505afa158015613353573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133779190613b9e565b50949b9a5050505050505050505050565b6040516328dd2d0160e01b81526000906001600160a01b038416906328dd2d01906133b99085903090600401613c33565b6101206040518083038186803b1580156133d257600080fd5b505afa1580156133e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061340a9190613b9e565b50969a9950505050505050505050565b6040516328dd2d0160e01b81526000906001600160a01b038416906328dd2d019061344b9085903090600401613c33565b6101406040518083038186803b15801561346457600080fd5b505afa158015613478573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061349c9190613b24565b9c9b505050505050505050505050565b8082038281111561117e5760405162461bcd60e51b815260040161017b90613e63565b6000670de0b6b3a76400006134f56134e78585613579565b6706f05b59d3b20000613504565b816134fc57fe5b049392505050565b8082018281101561117e5760405162461bcd60e51b815260040161017b90613e3c565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612fa99084906135b0565b60008115806135945750508082028282828161359157fe5b04145b61117e5760405162461bcd60e51b815260040161017b90613e3c565b6000613605826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166136619092919063ffffffff16565b805190915015612fa95780806020019051602081101561362457600080fd5b5051612fa95760405162461bcd60e51b815260040180806020018281038252602a815260200180614127602a913960400191505060405180910390fd5b6060611b338484600085856136758561377b565b6136c6576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106137045780518252601f1990920191602091820191016136e5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613766576040519150601f19603f3d011682016040523d82523d6000602084013e61376b565b606091505b5091509150612e9f828286613781565b3b151590565b60608315613790575081612a22565b8251156137a05782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156137ea5781810151838201526020016137d2565b50505050905090810190601f1680156138175780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051610100810182526000808252602082018190529181018290529060608201905b8152602001606081526020016060815260200160608152602001606081525090565b6040518060e0016040528060008152602001600081526020016000600281111561384957fe5b6040805161012081018252600080825260208201819052918101829052906060820190815260200160608152602001606081526020016060815260200160608152602001606081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016060815260200160608152602001606081525090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160608152602001606081525090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160608152602001606081525090565b80516001600160a01b03811681146113d257600080fd5b805180151581146113d257600080fd5b6000602082840312156139e6578081fd5b612a22826139ae565b60008060408385031215613a01578081fd5b613a0a836139ae565b9150613a18602084016139ae565b90509250929050565b60006020808385031215613a33578182fd5b82516001600160401b03811115613a48578283fd5b8301601f81018513613a58578283fd5b8051613a6b613a668261406c565b614049565b8181528381019083850185840285018601891015613a87578687fd5b8694505b83851015613aa9578051835260019490940193918501918501613a8b565b50979650505050505050565b600060208284031215613ac6578081fd5b813560038110612a22578182fd5b600060208284031215613ae5578081fd5b81356001600160401b03811115613afa578182fd5b82016101408185031215612a22578182fd5b600060208284031215613b1d578081fd5b5051919050565b6000806000806000806000806000806101408b8d031215613b43578586fd5b8a51995060208b0151985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b0151935060e08b015192506101008b01519150613b8d6101208c016139c5565b90509295989b9194979a5092959850565b60008060008060008060008060006101208a8c031215613bbc578485fd5b8951985060208a0151975060408a0151965060608a0151955060808a0151945060a08a0151935060c08a0151925060e08a015164ffffffffff81168114613c01578283fd5b9150613c106101008b016139c5565b90509295985092959850929598565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093529216604082015261ffff909116606082015260800190565b6001600160a01b03939093168352602083019190915261ffff16604082015260600190565b6001600160a01b03948516815260208101939093526040830191909152909116606082015260800190565b6001600160a01b039490941684526020840192909252604083015261ffff16606082015260800190565b6001600160a01b0395861681526020810194909452604084019290925261ffff166060830152909116608082015260a00190565b6020808252825182820181905260009190848201906040850190845b81811015611c755783516001600160a01b031683529284019291840191600101613d9b565b6000602080835283518082850152825b81811015613dec57858101830151858201604001528201613dd0565b81811115613dfd5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252600f908201526e696e76616c69642d6f7074696f6e7360881b604082015260600190565b6020808252600d908201526c6d6174682d6e6f742d7361666560981b604082015260600190565b6020808252600c908201526b7375622d6f766572666c6f7760a01b604082015260600190565b6020808252600f908201526e1dda5d1a191c985dcb59985a5b1959608a1b604082015260600190565b60208082526019908201527f626f72726f772d6661696c65642d636f6c6c61746572616c3f00000000000000604082015260600190565b6020808252601c908201527f696e76616c696420746f6b656e2f63746f6b656e206164647265737300000000604082015260600190565b60208082526019908201527f736f757263652d616e642d7461726765742d756e657175616c00000000000000604082015260600190565b6020808252600d908201526c3932b830bc96b330b4b632b21760991b604082015260600190565b6020808252600f908201526e0d8cadccee8d05adad2e6dac2e8c6d608b1b604082015260600190565b6020808252600e908201526d19195c1bdcda5d0b59985a5b195960921b604082015260600190565b90815260200190565b918252602082015260400190565b6000808335601e19843603018112613ffc578283fd5b8301803591506001600160401b03821115614015578283fd5b602090810192508102360382131561402c57600080fd5b9250929050565b6000808335601e19843603018112613ffc578182fd5b6040518181016001600160401b038111828210171561406457fe5b604052919050565b60006001600160401b0382111561407f57fe5b5060209081020190565b6000614097613a668461406c565b8381526020808201919084845b8781101561411a5781358701601f36818301126140bf578788fd5b81356001600160401b038111156140d257fe5b6140e3818301601f19168701614049565b915080825236868285010111156140f8578889fd5b80868401878401378101850188905286525093820193908201906001016140a4565b5091969550505050505056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220d6314804a0bde782db2dba7a102fc0a6fbe9a8e4850041db10e3fcc6265048cf64736f6c63430007060033";

type ConnectRefinanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectRefinanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectRefinance__factory extends ContractFactory {
  constructor(...args: ConnectRefinanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectRefinance> {
    return super.deploy(overrides || {}) as Promise<ConnectRefinance>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectRefinance {
    return super.attach(address) as ConnectRefinance;
  }
  connect(signer: Signer): ConnectRefinance__factory {
    return super.connect(signer) as ConnectRefinance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectRefinanceInterface {
    return new utils.Interface(_abi) as ConnectRefinanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectRefinance {
    return new Contract(address, _abi, signerOrProvider) as ConnectRefinance;
  }
}
