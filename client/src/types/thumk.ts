import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Http } from '../Http';
import { AxiosClient } from '../Axios/AxiosClient';
import { TReduxActions } from './actions';
import { IApplicationState } from './redux';

export interface IReduxThunkContext {
  httpClient: Http;
  axiosClient: AxiosClient;
}

export type TThunkDispatch<A extends TReduxActions = TReduxActions> =
  ThunkDispatch<IApplicationState, IReduxThunkContext, A>;

export interface IThunkActionCreator<T = void> extends
  ThunkAction<T, IApplicationState, IReduxThunkContext, TReduxActions> {}