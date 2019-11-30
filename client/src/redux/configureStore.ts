import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { IApplicationState } from '../types/redux';
import { rootReducer } from '../reducers/rootReducer';
import { Http } from '../Http';
import { IReduxThunkContext } from '../types/thumk';
import { AxiosClient } from '../Axios/AxiosClient';
import { TReduxActions } from '../types/actions';

export function configureStore(
  axiosClient: AxiosClient,
  httpClient: Http,
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const thunkContext: IReduxThunkContext = {
    axiosClient,
    httpClient,
  };

  const middlewares = [
    thunk.withExtraArgument(thunkContext),
  ];

  return createStore<IApplicationState, TReduxActions, {}, {}>(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );
}
