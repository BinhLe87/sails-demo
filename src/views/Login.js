import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Login extends Component {
  render() {
    let { network, settings } = this.props.stores;

    return (
        <p className="App-intro">
            Enter your username and password to login.
            <button onClick={() => network.login()}>Login</button>
        </p>
    );
  }
}

export default observer(Login);
