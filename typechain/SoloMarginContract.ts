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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type InfoStruct = { owner: string; number: BigNumberish };

export type InfoStructOutput = [string, BigNumber] & {
  owner: string;
  number: BigNumber;
};

export type WeiStruct = { sign: boolean; value: BigNumberish };

export type WeiStructOutput = [boolean, BigNumber] & {
  sign: boolean;
  value: BigNumber;
};

export type AssetAmountStruct = {
  sign: boolean;
  denomination: BigNumberish;
  ref: BigNumberish;
  value: BigNumberish;
};

export type AssetAmountStructOutput = [boolean, number, number, BigNumber] & {
  sign: boolean;
  denomination: number;
  ref: number;
  value: BigNumber;
};

export type ActionArgsStruct = {
  actionType: BigNumberish;
  accountId: BigNumberish;
  amount: AssetAmountStruct;
  primaryMarketId: BigNumberish;
  secondaryMarketId: BigNumberish;
  otherAddress: string;
  otherAccountId: BigNumberish;
  data: BytesLike;
};

export type ActionArgsStructOutput = [
  number,
  BigNumber,
  AssetAmountStructOutput,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  string
] & {
  actionType: number;
  accountId: BigNumber;
  amount: AssetAmountStructOutput;
  primaryMarketId: BigNumber;
  secondaryMarketId: BigNumber;
  otherAddress: string;
  otherAccountId: BigNumber;
  data: string;
};

export interface SoloMarginContractInterface extends utils.Interface {
  functions: {
    "getAccountWei((address,uint256),uint256)": FunctionFragment;
    "getMarketTokenAddress(uint256)": FunctionFragment;
    "getNumMarkets()": FunctionFragment;
    "operate((address,uint256)[],(uint8,uint256,(bool,uint8,uint8,uint256),uint256,uint256,address,uint256,bytes)[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAccountWei",
    values: [InfoStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketTokenAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumMarkets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "operate",
    values: [InfoStruct[], ActionArgsStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAccountWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operate", data: BytesLike): Result;

  events: {};
}

export interface SoloMarginContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SoloMarginContractInterface;

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
    getAccountWei(
      account: InfoStruct,
      marketId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMarketTokenAddress(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNumMarkets(overrides?: CallOverrides): Promise<[BigNumber]>;

    operate(
      accounts: InfoStruct[],
      actions: ActionArgsStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAccountWei(
    account: InfoStruct,
    marketId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMarketTokenAddress(
    marketId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNumMarkets(overrides?: CallOverrides): Promise<BigNumber>;

  operate(
    accounts: InfoStruct[],
    actions: ActionArgsStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAccountWei(
      account: InfoStruct,
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<WeiStructOutput>;

    getMarketTokenAddress(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNumMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    operate(
      accounts: InfoStruct[],
      actions: ActionArgsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAccountWei(
      account: InfoStruct,
      marketId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMarketTokenAddress(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    operate(
      accounts: InfoStruct[],
      actions: ActionArgsStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAccountWei(
      account: InfoStruct,
      marketId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMarketTokenAddress(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operate(
      accounts: InfoStruct[],
      actions: ActionArgsStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
