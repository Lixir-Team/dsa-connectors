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

export interface AaveAddressProviderRegistryInterfaceInterface
  extends utils.Interface {
  functions: {
    "getAddressesProvidersList()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddressesProvidersList",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAddressesProvidersList",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AaveAddressProviderRegistryInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveAddressProviderRegistryInterfaceInterface;

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
    getAddressesProvidersList(overrides?: CallOverrides): Promise<[string[]]>;
  };

  getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    getAddressesProvidersList(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddressesProvidersList(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
