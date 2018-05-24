import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Container from './container/Container';

class App extends Component {
  render() {
    let { network, settings } = this.props.stores;
    console.log(network.state)

    if (network.isLoggedIn()) {
      return <Container/>
    } else if (network.state == 0) {
      return <Register stores={this.props.stores}/>
    } else {
      return <Login stores={this.props.stores}/>
    }
  }
}

export default observer(App);
