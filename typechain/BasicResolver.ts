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

export interface BasicResolverInterface extends utils.Interface {
  functions: {
    "connectorID()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "connectorID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "connectorID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "LogWithdraw(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}

export type LogWithdrawEvent = TypedEvent<
  [string, BigNumber, string],
  { erc20: string; tokenAmt: BigNumber; to: string }
>;

export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;

export interface BasicResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BasicResolverInterface;

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
    connectorID(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _type: BigNumber; _id: BigNumber }>;

    withdraw(
      erc20: string,
      tokenAmt: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  connectorID(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { _type: BigNumber; _id: BigNumber }>;

  withdraw(
    erc20: string,
    tokenAmt: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    connectorID(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _type: BigNumber; _id: BigNumber }>;

    withdraw(
      erc20: string,
      tokenAmt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogWithdraw(address,uint256,address)"(
      erc20?: null,
      tokenAmt?: null,
      to?: null
    ): LogWithdrawEventFilter;
    LogWithdraw(
      erc20?: null,
      tokenAmt?: null,
      to?: null
    ): LogWithdrawEventFilter;
  };

  estimateGas: {
    connectorID(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      erc20: string,
      tokenAmt: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    connectorID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      erc20: string,
      tokenAmt: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
