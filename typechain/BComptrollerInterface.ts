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

export interface BComptrollerInterfaceInterface extends utils.Interface {
  functions: {
    "c2b(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "c2b", values: [string]): string;

  decodeFunctionResult(functionFragment: "c2b", data: BytesLike): Result;

  events: {};
}

export interface BComptrollerInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BComptrollerInterfaceInterface;

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
    c2b(ctoken: string, overrides?: CallOverrides): Promise<[string]>;
  };

  c2b(ctoken: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    c2b(ctoken: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    c2b(ctoken: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    c2b(
      ctoken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
