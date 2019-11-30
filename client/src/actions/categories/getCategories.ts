import { IThunkActionCreator } from "../../types/thumk";
import { setCategoriesActionCreator } from "./setCategories";

export const getCategories = (): IThunkActionCreator<Promise<void>> => {
  return async (dispatch, _, { axiosClient }) => {
    const categories = await axiosClient.goods.categories();
    console.log(categories);

    dispatch(setCategoriesActionCreator(categories));
  }
};
