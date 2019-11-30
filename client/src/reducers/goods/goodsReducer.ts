import { TReduxActions } from "../../types/actions";
import { IGoodsDetail } from "../../types/Goods";

const DEFAULT_GOODS_STATE: IGoodsDetail[] = [];

export const goodsReducer = (state = DEFAULT_GOODS_STATE, action: TReduxActions) => {
  switch(action.type) {
    default: return state;
  }
}