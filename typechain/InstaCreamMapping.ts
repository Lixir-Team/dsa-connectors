/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface InstaCreamMappingInterface extends utils.Interface {
  functions: {
    "addCtokenMapping(string[],address[],address[])": FunctionFragment;
    "cTokenMapping(string)": FunctionFragment;
    "connectors()": FunctionFragment;
    "ethAddr()": FunctionFragment;
    "getMapping(string)": FunctionFragment;
    "instaIndex()": FunctionFragment;
    "mappingController()": FunctionFragment;
    "name()": FunctionFragment;
    "updateCtokenMapping(string[],address[],address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCtokenMapping",
    values: [string[], string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cTokenMapping",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "connectors",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ethAddr", values?: undefined): string;
  encodeFunctionData(functionFragment: "getMapping", values: [string]): string;
  encodeFunctionData(
    functionFragment: "instaIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mappingController",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCtokenMapping",
    values: [string[], string[], string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCtokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cTokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "connectors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ethAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMapping", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "instaIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mappingController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCtokenMapping",
    data: BytesLike
  ): Result;

  events: {
    "LogCTokenAdded(string,address,address)": EventFragment;
    "LogCTokenUpdated(string,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogCTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogCTokenUpdated"): EventFragment;
}

export type LogCTokenAddedEvent = TypedEvent<
  [string, string, string],
  { name: string; token: string; ctoken: string }
>;

export type LogCTokenAddedEventFilter = TypedEventFilter<LogCTokenAddedEvent>;

export type LogCTokenUpdatedEvent = TypedEvent<
  [string, string, string],
  { name: string; token: string; ctoken: string }
>;

export type LogCTokenUpdatedEventFilter =
  TypedEventFilter<LogCTokenUpdatedEvent>;

export interface InstaCreamMapping extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InstaCreamMappingInterface;

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
    addCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cTokenMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { ctoken: string; token: string }>;

    connectors(overrides?: CallOverrides): Promise<[string]>;

    ethAddr(overrides?: CallOverrides): Promise<[string]>;

    getMapping(
      _tokenId: string,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    instaIndex(overrides?: CallOverrides): Promise<[string]>;

    mappingController(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    updateCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCtokenMapping(
    _names: string[],
    _tokens: string[],
    _ctokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cTokenMapping(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { ctoken: string; token: string }>;

  connectors(overrides?: CallOverrides): Promise<string>;

  ethAddr(overrides?: CallOverrides): Promise<string>;

  getMapping(
    _tokenId: string,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  instaIndex(overrides?: CallOverrides): Promise<string>;

  mappingController(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  updateCtokenMapping(
    _names: string[],
    _tokens: string[],
    _ctokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    cTokenMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { ctoken: string; token: string }>;

    connectors(overrides?: CallOverrides): Promise<string>;

    ethAddr(overrides?: CallOverrides): Promise<string>;

    getMapping(
      _tokenId: string,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    instaIndex(overrides?: CallOverrides): Promise<string>;

    mappingController(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    updateCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogCTokenAdded(string,address,address)"(
      name?: string | null,
      token?: string | null,
      ctoken?: string | null
    ): LogCTokenAddedEventFilter;
    LogCTokenAdded(
      name?: string | null,
      token?: string | null,
      ctoken?: string | null
    ): LogCTokenAddedEventFilter;

    "LogCTokenUpdated(string,address,address)"(
      name?: string | null,
      token?: string | null,
      ctoken?: string | null
    ): LogCTokenUpdatedEventFilter;
    LogCTokenUpdated(
      name?: string | null,
      token?: string | null,
      ctoken?: string | null
    ): LogCTokenUpdatedEventFilter;
  };

  estimateGas: {
    addCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cTokenMapping(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    connectors(overrides?: CallOverrides): Promise<BigNumber>;

    ethAddr(overrides?: CallOverrides): Promise<BigNumber>;

    getMapping(_tokenId: string, overrides?: CallOverrides): Promise<BigNumber>;

    instaIndex(overrides?: CallOverrides): Promise<BigNumber>;

    mappingController(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    updateCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cTokenMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ethAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMapping(
      _tokenId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    instaIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mappingController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateCtokenMapping(
      _names: string[],
      _tokens: string[],
      _ctokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
