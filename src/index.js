import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import getGreeting from './greet';
import './style.css';

console.log(getGreeting('world'));

ReactDOM.render(<App />, document.getElementById('app'));