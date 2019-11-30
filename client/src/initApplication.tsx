import * as React from 'react';
import { render } from 'react-dom';
import { Application } from './components/Application';
import { AxiosClient } from './Axios/AxiosClient';
import { Http } from './Http';
import { configureStore } from './redux/configureStore';
import { initState } from './redux/initState';
import { Provider } from 'react-redux';

import './styles/styles.scss';

export const initApplcation = async () => {
  const http = new Http('10.100.67.106/black-friday/');
  const axios = new AxiosClient(http);

  const store = configureStore(axios, http);
  await initState(store);

  render(
    <Provider store={store}>
      <Application />
    </Provider>,
    document.getElementById('application'),
  )
}