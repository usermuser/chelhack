import { TThunkDispatch } from "../types/thumk";
import { TApplicationStore } from "../types/redux";
import { getCategories } from "../actions/categories/getCategories";


export async function initState(store: TApplicationStore) {
  const dispatch: TThunkDispatch = store.dispatch;

  try {
    await Promise.all([
      //dispatch any actions for init appliacation
      dispatch(getCategories()),
    ]);
  } catch (error) {

  }
}
