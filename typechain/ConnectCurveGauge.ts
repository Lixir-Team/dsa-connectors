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

export interface ConnectCurveGaugeInterface extends utils.Interface {
  functions: {
    "claimReward(string,uint256,uint256)": FunctionFragment;
    "deposit(string,uint256,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "withdraw(string,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimReward",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "LogClaimedReward(string,uint256,uint256,uint256,uint256)": EventFragment;
    "LogDeposit(string,uint256,uint256,uint256)": EventFragment;
    "LogWithdraw(string,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogClaimedReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}

export type LogClaimedRewardEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    gaugePoolName: string;
    amount: BigNumber;
    rewardAmt: BigNumber;
    setId: BigNumber;
    setIdReward: BigNumber;
  }
>;

export type LogClaimedRewardEventFilter =
  TypedEventFilter<LogClaimedRewardEvent>;

export type LogDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    gaugePoolName: string;
    amount: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;

export type LogWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    gaugePoolName: string;
    amount: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;

export interface ConnectCurveGauge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectCurveGaugeInterface;

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
    claimReward(
      gaugePoolName: string,
      setId: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      setIdCrv: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimReward(
    gaugePoolName: string,
    setId: BigNumberish,
    setIdReward: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    gaugePoolName: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  withdraw(
    gaugePoolName: string,
    amt: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    setIdCrv: BigNumberish,
    setIdReward: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimReward(
      gaugePoolName: string,
      setId: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    withdraw(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      setIdCrv: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogClaimedReward(string,uint256,uint256,uint256,uint256)"(
      gaugePoolName?: string | null,
      amount?: null,
      rewardAmt?: null,
      setId?: null,
      setIdReward?: null
    ): LogClaimedRewardEventFilter;
    LogClaimedReward(
      gaugePoolName?: string | null,
      amount?: null,
      rewardAmt?: null,
      setId?: null,
      setIdReward?: null
    ): LogClaimedRewardEventFilter;

    "LogDeposit(string,uint256,uint256,uint256)"(
      gaugePoolName?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;
    LogDeposit(
      gaugePoolName?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;

    "LogWithdraw(string,uint256,uint256,uint256)"(
      gaugePoolName?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
    LogWithdraw(
      gaugePoolName?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
  };

  estimateGas: {
    claimReward(
      gaugePoolName: string,
      setId: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      setIdCrv: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      gaugePoolName: string,
      setId: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      gaugePoolName: string,
      amt: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      setIdCrv: BigNumberish,
      setIdReward: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
