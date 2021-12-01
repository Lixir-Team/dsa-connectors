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

export interface InstaBenqiMappingAvalancheInterface extends utils.Interface {
  functions: {
    "addQitokenMapping(string[],address[],address[])": FunctionFragment;
    "avaxAddr()": FunctionFragment;
    "connectors()": FunctionFragment;
    "getMapping(string)": FunctionFragment;
    "instaIndex()": FunctionFragment;
    "mappingController()": FunctionFragment;
    "name()": FunctionFragment;
    "qiTokenMapping(string)": FunctionFragment;
    "updateQitokenMapping(string[],address[],address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addQitokenMapping",
    values: [string[], string[], string[]]
  ): string;
  encodeFunctionData(functionFragment: "avaxAddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "connectors",
    values?: undefined
  ): string;
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
    functionFragment: "qiTokenMapping",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateQitokenMapping",
    values: [string[], string[], string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "addQitokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "avaxAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "connectors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMapping", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "instaIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mappingController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "qiTokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateQitokenMapping",
    data: BytesLike
  ): Result;

  events: {
    "LogQiTokenAdded(string,address,address)": EventFragment;
    "LogQiTokenUpdated(string,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogQiTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogQiTokenUpdated"): EventFragment;
}

export type LogQiTokenAddedEvent = TypedEvent<
  [string, string, string],
  { name: string; token: string; qitoken: string }
>;

export type LogQiTokenAddedEventFilter = TypedEventFilter<LogQiTokenAddedEvent>;

export type LogQiTokenUpdatedEvent = TypedEvent<
  [string, string, string],
  { name: string; token: string; qitoken: string }
>;

export type LogQiTokenUpdatedEventFilter =
  TypedEventFilter<LogQiTokenUpdatedEvent>;

export interface InstaBenqiMappingAvalanche extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InstaBenqiMappingAvalancheInterface;

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
    addQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    avaxAddr(overrides?: CallOverrides): Promise<[string]>;

    connectors(overrides?: CallOverrides): Promise<[string]>;

    getMapping(
      _tokenId: string,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    instaIndex(overrides?: CallOverrides): Promise<[string]>;

    mappingController(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    qiTokenMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { qitoken: string; token: string }>;

    updateQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addQitokenMapping(
    _names: string[],
    _tokens: string[],
    _qitokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  avaxAddr(overrides?: CallOverrides): Promise<string>;

  connectors(overrides?: CallOverrides): Promise<string>;

  getMapping(
    _tokenId: string,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  instaIndex(overrides?: CallOverrides): Promise<string>;

  mappingController(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  qiTokenMapping(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { qitoken: string; token: string }>;

  updateQitokenMapping(
    _names: string[],
    _tokens: string[],
    _qitokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    avaxAddr(overrides?: CallOverrides): Promise<string>;

    connectors(overrides?: CallOverrides): Promise<string>;

    getMapping(
      _tokenId: string,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    instaIndex(overrides?: CallOverrides): Promise<string>;

    mappingController(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    qiTokenMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { qitoken: string; token: string }>;

    updateQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogQiTokenAdded(string,address,address)"(
      name?: string | null,
      token?: string | null,
      qitoken?: string | null
    ): LogQiTokenAddedEventFilter;
    LogQiTokenAdded(
      name?: string | null,
      token?: string | null,
      qitoken?: string | null
    ): LogQiTokenAddedEventFilter;

    "LogQiTokenUpdated(string,address,address)"(
      name?: string | null,
      token?: string | null,
      qitoken?: string | null
    ): LogQiTokenUpdatedEventFilter;
    LogQiTokenUpdated(
      name?: string | null,
      token?: string | null,
      qitoken?: string | null
    ): LogQiTokenUpdatedEventFilter;
  };

  estimateGas: {
    addQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    avaxAddr(overrides?: CallOverrides): Promise<BigNumber>;

    connectors(overrides?: CallOverrides): Promise<BigNumber>;

    getMapping(_tokenId: string, overrides?: CallOverrides): Promise<BigNumber>;

    instaIndex(overrides?: CallOverrides): Promise<BigNumber>;

    mappingController(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    qiTokenMapping(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    updateQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    avaxAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    connectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMapping(
      _tokenId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    instaIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mappingController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    qiTokenMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateQitokenMapping(
      _names: string[],
      _tokens: string[],
      _qitokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
