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

export interface ConnectSwerveInterface extends utils.Interface {
  functions: {
    "deposit(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "sell(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "withdraw(address,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sell",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "LogDeposit(address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogSell(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogWithdraw(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSell"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}

export type LogDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    amt: BigNumber;
    mintAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;

export type LogSellEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    buyToken: string;
    sellToken: string;
    buyAmt: BigNumber;
    sellAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogSellEventFilter = TypedEventFilter<LogSellEvent>;

export type LogWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    amt: BigNumber;
    burnAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;

export interface ConnectSwerve extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectSwerveInterface;

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
    deposit(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    sell(
      buyAddr: string,
      sellAddr: string,
      sellAmt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    token: string,
    amt: BigNumberish,
    unitAmt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  sell(
    buyAddr: string,
    sellAddr: string,
    sellAmt: BigNumberish,
    unitAmt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    amt: BigNumberish,
    unitAmt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    sell(
      buyAddr: string,
      sellAddr: string,
      sellAmt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogDeposit(address,uint256,uint256,uint256,uint256)"(
      token?: null,
      amt?: null,
      mintAmt?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;
    LogDeposit(
      token?: null,
      amt?: null,
      mintAmt?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;

    "LogSell(address,address,uint256,uint256,uint256,uint256)"(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellEventFilter;
    LogSell(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellEventFilter;

    "LogWithdraw(address,uint256,uint256,uint256,uint256)"(
      token?: null,
      amt?: null,
      burnAmt?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
    LogWithdraw(
      token?: null,
      amt?: null,
      burnAmt?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
  };

  estimateGas: {
    deposit(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    sell(
      buyAddr: string,
      sellAddr: string,
      sellAmt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sell(
      buyAddr: string,
      sellAddr: string,
      sellAmt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amt: BigNumberish,
      unitAmt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
