import * as React from 'react';
import { render } from 'react-dom';
import { Application } from './components/Application';

export const initApplcation = () => {
  render(
    <Application greeting="Hello, world!" />,
    document.getElementById('application'),
  )
}