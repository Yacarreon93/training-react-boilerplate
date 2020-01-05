import React from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';

import App from './App';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import getGreeting from './greet';
import './style.css';

console.log(getGreeting('world'));

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
