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

export interface PoolTogetherResolverInterface extends utils.Interface {
  functions: {
    "claim(address,uint256)": FunctionFragment;
    "claimAll(address,address[])": FunctionFragment;
    "claimPodTokenDrop(address,uint256)": FunctionFragment;
    "depositTo(address,uint256,address,uint256,uint256)": FunctionFragment;
    "depositToPod(address,address,uint256,uint256,uint256)": FunctionFragment;
    "withdrawFromPod(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "withdrawInstantlyFrom(address,uint256,address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAll",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimPodTokenDrop",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [string, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToPod",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromPod",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawInstantlyFrom",
    values: [
      string,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimPodTokenDrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToPod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromPod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawInstantlyFrom",
    data: BytesLike
  ): Result;

  events: {
    "LogClaim(address,address,uint256,uint256)": EventFragment;
    "LogClaimAll(address,address,address[])": EventFragment;
    "LogClaimPodTokenDrop(address,address,uint256,uint256)": EventFragment;
    "LogDepositTo(address,address,uint256,address,uint256,uint256)": EventFragment;
    "LogDepositToPod(address,address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogWithdrawFromPod(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "LogWithdrawInstantlyFrom(address,address,uint256,address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogClaimAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogClaimPodTokenDrop"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogDepositTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogDepositToPod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdrawFromPod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogWithdrawInstantlyFrom"): EventFragment;
}

export type LogClaimEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { tokenFaucet: string; user: string; claimed: BigNumber; setId: BigNumber }
>;

export type LogClaimEventFilter = TypedEventFilter<LogClaimEvent>;

export type LogClaimAllEvent = TypedEvent<
  [string, string, string[]],
  { tokenFaucetProxyFactory: string; user: string; tokenFaucets: string[] }
>;

export type LogClaimAllEventFilter = TypedEventFilter<LogClaimAllEvent>;

export type LogClaimPodTokenDropEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { podTokenDrop: string; user: string; claimed: BigNumber; setId: BigNumber }
>;

export type LogClaimPodTokenDropEventFilter =
  TypedEventFilter<LogClaimPodTokenDropEvent>;

export type LogDepositToEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber, BigNumber],
  {
    prizePool: string;
    to: string;
    amount: BigNumber;
    controlledToken: string;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogDepositToEventFilter = TypedEventFilter<LogDepositToEvent>;

export type LogDepositToPodEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    prizePoolToken: string;
    pod: string;
    to: string;
    amount: BigNumber;
    podShare: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogDepositToPodEventFilter = TypedEventFilter<LogDepositToPodEvent>;

export type LogWithdrawFromPodEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    pod: string;
    shareAmount: BigNumber;
    tokenAmount: BigNumber;
    maxFee: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogWithdrawFromPodEventFilter =
  TypedEventFilter<LogWithdrawFromPodEvent>;

export type LogWithdrawInstantlyFromEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  {
    prizePool: string;
    from: string;
    amount: BigNumber;
    controlledToken: string;
    maximumExitFee: BigNumber;
    exitFee: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogWithdrawInstantlyFromEventFilter =
  TypedEventFilter<LogWithdrawInstantlyFromEvent>;

export interface PoolTogetherResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoolTogetherResolverInterface;

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
    claim(
      tokenFaucet: string,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAll(
      tokenFaucetProxyFactory: string,
      tokenFaucets: string[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimPodTokenDrop(
      podTokenDrop: string,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositTo(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositToPod(
      prizePoolToken: string,
      pod: string,
      tokenAmount: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFromPod(
      pod: string,
      shareAmount: BigNumberish,
      maxFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawInstantlyFrom(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      maximumExitFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    tokenFaucet: string,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAll(
    tokenFaucetProxyFactory: string,
    tokenFaucets: string[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimPodTokenDrop(
    podTokenDrop: string,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositTo(
    prizePool: string,
    amount: BigNumberish,
    controlledToken: string,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositToPod(
    prizePoolToken: string,
    pod: string,
    tokenAmount: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFromPod(
    pod: string,
    shareAmount: BigNumberish,
    maxFee: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawInstantlyFrom(
    prizePool: string,
    amount: BigNumberish,
    controlledToken: string,
    maximumExitFee: BigNumberish,
    getId: BigNumberish,
    setId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      tokenFaucet: string,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    claimAll(
      tokenFaucetProxyFactory: string,
      tokenFaucets: string[],
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    claimPodTokenDrop(
      podTokenDrop: string,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    depositTo(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    depositToPod(
      prizePoolToken: string,
      pod: string,
      tokenAmount: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    withdrawFromPod(
      pod: string,
      shareAmount: BigNumberish,
      maxFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;

    withdrawInstantlyFrom(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      maximumExitFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { _eventName: string; _eventParam: string }>;
  };

  filters: {
    "LogClaim(address,address,uint256,uint256)"(
      tokenFaucet?: null,
      user?: null,
      claimed?: null,
      setId?: null
    ): LogClaimEventFilter;
    LogClaim(
      tokenFaucet?: null,
      user?: null,
      claimed?: null,
      setId?: null
    ): LogClaimEventFilter;

    "LogClaimAll(address,address,address[])"(
      tokenFaucetProxyFactory?: null,
      user?: null,
      tokenFaucets?: null
    ): LogClaimAllEventFilter;
    LogClaimAll(
      tokenFaucetProxyFactory?: null,
      user?: null,
      tokenFaucets?: null
    ): LogClaimAllEventFilter;

    "LogClaimPodTokenDrop(address,address,uint256,uint256)"(
      podTokenDrop?: null,
      user?: null,
      claimed?: null,
      setId?: null
    ): LogClaimPodTokenDropEventFilter;
    LogClaimPodTokenDrop(
      podTokenDrop?: null,
      user?: null,
      claimed?: null,
      setId?: null
    ): LogClaimPodTokenDropEventFilter;

    "LogDepositTo(address,address,uint256,address,uint256,uint256)"(
      prizePool?: null,
      to?: null,
      amount?: null,
      controlledToken?: null,
      getId?: null,
      setId?: null
    ): LogDepositToEventFilter;
    LogDepositTo(
      prizePool?: null,
      to?: null,
      amount?: null,
      controlledToken?: null,
      getId?: null,
      setId?: null
    ): LogDepositToEventFilter;

    "LogDepositToPod(address,address,address,uint256,uint256,uint256,uint256)"(
      prizePoolToken?: null,
      pod?: null,
      to?: null,
      amount?: null,
      podShare?: null,
      getId?: null,
      setId?: null
    ): LogDepositToPodEventFilter;
    LogDepositToPod(
      prizePoolToken?: null,
      pod?: null,
      to?: null,
      amount?: null,
      podShare?: null,
      getId?: null,
      setId?: null
    ): LogDepositToPodEventFilter;

    "LogWithdrawFromPod(address,uint256,uint256,uint256,uint256,uint256)"(
      pod?: null,
      shareAmount?: null,
      tokenAmount?: null,
      maxFee?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawFromPodEventFilter;
    LogWithdrawFromPod(
      pod?: null,
      shareAmount?: null,
      tokenAmount?: null,
      maxFee?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawFromPodEventFilter;

    "LogWithdrawInstantlyFrom(address,address,uint256,address,uint256,uint256,uint256,uint256)"(
      prizePool?: null,
      from?: null,
      amount?: null,
      controlledToken?: null,
      maximumExitFee?: null,
      exitFee?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawInstantlyFromEventFilter;
    LogWithdrawInstantlyFrom(
      prizePool?: null,
      from?: null,
      amount?: null,
      controlledToken?: null,
      maximumExitFee?: null,
      exitFee?: null,
      getId?: null,
      setId?: null
    ): LogWithdrawInstantlyFromEventFilter;
  };

  estimateGas: {
    claim(
      tokenFaucet: string,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAll(
      tokenFaucetProxyFactory: string,
      tokenFaucets: string[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimPodTokenDrop(
      podTokenDrop: string,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositTo(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositToPod(
      prizePoolToken: string,
      pod: string,
      tokenAmount: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFromPod(
      pod: string,
      shareAmount: BigNumberish,
      maxFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawInstantlyFrom(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      maximumExitFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      tokenFaucet: string,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAll(
      tokenFaucetProxyFactory: string,
      tokenFaucets: string[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimPodTokenDrop(
      podTokenDrop: string,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositTo(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositToPod(
      prizePoolToken: string,
      pod: string,
      tokenAmount: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFromPod(
      pod: string,
      shareAmount: BigNumberish,
      maxFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawInstantlyFrom(
      prizePool: string,
      amount: BigNumberish,
      controlledToken: string,
      maximumExitFee: BigNumberish,
      getId: BigNumberish,
      setId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
