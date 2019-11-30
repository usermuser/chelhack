import { Action } from "redux";
import { EGoodsActions } from "./actionTypes";

export type TReduxActions = Action<any>;

export interface IPayloadAction<P = undefined, T extends string = string> extends Action<T> {
  payload: P;
}

export interface IPayloadActionCreator<P = undefined, T extends string = string> {
  (): Action<T>;
  (payload: P): IPayloadAction<P, T>;
  type: T;
}

export interface ISimpleActionCreator<T extends string = string> {
  (): Action<T>;
  type: T;
}