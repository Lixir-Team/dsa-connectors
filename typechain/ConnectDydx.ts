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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ConnectDydxInterface extends utils.Interface {
  functions: {
    "borrow(address,uint256,uint256,uint256)": FunctionFragment;
    "deposit(address,uint256,uint256,uint256)": FunctionFragment;
    "getDydxAddress()": FunctionFragment;
    "getWETHAddr()": FunctionFragment;
    "name()": FunctionFragment;
    "payback(address,uint256,uint256,uint256)": FunctionFragment;
    "withdraw(address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrow",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDydxAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWETHAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payback",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDydxAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWETHAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payback", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "LogBorrow(address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogDeposit(address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogPayback(address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogWithdraw(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogBorrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogPayback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}

export type LogBorrowEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    marketId: BigNumber;
    tokenAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogBorrowEventFilter = TypedEventFilter<LogBorrowEvent>;

export type LogDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    marketId: BigNumber;
    tokenAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;

export type LogPaybackEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    marketId: BigNumber;
    tokenAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogPaybackEventFilter = TypedEventFilter<LogPaybackEvent>;

export type LogWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    marketId: BigNumber;
    tokenAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;

export interface ConnectDydx extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectDydxInterface;

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
    borrow(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDydxAddress(
      overrides?: CallOverrides
    ): Promise<[string] & { addr: string }>;

    getWETHAddr(
      overrides?: CallOverrides
    ): Promise<[string] & { weth: string }>;

    name(overrides?: CallOverrides): Promise<[string]>;

    payback(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  borrow(
    token: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    token: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDydxAddress(overrides?: CallOverrides): Promise<string>;

  getWETHAddr(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  payback(
    token: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    borrow(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getDydxAddress(overrides?: CallOverrides): Promise<string>;

    getWETHAddr(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    payback(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogBorrow(address,uint256,uint256,uint256,uint256)"(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogBorrowEventFilter;
    LogBorrow(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogBorrowEventFilter;

    "LogDeposit(address,uint256,uint256,uint256,uint256)"(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;
    LogDeposit(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;

    "LogPayback(address,uint256,uint256,uint256,uint256)"(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogPaybackEventFilter;
    LogPayback(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogPaybackEventFilter;

    "LogWithdraw(address,uint256,uint256,uint256,uint256)"(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
    LogWithdraw(
      token?: string | null,
      marketId?: null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
  };

  estimateGas: {
    borrow(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDydxAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getWETHAddr(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    payback(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrow(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDydxAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWETHAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payback(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
