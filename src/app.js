import React from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

// const a = 'A'; // this will cause an eslint error, so, husky will prevents the commit

class App extends React.Component {
  state = {
    count: 0
  };

  // this will throw an strict mode warning
  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount');
  // }

  render() {
    // debugger //turns on browser debugger
    return (
      <div>
        <h1>HELLO WORLD</h1>
        {/* <img alt="company logo" src="./logo.png" /> */}
        <h2 className={this.state.count > 10 ? 'warning' : null}>
          Count:{this.state.count}
        </h2>
        <button
          onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(({ count }) => ({ count: count - 1 }))}
        >
          -
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
