import { combineReducers } from 'redux';
import { IApplicationState } from '../types/redux';
import { TReduxActions } from '../types/actions';
import { goodsReducer } from './goodsReducer';

export const rootReducer = combineReducers<IApplicationState, TReduxActions>({
  goods: goodsReducer,
});
