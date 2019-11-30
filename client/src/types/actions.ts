import { Action } from "redux";;
import { setCategoriesActionCreator } from "../actions/categories/setCategories";
import { setActiveModalActionCreator } from "../actions/modal";

export type TReduxActions = ReturnType<typeof setCategoriesActionCreator> | ReturnType<typeof setActiveModalActionCreator>

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