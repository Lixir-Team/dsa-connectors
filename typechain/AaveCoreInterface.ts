/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AaveCoreInterfaceInterface extends utils.Interface {
  functions: {
    "getReserveATokenAddress(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getReserveATokenAddress",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReserveATokenAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AaveCoreInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveCoreInterfaceInterface;

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
    getReserveATokenAddress(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getReserveATokenAddress(
    _reserve: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getReserveATokenAddress(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getReserveATokenAddress(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReserveATokenAddress(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
