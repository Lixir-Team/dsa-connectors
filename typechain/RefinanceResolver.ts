/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type RefinanceDataStruct = {
  source: BigNumberish;
  target: BigNumberish;
  collateralFee: BigNumberish;
  debtFee: BigNumberish;
  tokens: string[];
  ctokenIds: string[];
  borrowAmts: BigNumberish[];
  withdrawAmts: BigNumberish[];
  borrowRateModes: BigNumberish[];
  paybackRateModes: BigNumberish[];
};

export type RefinanceDataStructOutput = [
  number,
  number,
  BigNumber,
  BigNumber,
  string[],
  string[],
  BigNumber[],
  BigNumber[],
  BigNumber[],
  BigNumber[]
] & {
  source: number;
  target: number;
  collateralFee: BigNumber;
  debtFee: BigNumber;
  tokens: string[];
  ctokenIds: string[];
  borrowAmts: BigNumber[];
  withdrawAmts: BigNumber[];
  borrowRateModes: BigNumber[];
  paybackRateModes: BigNumber[];
};

export interface RefinanceResolverInterface extends utils.Interface {
  functions: {
    "refinance((uint8,uint8,uint256,uint256,address[],string[],uint256[],uint256[],uint256[],uint256[]))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "refinance",
    values: [RefinanceDataStruct]
  ): string;

  decodeFunctionResult(functionFragment: "refinance", data: BytesLike): Result;

  events: {};
}

export interface RefinanceResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RefinanceResolverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    refinance(
      data: RefinanceDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  refinance(
    data: RefinanceDataStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    refinance(
      data: RefinanceDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    refinance(
      data: RefinanceDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    refinance(
      data: RefinanceDataStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
