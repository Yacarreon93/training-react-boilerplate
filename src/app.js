import React from 'react';

class App extends React.Component {
    state = {
        count: 0,
    };

    render () {
        debugger //turns on browser debugger
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <h2>count:{this.state.count}</h2>
                <button onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}>+</button>
                <button onClick={() => this.setState(({ count }) => ({ count: count - 1 }))}>-</button>
            </div>
        );
    }
}

export default App;