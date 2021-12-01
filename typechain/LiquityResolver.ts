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

export interface LiquityResolverInterface extends utils.Interface {
  functions: {
    "adjust(uint256,uint256,uint256,uint256,uint256,address,address,uint256[],uint256[])": FunctionFragment;
    "borrow(uint256,uint256,address,address,uint256,uint256)": FunctionFragment;
    "claimCollateralFromRedemption(uint256)": FunctionFragment;
    "claimStakingGains(uint256,uint256)": FunctionFragment;
    "close(uint256)": FunctionFragment;
    "deposit(uint256,address,address,uint256,uint256)": FunctionFragment;
    "open(uint256,uint256,uint256,address,address,uint256[],uint256[])": FunctionFragment;
    "repay(uint256,address,address,uint256,uint256)": FunctionFragment;
    "stabilityDeposit(uint256,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "stabilityMoveEthGainToTrove(address,address)": FunctionFragment;
    "stabilityWithdraw(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "stake(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "unstake(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "withdraw(uint256,address,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "adjust",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimCollateralFromRedemption",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimStakingGains",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "close", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "open",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityDeposit",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityMoveEthGainToTrove",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityWithdraw",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "adjust", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimCollateralFromRedemption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimStakingGains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stabilityDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stabilityMoveEthGainToTrove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stabilityWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "LogAdjust(address,uint256,uint256,uint256,uint256,uint256,uint256[],uint256[])": EventFragment;
    "LogBorrow(address,uint256,uint256,uint256)": EventFragment;
    "LogClaimCollateralFromRedemption(address,uint256,uint256)": EventFragment;
    "LogClaimStakingGains(address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogClose(address,uint256)": EventFragment;
    "LogDeposit(address,uint256,uint256,uint256)": EventFragment;
    "LogOpen(address,uint256,uint256,uint256,uint256[],uint256[])": EventFragment;
    "LogRepay(address,uint256,uint256,uint256)": EventFragment;
    "LogStabilityDeposit(address,uint256,uint256,uint256,address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogStabilityMoveEthGainToTrove(address,uint256)": EventFragment;
    "LogStabilityWithdraw(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "LogStake(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "LogUnstake(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "LogWithdraw(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogAdjust"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogBorrow"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LogClaimCollateralFromRedemption"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogClaimStakingGains"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogClose"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogOpen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRepay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogStabilityDeposit"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LogStabilityMoveEthGainToTrove"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogStabilityWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogStake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUnstake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}

export type LogAdjustEvent = TypedEvent<
  [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[]
  ],
  {
    borrower: string;
    maxFeePercentage: BigNumber;
    depositAmount: BigNumber;
    withdrawAmount: BigNumber;
    borrowAmount: BigNumber;
    repayAmount: BigNumber;
    getIds: BigNumber[];
    setIds: BigNumber[];
  }
>;

export type LogAdjustEventFilter = TypedEventFilter<LogAdjustEvent>;

export type LogBorrowEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { borrower: string; amount: BigNumber; getId: BigNumber; setId: BigNumber }
>;

export type LogBorrowEventFilter = TypedEventFilter<LogBorrowEvent>;

export type LogClaimCollateralFromRedemptionEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { borrower: string; amount: BigNumber; setId: BigNumber }
>;

export type LogClaimCollateralFromRedemptionEventFilter =
  TypedEventFilter<LogClaimCollateralFromRedemptionEvent>;

export type LogClaimStakingGainsEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    borrower: string;
    ethGain: BigNumber;
    lusdGain: BigNumber;
    setEthGainId: BigNumber;
    setLusdGainId: BigNumber;
  }
>;

export type LogClaimStakingGainsEventFilter =
  TypedEventFilter<LogClaimStakingGainsEvent>;

export type LogCloseEvent = TypedEvent<
  [string, BigNumber],
  { borrower: string; setId: BigNumber }
>;

export type LogCloseEventFilter = TypedEventFilter<LogCloseEvent>;

export type LogDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { borrower: string; amount: BigNumber; getId: BigNumber; setId: BigNumber }
>;

export type LogDepositEventFilter = TypedEventFilter<LogDepositEvent>;

export type LogOpenEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[]],
  {
    borrower: string;
    maxFeePercentage: BigNumber;
    depositAmount: BigNumber;
    borrowAmount: BigNumber;
    getIds: BigNumber[];
    setIds: BigNumber[];
  }
>;

export type LogOpenEventFilter = TypedEventFilter<LogOpenEvent>;

export type LogRepayEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { borrower: string; amount: BigNumber; getId: BigNumber; setId: BigNumber }
>;

export type LogRepayEventFilter = TypedEventFilter<LogRepayEvent>;

export type LogStabilityDepositEvent = TypedEvent<
  [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  {
    borrower: string;
    amount: BigNumber;
    ethGain: BigNumber;
    lqtyGain: BigNumber;
    frontendTag: string;
    getDepositId: BigNumber;
    setDepositId: BigNumber;
    setEthGainId: BigNumber;
    setLqtyGainId: BigNumber;
  }
>;

export type LogStabilityDepositEventFilter =
  TypedEventFilter<LogStabilityDepositEvent>;

export type LogStabilityMoveEthGainToTroveEvent = TypedEvent<
  [string, BigNumber],
  { borrower: string; amount: BigNumber }
>;

export type LogStabilityMoveEthGainToTroveEventFilter =
  TypedEventFilter<LogStabilityMoveEthGainToTroveEvent>;

export type LogStabilityWithdrawEvent = TypedEvent<
  [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  {
    borrower: string;
    amount: BigNumber;
    ethGain: BigNumber;
    lqtyGain: BigNumber;
    getWithdrawId: BigNumber;
    setWithdrawId: BigNumber;
    setEthGainId: BigNumber;
    setLqtyGainId: BigNumber;
  }
>;

export type LogStabilityWithdrawEventFilter =
  TypedEventFilter<LogStabilityWithdrawEvent>;

export type LogStakeEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    borrower: string;
    amount: BigNumber;
    getStakeId: BigNumber;
    setStakeId: BigNumber;
    setEthGainId: BigNumber;
    setLusdGainId: BigNumber;
  }
>;

export type LogStakeEventFilter = TypedEventFilter<LogStakeEvent>;

export type LogUnstakeEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    borrower: string;
    amount: BigNumber;
    getUnstakeId: BigNumber;
    setUnstakeId: BigNumber;
    setEthGainId: BigNumber;
    setLusdGainId: BigNumber;
  }
>;

export type LogUnstakeEventFilter = TypedEventFilter<LogUnstakeEvent>;

export type LogWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { borrower: string; amount: BigNumber; getId: BigNumber; setId: BigNumber }
>;

export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;

export interface LiquityResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquityResolverInterface;

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
    adjust(
      maxFeePercentage: BigNumberish,
      depositAmount: BigNumberish,
      withdrawAmount: BigNumberish,
      borrowAmount: BigNumberish,
      repayAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrow(
      maxFeePercentage: BigNumberish,
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimCollateralFromRedemption(
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimStakingGains(
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    close(
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    open(
      depositAmount: BigNumberish,
      maxFeePercentage: BigNumberish,
      borrowAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stabilityDeposit(
      amount: BigNumberish,
      frontendTag: string,
      getDepositId: BigNumberish,
      setDepositId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stabilityMoveEthGainToTrove(
      upperHint: string,
      lowerHint: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stabilityWithdraw(
      amount: BigNumberish,
      getWithdrawId: BigNumberish,
      setWithdrawId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      getStakeId: BigNumberish,
      setStakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      amount: BigNumberish,
      getUnstakeId: BigNumberish,
      setUnstakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  adjust(
    maxFeePercentage: BigNumberish,
    depositAmount: BigNumberish,
    withdrawAmount: BigNumberish,
    borrowAmount: BigNumberish,
    repayAmount: BigNumberish,
    upperHint: string,
    lowerHint: string,
    getIds: BigNumberish[],
    setIds: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrow(
    maxFeePercentage: BigNumberish,
    amount: BigNumberish,
    upperHint: string,
    lowerHint: string,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimCollateralFromRedemption(
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimStakingGains(
    setEthGainId: BigNumberish,
    setLusdGainId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  close(
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    amount: BigNumberish,
    upperHint: string,
    lowerHint: string,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  open(
    depositAmount: BigNumberish,
    maxFeePercentage: BigNumberish,
    borrowAmount: BigNumberish,
    upperHint: string,
    lowerHint: string,
    getIds: BigNumberish[],
    setIds: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay(
    amount: BigNumberish,
    upperHint: string,
    lowerHint: string,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stabilityDeposit(
    amount: BigNumberish,
    frontendTag: string,
    getDepositId: BigNumberish,
    setDepositId: BigNumberish,
    setEthGainId: BigNumberish,
    setLqtyGainId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stabilityMoveEthGainToTrove(
    upperHint: string,
    lowerHint: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stabilityWithdraw(
    amount: BigNumberish,
    getWithdrawId: BigNumberish,
    setWithdrawId: BigNumberish,
    setEthGainId: BigNumberish,
    setLqtyGainId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    getStakeId: BigNumberish,
    setStakeId: BigNumberish,
    setEthGainId: BigNumberish,
    setLusdGainId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    amount: BigNumberish,
    getUnstakeId: BigNumberish,
    setUnstakeId: BigNumberish,
    setEthGainId: BigNumberish,
    setLusdGainId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    upperHint: string,
    lowerHint: string,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    adjust(
      maxFeePercentage: BigNumberish,
      depositAmount: BigNumberish,
      withdrawAmount: BigNumberish,
      borrowAmount: BigNumberish,
      repayAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    borrow(
      maxFeePercentage: BigNumberish,
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    claimCollateralFromRedemption(
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    claimStakingGains(
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    close(
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    deposit(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    open(
      depositAmount: BigNumberish,
      maxFeePercentage: BigNumberish,
      borrowAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    repay(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    stabilityDeposit(
      amount: BigNumberish,
      frontendTag: string,
      getDepositId: BigNumberish,
      setDepositId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    stabilityMoveEthGainToTrove(
      upperHint: string,
      lowerHint: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    stabilityWithdraw(
      amount: BigNumberish,
      getWithdrawId: BigNumberish,
      setWithdrawId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    stake(
      amount: BigNumberish,
      getStakeId: BigNumberish,
      setStakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    unstake(
      amount: BigNumberish,
      getUnstakeId: BigNumberish,
      setUnstakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    withdraw(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;
  };

  filters: {
    "LogAdjust(address,uint256,uint256,uint256,uint256,uint256,uint256[],uint256[])"(
      borrower?: string | null,
      maxFeePercentage?: null,
      depositAmount?: null,
      withdrawAmount?: null,
      borrowAmount?: null,
      repayAmount?: null,
      getIds?: null,
      setIds?: null
    ): LogAdjustEventFilter;
    LogAdjust(
      borrower?: string | null,
      maxFeePercentage?: null,
      depositAmount?: null,
      withdrawAmount?: null,
      borrowAmount?: null,
      repayAmount?: null,
      getIds?: null,
      setIds?: null
    ): LogAdjustEventFilter;

    "LogBorrow(address,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogBorrowEventFilter;
    LogBorrow(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogBorrowEventFilter;

    "LogClaimCollateralFromRedemption(address,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      setId?: null
    ): LogClaimCollateralFromRedemptionEventFilter;
    LogClaimCollateralFromRedemption(
      borrower?: string | null,
      amount?: null,
      setId?: null
    ): LogClaimCollateralFromRedemptionEventFilter;

    "LogClaimStakingGains(address,uint256,uint256,uint256,uint256)"(
      borrower?: string | null,
      ethGain?: null,
      lusdGain?: null,
      setEthGainId?: null,
      setLusdGainId?: null
    ): LogClaimStakingGainsEventFilter;
    LogClaimStakingGains(
      borrower?: string | null,
      ethGain?: null,
      lusdGain?: null,
      setEthGainId?: null,
      setLusdGainId?: null
    ): LogClaimStakingGainsEventFilter;

    "LogClose(address,uint256)"(
      borrower?: string | null,
      setId?: null
    ): LogCloseEventFilter;
    LogClose(borrower?: string | null, setId?: null): LogCloseEventFilter;

    "LogDeposit(address,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;
    LogDeposit(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogDepositEventFilter;

    "LogOpen(address,uint256,uint256,uint256,uint256[],uint256[])"(
      borrower?: string | null,
      maxFeePercentage?: null,
      depositAmount?: null,
      borrowAmount?: null,
      getIds?: null,
      setIds?: null
    ): LogOpenEventFilter;
    LogOpen(
      borrower?: string | null,
      maxFeePercentage?: null,
      depositAmount?: null,
      borrowAmount?: null,
      getIds?: null,
      setIds?: null
    ): LogOpenEventFilter;

    "LogRepay(address,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogRepayEventFilter;
    LogRepay(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogRepayEventFilter;

    "LogStabilityDeposit(address,uint256,uint256,uint256,address,uint256,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      ethGain?: null,
      lqtyGain?: null,
      frontendTag?: null,
      getDepositId?: null,
      setDepositId?: null,
      setEthGainId?: null,
      setLqtyGainId?: null
    ): LogStabilityDepositEventFilter;
    LogStabilityDeposit(
      borrower?: string | null,
      amount?: null,
      ethGain?: null,
      lqtyGain?: null,
      frontendTag?: null,
      getDepositId?: null,
      setDepositId?: null,
      setEthGainId?: null,
      setLqtyGainId?: null
    ): LogStabilityDepositEventFilter;

    "LogStabilityMoveEthGainToTrove(address,uint256)"(
      borrower?: string | null,
      amount?: null
    ): LogStabilityMoveEthGainToTroveEventFilter;
    LogStabilityMoveEthGainToTrove(
      borrower?: string | null,
      amount?: null
    ): LogStabilityMoveEthGainToTroveEventFilter;

    "LogStabilityWithdraw(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      ethGain?: null,
      lqtyGain?: null,
      getWithdrawId?: null,
      setWithdrawId?: null,
      setEthGainId?: null,
      setLqtyGainId?: null
    ): LogStabilityWithdrawEventFilter;
    LogStabilityWithdraw(
      borrower?: string | null,
      amount?: null,
      ethGain?: null,
      lqtyGain?: null,
      getWithdrawId?: null,
      setWithdrawId?: null,
      setEthGainId?: null,
      setLqtyGainId?: null
    ): LogStabilityWithdrawEventFilter;

    "LogStake(address,uint256,uint256,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      getStakeId?: null,
      setStakeId?: null,
      setEthGainId?: null,
      setLusdGainId?: null
    ): LogStakeEventFilter;
    LogStake(
      borrower?: string | null,
      amount?: null,
      getStakeId?: null,
      setStakeId?: null,
      setEthGainId?: null,
      setLusdGainId?: null
    ): LogStakeEventFilter;

    "LogUnstake(address,uint256,uint256,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      getUnstakeId?: null,
      setUnstakeId?: null,
      setEthGainId?: null,
      setLusdGainId?: null
    ): LogUnstakeEventFilter;
    LogUnstake(
      borrower?: string | null,
      amount?: null,
      getUnstakeId?: null,
      setUnstakeId?: null,
      setEthGainId?: null,
      setLusdGainId?: null
    ): LogUnstakeEventFilter;

    "LogWithdraw(address,uint256,uint256,uint256)"(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
    LogWithdraw(
      borrower?: string | null,
      amount?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawEventFilter;
  };

  estimateGas: {
    adjust(
      maxFeePercentage: BigNumberish,
      depositAmount: BigNumberish,
      withdrawAmount: BigNumberish,
      borrowAmount: BigNumberish,
      repayAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrow(
      maxFeePercentage: BigNumberish,
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimCollateralFromRedemption(
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimStakingGains(
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    close(
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    open(
      depositAmount: BigNumberish,
      maxFeePercentage: BigNumberish,
      borrowAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stabilityDeposit(
      amount: BigNumberish,
      frontendTag: string,
      getDepositId: BigNumberish,
      setDepositId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stabilityMoveEthGainToTrove(
      upperHint: string,
      lowerHint: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stabilityWithdraw(
      amount: BigNumberish,
      getWithdrawId: BigNumberish,
      setWithdrawId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      getStakeId: BigNumberish,
      setStakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      amount: BigNumberish,
      getUnstakeId: BigNumberish,
      setUnstakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adjust(
      maxFeePercentage: BigNumberish,
      depositAmount: BigNumberish,
      withdrawAmount: BigNumberish,
      borrowAmount: BigNumberish,
      repayAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrow(
      maxFeePercentage: BigNumberish,
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimCollateralFromRedemption(
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimStakingGains(
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    close(
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    open(
      depositAmount: BigNumberish,
      maxFeePercentage: BigNumberish,
      borrowAmount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getIds: BigNumberish[],
      setIds: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stabilityDeposit(
      amount: BigNumberish,
      frontendTag: string,
      getDepositId: BigNumberish,
      setDepositId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stabilityMoveEthGainToTrove(
      upperHint: string,
      lowerHint: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stabilityWithdraw(
      amount: BigNumberish,
      getWithdrawId: BigNumberish,
      setWithdrawId: BigNumberish,
      setEthGainId: BigNumberish,
      setLqtyGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      getStakeId: BigNumberish,
      setStakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      amount: BigNumberish,
      getUnstakeId: BigNumberish,
      setUnstakeId: BigNumberish,
      setEthGainId: BigNumberish,
      setLusdGainId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      upperHint: string,
      lowerHint: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
