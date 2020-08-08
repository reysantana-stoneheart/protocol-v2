/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { LendingPoolConfigurator } from "./LendingPoolConfigurator";

export class LendingPoolConfiguratorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<LendingPoolConfigurator> {
    return super.deploy(overrides) as Promise<LendingPoolConfigurator>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): LendingPoolConfigurator {
    return super.attach(address) as LendingPoolConfigurator;
  }
  connect(signer: Signer): LendingPoolConfiguratorFactory {
    return super.connect(signer) as LendingPoolConfiguratorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolConfigurator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolConfigurator;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "BorrowingDisabledOnReserve",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_stableRateEnabled",
        type: "bool"
      }
    ],
    name: "BorrowingEnabledOnReserve",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "ReserveActivated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_ltv",
        type: "uint256"
      }
    ],
    name: "ReserveBaseLtvChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "ReserveDeactivated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_decimals",
        type: "uint256"
      }
    ],
    name: "ReserveDecimalsChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "ReserveDisabledAsCollateral",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_ltv",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_liquidationThreshold",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_liquidationBonus",
        type: "uint256"
      }
    ],
    name: "ReserveEnabledAsCollateral",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "ReserveFreezed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_aToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_interestRateStrategyAddress",
        type: "address"
      }
    ],
    name: "ReserveInitialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address"
      }
    ],
    name: "ReserveInterestRateStrategyChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bonus",
        type: "uint256"
      }
    ],
    name: "ReserveLiquidationBonusChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_threshold",
        type: "uint256"
      }
    ],
    name: "ReserveLiquidationThresholdChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "ReserveUnfreezed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "StableRateDisabledOnReserve",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "StableRateEnabledOnReserve",
    type: "event"
  },
  {
    inputs: [],
    name: "CONFIGURATOR_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "activateReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "deactivateReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "disableBorrowingOnReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "disableReserveAsCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "disableReserveStableRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_stableBorrowRateEnabled",
        type: "bool"
      }
    ],
    name: "enableBorrowingOnReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_baseLTVasCollateral",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_liquidationThreshold",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_liquidationBonus",
        type: "uint256"
      }
    ],
    name: "enableReserveAsCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "enableReserveStableRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "freezeReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "address",
        name: "_aTokenInstance",
        type: "address"
      },
      {
        internalType: "address",
        name: "_stableDebtTokenAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_variableDebtTokenAddress",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_underlyingAssetDecimals",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_interestRateStrategyAddress",
        type: "address"
      }
    ],
    name: "initReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "_poolAddressesProvider",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract LendingPool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolAddressesProvider",
    outputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_bonus",
        type: "uint256"
      }
    ],
    name: "setLiquidationBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256"
      }
    ],
    name: "setLiquidationThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_ltv",
        type: "uint256"
      }
    ],
    name: "setLtv",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_decimals",
        type: "uint256"
      }
    ],
    name: "setReserveDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rateStrategyAddress",
        type: "address"
      }
    ],
    name: "setReserveInterestRateStrategyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      }
    ],
    name: "unfreezeReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b5061351d806100246000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806380e17d87116100ad578063c4d66de811610071578063c4d66de814610252578063e8ae2f5b14610265578063eede87c114610278578063ef1f93731461028b578063f53a25151461029e5761012c565b806380e17d87146101fe578063a5bc826c14610206578063a8dc0f4514610219578063b75d6f341461022c578063bf3441831461023f5761012c565b80636fd435ac116100f45780636fd435ac1461019d57806372f46aaa146101b05780637aca76eb146101c35780637af635a6146101d65780637cadffd9146101eb5761012c565b80630e30428d1461013157806316f0115b146101465780631d2118f9146101645780633e72a4541461017757806366bbd9281461018a575b600080fd5b61014461013f3660046126d3565b6102b1565b005b61014e610499565b60405161015b919061289c565b60405180910390f35b6101446101723660046125e4565b6104a8565b6101446101853660046125a5565b6105eb565b6101446101983660046126d3565b61088f565b6101446101ab36600461261c565b610a61565b6101446101be3660046126d3565b610ea0565b6101446101d13660046125a5565b611072565b6101de61124c565b60405161015b9190612a46565b6101446101f93660046126d3565b611251565b61014e611423565b6101446102143660046126fe565b611432565b6101446102273660046125a5565b61163f565b61014461023a3660046125a5565b611819565b61014461024d3660046125a5565b6119f3565b6101446102603660046125a5565b611bcd565b6101446102733660046125a5565b611cff565b6101446102863660046126a2565b611ed9565b6101446102993660046125a5565b6120bc565b6101446102ac3660046125a5565b612296565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b1580156102f557600080fd5b505afa158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d91906125c8565b6001600160a01b03161461035c5760405162461bcd60e51b815260040161035390612965565b60405180910390fd5b610364612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061039490869060040161289c565b60206040518083038186803b1580156103ac57600080fd5b505afa1580156103c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e491906127c4565b90506103f6818363ffffffff61247016565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916104299187919060040161294c565b600060405180830381600087803b15801561044357600080fd5b505af1158015610457573d6000803e3d6000fd5b505050507f437dd3b61b7c7eee7fc70515c8846482dfca92e2e1e02af5d638c5d4878d6714838360405161048c92919061294c565b60405180910390a1505050565b6035546001600160a01b031681565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b1580156104ec57600080fd5b505afa158015610500573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052491906125c8565b6001600160a01b03161461054a5760405162461bcd60e51b815260040161035390612965565b603554604051631d2118f960e01b81526001600160a01b0390911690631d2118f99061057c90859085906004016128b0565b600060405180830381600087803b15801561059657600080fd5b505af11580156105aa573d6000803e3d6000fd5b505050507f5644b64ebb0ce18c4032248ca52f58355469092ff072866c3dcd8640e817d6a582826040516105df9291906128b0565b60405180910390a15050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b15801561062f57600080fd5b505afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066791906125c8565b6001600160a01b03161461068d5760405162461bcd60e51b815260040161035390612965565b6035546040516335ea6a7560e01b8152600091829182916001600160a01b0316906335ea6a75906106c290879060040161289c565b6101406040518083038186803b1580156106db57600080fd5b505afa1580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071391906127e9565b5050505050505092509250925082600014801561072e575081155b8015610738575080155b6107545760405162461bcd60e51b8152600401610353906129fc565b61075c612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061078c90889060040161289c565b60206040518083038186803b1580156107a457600080fd5b505afa1580156107b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dc91906127c4565b90506107ef81600063ffffffff61248716565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916108229189919060040161294c565b600060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b50506040516001600160a01b03881692507f6f60cf8bd0f218cabe1ea3150bd07b0b758c35c4cfdf7138017a283e65564d5e9150600090a25050505050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b1580156108d357600080fd5b505afa1580156108e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090b91906125c8565b6001600160a01b0316146109315760405162461bcd60e51b815260040161035390612965565b610939612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061096990869060040161289c565b60206040518083038186803b15801561098157600080fd5b505afa158015610995573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b991906127c4565b90506109cb818363ffffffff6124b416565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916109fe9187919060040161294c565b600060405180830381600087803b158015610a1857600080fd5b505af1158015610a2c573d6000803e3d6000fd5b505050507f2e73b7f1df792712003e6859f940c1e8711c3f1329474771fee71d2ec1163129838360405161048c92919061294c565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b158015610aa557600080fd5b505afa158015610ab9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610add91906125c8565b6001600160a01b031614610b035760405162461bcd60e51b815260040161035390612965565b6000604051610b1190612598565b604051809103906000f080158015610b2d573d6000803e3d6000fd5b509050606083876001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015610b6c57600080fd5b505afa158015610b80573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ba89190810190612738565b886001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610be157600080fd5b505afa158015610bf5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c1d9190810190612738565b604051602401610c2f93929190612a65565b60408051601f198184030181529181526020820180516001600160e01b031663188c392760e11b1790525163cf7a1d7760e01b81529091506001600160a01b0383169063cf7a1d7790610c8a908a90309086906004016128fc565b600060405180830381600087803b158015610ca457600080fd5b505af1158015610cb8573d6000803e3d6000fd5b5050603554604051633d38474960e11b81526001600160a01b039091169250637a708e929150610cf4908b9086908b908b908a906004016128ca565b600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b50505050610d2e612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f790610d5e908c9060040161289c565b60206040518083038186803b158015610d7657600080fd5b505afa158015610d8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dae91906127c4565b9050610dc38160ff871663ffffffff6124b416565b610dd481600163ffffffff61248716565b610de581600063ffffffff6124cb16565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d2927691610e18918d919060040161294c565b600060405180830381600087803b158015610e3257600080fd5b505af1158015610e46573d6000803e3d6000fd5b50505050826001600160a01b0316896001600160a01b03167f1d9fcd0dc935b4778d5af97f55c4d7b2553257382f1ef25c412114c8eeebd88e86604051610e8d919061289c565b60405180910390a3505050505050505050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b158015610ee457600080fd5b505afa158015610ef8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1c91906125c8565b6001600160a01b031614610f425760405162461bcd60e51b815260040161035390612965565b610f4a612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f790610f7a90869060040161289c565b60206040518083038186803b158015610f9257600080fd5b505afa158015610fa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fca91906127c4565b9050610fdc818363ffffffff6124f816565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d292769161100f9187919060040161294c565b600060405180830381600087803b15801561102957600080fd5b505af115801561103d573d6000803e3d6000fd5b505050507fda47540c7f7fd5a68c3285f3bb708f322424f948f41df6f51622fa24b3968664838360405161048c92919061294c565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b1580156110b657600080fd5b505afa1580156110ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ee91906125c8565b6001600160a01b0316146111145760405162461bcd60e51b815260040161035390612965565b61111c612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061114c90859060040161289c565b60206040518083038186803b15801561116457600080fd5b505afa158015611178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119c91906127c4565b90506111af81600163ffffffff6124cb16565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916111e29186919060040161294c565b600060405180830381600087803b1580156111fc57600080fd5b505af1158015611210573d6000803e3d6000fd5b50506040516001600160a01b03851692507fda5cdb66c77023db6abe5226a4d4a40c3b8e768012f4ff4e446f62f60127fc569150600090a25050565b600381565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b15801561129557600080fd5b505afa1580156112a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cd91906125c8565b6001600160a01b0316146112f35760405162461bcd60e51b815260040161035390612965565b6112fb612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061132b90869060040161289c565b60206040518083038186803b15801561134357600080fd5b505afa158015611357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137b91906127c4565b905061138d818363ffffffff61250916565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916113c09187919060040161294c565b600060405180830381600087803b1580156113da57600080fd5b505af11580156113ee573d6000803e3d6000fd5b505050507fe3ba662f7011e701056a43e8cf832242322eeff01453e7a72d01ec2af36d9aec838360405161048c92919061294c565b6034546001600160a01b031681565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b15801561147657600080fd5b505afa15801561148a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ae91906125c8565b6001600160a01b0316146114d45760405162461bcd60e51b815260040161035390612965565b6114dc612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061150c90889060040161289c565b60206040518083038186803b15801561152457600080fd5b505afa158015611538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155c91906127c4565b905061156e818563ffffffff6124f816565b61157e818463ffffffff61247016565b61158e818363ffffffff61250916565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916115c19189919060040161294c565b600060405180830381600087803b1580156115db57600080fd5b505af11580156115ef573d6000803e3d6000fd5b50505050846001600160a01b03167fdfe62f53e7707d64f99bca15d2bdf3facc4074bc047e7dec2ea130300e99274485858560405161163093929190612a4f565b60405180910390a25050505050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b15801561168357600080fd5b505afa158015611697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bb91906125c8565b6001600160a01b0316146116e15760405162461bcd60e51b815260040161035390612965565b6116e9612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061171990859060040161289c565b60206040518083038186803b15801561173157600080fd5b505afa158015611745573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176991906127c4565b905061177c81600063ffffffff61252016565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916117af9186919060040161294c565b600060405180830381600087803b1580156117c957600080fd5b505af11580156117dd573d6000803e3d6000fd5b50506040516001600160a01b03851692507fe9a7e5fd4fc8ea18e602350324bf48e8f05d12434af0ce0be05743e6a5fdcb9e9150600090a25050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b15801561185d57600080fd5b505afa158015611871573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189591906125c8565b6001600160a01b0316146118bb5760405162461bcd60e51b815260040161035390612965565b6118c3612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f7906118f390859060040161289c565b60206040518083038186803b15801561190b57600080fd5b505afa15801561191f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194391906127c4565b905061195681600163ffffffff61248716565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916119899186919060040161294c565b600060405180830381600087803b1580156119a357600080fd5b505af11580156119b7573d6000803e3d6000fd5b50506040516001600160a01b03851692507f35b80cd8ea3440e9a8454f116fa658b858da1b64c86c48451f4559cefcdfb56c9150600090a25050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b158015611a3757600080fd5b505afa158015611a4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6f91906125c8565b6001600160a01b031614611a955760405162461bcd60e51b815260040161035390612965565b611a9d612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f790611acd90859060040161289c565b60206040518083038186803b158015611ae557600080fd5b505afa158015611af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1d91906127c4565b9050611b3081600163ffffffff61254d16565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d2927691611b639186919060040161294c565b600060405180830381600087803b158015611b7d57600080fd5b505af1158015611b91573d6000803e3d6000fd5b50506040516001600160a01b03851692507f8dee2b2f3e98319ae6347eda521788f73f4086c9be9a594942b370b137fb8cb19150600090a25050565b6000611bd761257a565b60015490915060ff1680611bee5750611bee61257f565b80611bfa575060005481115b611c165760405162461bcd60e51b8152600401610353906129ae565b60015460ff16158015611c35576001805460ff19168117905560008290555b603480546001600160a01b0319166001600160a01b03858116919091179182905560408051630261bf8b60e01b815290519290911691630261bf8b91600480820192602092909190829003018186803b158015611c9157600080fd5b505afa158015611ca5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc991906125c8565b603580546001600160a01b0319166001600160a01b03929092169190911790558015611cfa576001805460ff191690555b505050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b158015611d4357600080fd5b505afa158015611d57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7b91906125c8565b6001600160a01b031614611da15760405162461bcd60e51b815260040161035390612965565b611da9612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f790611dd990859060040161289c565b60206040518083038186803b158015611df157600080fd5b505afa158015611e05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e2991906127c4565b9050611e3c81600063ffffffff6124f816565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d2927691611e6f9186919060040161294c565b600060405180830381600087803b158015611e8957600080fd5b505af1158015611e9d573d6000803e3d6000fd5b50506040516001600160a01b03851692507f9cc75e4cafc9a556a369bc53468649075680eb554d225d5918f199453824796d9150600090a25050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b158015611f1d57600080fd5b505afa158015611f31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f5591906125c8565b6001600160a01b031614611f7b5760405162461bcd60e51b815260040161035390612965565b611f83612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f790611fb390869060040161289c565b60206040518083038186803b158015611fcb57600080fd5b505afa158015611fdf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200391906127c4565b905061201681600163ffffffff61252016565b612026818363ffffffff61254d16565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916120599187919060040161294c565b600060405180830381600087803b15801561207357600080fd5b505af1158015612087573d6000803e3d6000fd5b505050507fab2f7f9e5ca2772fafa94f355c1842a80ae6b9e41f83083098d81f67d7a0b508838360405161048c929190612931565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b15801561210057600080fd5b505afa158015612114573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213891906125c8565b6001600160a01b03161461215e5760405162461bcd60e51b815260040161035390612965565b612166612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061219690859060040161289c565b60206040518083038186803b1580156121ae57600080fd5b505afa1580156121c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e691906127c4565b90506121f981600063ffffffff6124cb16565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d292769161222c9186919060040161294c565b600060405180830381600087803b15801561224657600080fd5b505af115801561225a573d6000803e3d6000fd5b50506040516001600160a01b03851692507f995959c2ceab6ce20e8cd89c904e449fd3e21918a0f420c9ec9340595585526b9150600090a25050565b603454604080516333128d5960e01b8152905133926001600160a01b0316916333128d59916004808301926020929190829003018186803b1580156122da57600080fd5b505afa1580156122ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061231291906125c8565b6001600160a01b0316146123385760405162461bcd60e51b815260040161035390612965565b612340612585565b60355460405163c44b11f760e01b81526001600160a01b039091169063c44b11f79061237090859060040161289c565b60206040518083038186803b15801561238857600080fd5b505afa15801561239c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123c091906127c4565b90506123d381600063ffffffff61254d16565b6035548151604051635c69493b60e11b81526001600160a01b039092169163b8d29276916124069186919060040161294c565b600060405180830381600087803b15801561242057600080fd5b505af1158015612434573d6000803e3d6000fd5b50506040516001600160a01b03851692507f8bbf35441ac2c607ddecadd3d8ee58636d32f217fad201fb2655581502dd84e39150600090a25050565b8151670fffffff0000ffff1660109190911b179052565b603881612495576000612498565b60015b8351670effffffffffffff1660ff9190911690911b1790915250565b8151670f00ffffffffffff1660309190911b179052565b6039816124d95760006124dc565b60015b8351670dffffffffffffff1660ff9190911690911b1790915250565b8151670fffffffffff000016179052565b8151670fff0000ffffffff1660209190911b179052565b603a8161252e576000612531565b60015b8351670bffffffffffffff1660ff9190911690911b1790915250565b603b8161255b57600061255e565b60015b83516707ffffffffffffff1660ff9190911690911b1790915250565b600390565b303b1590565b6040518060200160405280600081525090565b6109db80612b0d83390190565b6000602082840312156125b6578081fd5b81356125c181612af4565b9392505050565b6000602082840312156125d9578081fd5b81516125c181612af4565b600080604083850312156125f6578081fd5b823561260181612af4565b9150602083013561261181612af4565b809150509250929050565b60008060008060008060c08789031215612634578182fd5b863561263f81612af4565b9550602087013561264f81612af4565b9450604087013561265f81612af4565b9350606087013561266f81612af4565b9250608087013560ff81168114612684578283fd5b915060a087013561269481612af4565b809150509295509295509295565b600080604083850312156126b4578182fd5b82356126bf81612af4565b915060208301358015158114612611578182fd5b600080604083850312156126e5578182fd5b82356126f081612af4565b946020939093013593505050565b60008060008060808587031215612713578384fd5b843561271e81612af4565b966020860135965060408601359560600135945092505050565b600060208284031215612749578081fd5b815167ffffffffffffffff80821115612760578283fd5b81840185601f820112612771578384fd5b8051925081831115612781578384fd5b612794601f8401601f1916602001612a9d565b91508282528560208483010111156127aa578384fd5b6127bb836020840160208401612ac4565b50949350505050565b6000602082840312156127d5578081fd5b6127df6020612a9d565b9151825250919050565b6000806000806000806000806000806101408b8d031215612808578384fd5b8a51995060208b0151985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b0151935060e08b015192506101008b015191506101208b015164ffffffffff8116811461285d578182fd5b809150509295989b9194979a5092959850565b60008151808452612888816020860160208601612ac4565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0395861681529385166020850152918416604084015283166060830152909116608082015260a00190565b6001600160a01b0384811682528316602082015260606040820181905260009061292890830184612870565b95945050505050565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b60208082526029908201527f5468652063616c6c6572206d7573742062652061206c656e64696e6720706f6f604082015268361036b0b730b3b2b960b91b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602a908201527f546865206c6971756964697479206f66207468652072657365727665206e65656040820152690647320746f20626520360b41b606082015260800190565b90815260200190565b9283526020830191909152604082015260600190565b600060ff8516825260606020830152612a816060830185612870565b8281036040840152612a938185612870565b9695505050505050565b60405181810167ffffffffffffffff81118282101715612abc57600080fd5b604052919050565b60005b83811015612adf578181015183820152602001612ac7565b83811115612aee576000848401525b50505050565b6001600160a01b0381168114612b0957600080fd5b5056fe608060405234801561001057600080fd5b506109bb806100206000396000f3fe6080604052600436106100705760003560e01c80638f2839701161004e5780638f2839701461015e578063cf7a1d7714610191578063d1f5789414610250578063f851a4401461030657610070565b80633659cfe61461007a5780634f1ef286146100ad5780635c60da1b1461012d575b61007861031b565b005b34801561008657600080fd5b506100786004803603602081101561009d57600080fd5b50356001600160a01b0316610335565b610078600480360360408110156100c357600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100ee57600080fd5b82018360208201111561010057600080fd5b8035906020019184600183028401116401000000008311171561012257600080fd5b50909250905061036f565b34801561013957600080fd5b5061014261041c565b604080516001600160a01b039092168252519081900360200190f35b34801561016a57600080fd5b506100786004803603602081101561018157600080fd5b50356001600160a01b0316610459565b610078600480360360608110156101a757600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101db57600080fd5b8201836020820111156101ed57600080fd5b8035906020019184600183028401116401000000008311171561020f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610513945050505050565b6100786004803603604081101561026657600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561029157600080fd5b8201836020820111156102a357600080fd5b803590602001918460018302840111640100000000831117156102c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610599945050505050565b34801561031257600080fd5b506101426106d9565b610323610704565b61033361032e61070c565b610731565b565b61033d610755565b6001600160a01b0316336001600160a01b031614156103645761035f8161077a565b61036c565b61036c61031b565b50565b610377610755565b6001600160a01b0316336001600160a01b0316141561040f576103998361077a565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d80600081146103f6576040519150601f19603f3d011682016040523d82523d6000602084013e6103fb565b606091505b505090508061040957600080fd5b50610417565b61041761031b565b505050565b6000610426610755565b6001600160a01b0316336001600160a01b0316141561044e5761044761070c565b9050610456565b61045661031b565b90565b610461610755565b6001600160a01b0316336001600160a01b03161415610364576001600160a01b0381166104bf5760405162461bcd60e51b81526004018080602001828103825260368152602001806109156036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104e8610755565b604080516001600160a01b03928316815291841660208301528051918290030190a161035f816107ba565b600061051d61070c565b6001600160a01b03161461053057600080fd5b61053a8382610599565b604080517232b4b8189c9b1b97383937bc3c9730b236b4b760691b815290519081900360130190207fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036000199091011461059057fe5b610417826107ba565b60006105a361070c565b6001600160a01b0316146105b657600080fd5b604080517f656970313936372e70726f78792e696d706c656d656e746174696f6e000000008152905190819003601c0190207f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6000199091011461061657fe5b61061f826107de565b8051156106d5576000826001600160a01b0316826040518082805190602001908083835b602083106106625780518252601f199092019160209182019101610643565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146106c2576040519150601f19603f3d011682016040523d82523d6000602084013e6106c7565b606091505b505090508061041757600080fd5b5050565b60006106e3610755565b6001600160a01b0316336001600160a01b0316141561044e57610447610755565b610333610846565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015610750573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610783816107de565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6107e7816108a6565b6108225760405162461bcd60e51b815260040180806020018281038252603b81526020018061094b603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b61084e610755565b6001600160a01b0316336001600160a01b0316141561089e5760405162461bcd60e51b81526004018080602001828103825260328152602001806108e36032913960400191505060405180910390fd5b610333610333565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906108da57508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a26469706673582212205332daad1efa09e03cc1b95b9d51cadb3cf32e2d57907a628c0b4a5a20d8051f64736f6c63430006080033a2646970667358221220175beb956da19651610e3d1749256ae09a118f4ee4d7614bc6641626ac8a3ed464736f6c63430006080033";
