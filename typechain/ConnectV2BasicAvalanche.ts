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

export interface ConnectV2BasicAvalancheInterface extends utils.Interface {
  functions: {
    "deposit(address,uint256,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "withdraw(address,uint256,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "LogDeposit(address,uint256,uint256,uint256)": EventFragment;
    "LogWithdraw(address,uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}

export type LogDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { erc20: string; tokenAmt: BigNumber; getId: BigNumber; setId: BigNumber }
>;

export type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;

export type LogWithdrawEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, BigNumber],
  {
    erc20: string;
    tokenAmt: BigNumber;
    to: string;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;

export interface ConnectV2BasicAvalanche extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectV2BasicAvalancheInterface;

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
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      token: string,
      amt: BigNumberish,
      to: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    token: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  withdraw(
    token: string,
    amt: BigNumberish,
    to: string,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    name(overrides?: CallOverrides): Promise<string>;

    withdraw(
      token: string,
      amt: BigNumberish,
      to: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;
  };

  filters: {
    "LogDeposit(address,uint256,uint256,uint256)"(
      erc20?: string | null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;
    LogDeposit(
      erc20?: string | null,
      tokenAmt?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;

    "LogWithdraw(address,uint256,address,uint256,uint256)"(
      erc20?: string | null,
      tokenAmt?: null,
      to?: string | null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
    LogWithdraw(
      erc20?: string | null,
      tokenAmt?: null,
      to?: string | null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
  };

  estimateGas: {
    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token: string,
      amt: BigNumberish,
      to: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      token: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amt: BigNumberish,
      to: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
