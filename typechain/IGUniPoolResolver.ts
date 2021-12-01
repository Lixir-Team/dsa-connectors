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

export interface IGUniPoolResolverInterface extends utils.Interface {
  functions: {
    "getStakingFactory()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getStakingFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getStakingFactory",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGUniPoolResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGUniPoolResolverInterface;

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
    getStakingFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  getStakingFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getStakingFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getStakingFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getStakingFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
