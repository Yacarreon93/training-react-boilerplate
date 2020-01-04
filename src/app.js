import React from 'react';
import  { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends React.Component {
    state = {
        count: 0,
    };

    render () {
        // debugger //turns on browser debugger
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <h2 className={this.state.count > 10 ? 'warning' : null}>
                    Count:{this.state.count}
                </h2>
                <button onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}>+</button>
                <button onClick={() => this.setState(({ count }) => ({ count: count - 1 }))}>-</button>
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