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

export interface ChiHelpersInterface extends utils.Interface {
  functions: {
    "connectorID()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "connectorID",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "connectorID",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ChiHelpers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChiHelpersInterface;

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
    ): Promise<[BigNumber, BigNumber] & { model: BigNumber; id: BigNumber }>;
  };

  connectorID(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { model: BigNumber; id: BigNumber }>;

  callStatic: {
    connectorID(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { model: BigNumber; id: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    connectorID(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    connectorID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
