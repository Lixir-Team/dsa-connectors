/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OneInchEventResolverInterface extends utils.Interface {
  functions: {};

  events: {
    "LogSell(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogSellMulti(address[],address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogSellThree(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "LogSellTwo(address,address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogSell"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSellMulti"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSellThree"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSellTwo"): EventFragment;
}

export type LogSellEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    buyToken: string;
    sellToken: string;
    buyAmt: BigNumber;
    sellAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogSellEventFilter = TypedEventFilter<LogSellEvent>;

export type LogSellMultiEvent = TypedEvent<
  [string[], string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    tokens: string[];
    buyToken: string;
    sellToken: string;
    buyAmt: BigNumber;
    sellAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogSellMultiEventFilter = TypedEventFilter<LogSellMultiEvent>;

export type LogSellThreeEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    buyToken: string;
    sellToken: string;
    buyAmt: BigNumber;
    sellAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogSellThreeEventFilter = TypedEventFilter<LogSellThreeEvent>;

export type LogSellTwoEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    buyToken: string;
    sellToken: string;
    buyAmt: BigNumber;
    sellAmt: BigNumber;
    getId: BigNumber;
    setId: BigNumber;
  }
>;

export type LogSellTwoEventFilter = TypedEventFilter<LogSellTwoEvent>;

export interface OneInchEventResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OneInchEventResolverInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "LogSell(address,address,uint256,uint256,uint256,uint256)"(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellEventFilter;
    LogSell(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellEventFilter;

    "LogSellMulti(address[],address,address,uint256,uint256,uint256,uint256)"(
      tokens?: null,
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellMultiEventFilter;
    LogSellMulti(
      tokens?: null,
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellMultiEventFilter;

    "LogSellThree(address,address,uint256,uint256,uint256,uint256)"(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellThreeEventFilter;
    LogSellThree(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellThreeEventFilter;

    "LogSellTwo(address,address,uint256,uint256,uint256,uint256)"(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellTwoEventFilter;
    LogSellTwo(
      buyToken?: string | null,
      sellToken?: string | null,
      buyAmt?: null,
      sellAmt?: null,
      getId?: null,
      setId?: null
    ): LogSellTwoEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
