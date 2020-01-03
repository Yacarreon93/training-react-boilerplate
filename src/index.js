import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import getGreeting from './greet';

console.log(getGreeting('world'));

ReactDOM.render(<App />, document.getElementById('app'));