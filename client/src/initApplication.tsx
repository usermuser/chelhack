import * as React from 'react';
import { render } from 'react-dom';
import { Application } from './components/Application';
import { AxiosClient } from './Axios/AxiosClient';
import { Http } from './Http';
import { configureStore } from './redux/configureStore';
import { initState } from './redux/initState';
import { Provider } from 'react-redux';

import 'normalize.css';
import './styles/styles.scss';

export const initApplcation = async () => {
  const http = new Http('http://10.100.67.106:8041/black-friday/');
  const axios = new AxiosClient(http);

  const store = configureStore(axios, http);
  await initState(store);

  render(
    <Provider store={store}>
      <Application />
    </Provider>,
    document.getElementById('application'),
  );
};
