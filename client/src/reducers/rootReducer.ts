import { combineReducers } from 'redux';
import { IApplicationState } from '../types/redux';
import { TReduxActions } from '../types/actions';
import { goodsReducer } from './goods';
import { categoriesReducer } from './categories';
import { activeModalReducer } from './activeModal';

export const rootReducer = combineReducers<IApplicationState, TReduxActions>({
  goods: goodsReducer,
  categories: categoriesReducer,
  activeModal: activeModalReducer,
});
