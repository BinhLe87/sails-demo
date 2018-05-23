import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Register extends Component {
  render() {
    let { network, settings } = this.props.stores;

    return (
        <p className="App-intro">
          Enter your credential to register new account.
            <button onClick={() => network.register()}>Register</button>
        </p>
    );
  }
}

export default observer(Register);
