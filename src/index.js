import React from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';

import App from './App';
import getGreeting from './greet';
import './style.css';

console.log(getGreeting('world'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
