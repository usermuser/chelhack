import { TReduxActions } from "../../types/actions";
import { IGoods } from "../../types/Goods";

const DEFAULT_GOODS_STATE: IGoods[] = [];

export const goodsReducer = (state = DEFAULT_GOODS_STATE, action: TReduxActions) => {
  switch(action.type) {
    default: return state;
  }
}