import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Login from './views/Login';
import Register from './views/Register';

class App extends Component {
  render() {
    let { network, settings } = this.props.stores;
    console.log(network.state)

    if (network.isLoggedIn()) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => network.logout()}>Logout</button>
        </div>
      )
    } else if (network.state == 0) {
      return <Register stores={this.props.stores}/>
    } else {
      return <Login stores={this.props.stores}/>
    }
  }
}

export default observer(App);
