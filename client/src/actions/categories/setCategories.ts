import { createAction } from "../../redux/createAction";
import { EGoodsActions } from "../../types/actionTypes";
import { ICategory } from "../../types/Goods";

export const setCategoriesActionCreator = createAction<string[], EGoodsActions.SET_CATEGORIES>(EGoodsActions.SET_CATEGORIES);