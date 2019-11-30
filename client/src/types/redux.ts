import { Store } from "redux";
import { TReduxActions } from "./actions";
import { IGoods } from "./Goods";

export interface IApplicationState {
  goods: IGoods[],
}

export type TApplicationStore = Store<IApplicationState, TReduxActions>;