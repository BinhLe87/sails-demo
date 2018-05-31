import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("stores")
class Register extends Component {
  @observer
  render() {
    return (
        <p className="App-intro">
          Enter your credential to register new account.
            <button onClick={() => this.props.stores.network.register()}>Register</button>
        </p>
    );
  }
}

export default Register;