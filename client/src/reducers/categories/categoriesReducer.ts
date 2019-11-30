import { TReduxActions } from "../../types/actions";
import { setCategoriesActionCreator } from "../../actions/categories/setCategories";

const DEFAULT_CATEGORIES_STATE: string[] = [];

export const categoriesReducer = (state = DEFAULT_CATEGORIES_STATE, action: TReduxActions) => {
  switch(action.type) {
    case setCategoriesActionCreator.type:
      return {
        ...action.payload,
      };
    default: return state;
  }
}