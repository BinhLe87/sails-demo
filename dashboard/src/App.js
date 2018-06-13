import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Container from './container/Container';
import { HashRouter, Route, Switch } from 'react-router-dom';

@inject("stores")
class App extends Component {
	@observer
	render() {
		let { network, localization } = this.props.stores;
		let isLoggedIn = network.isLoggedIn();

		return (
			<HashRouter>
				<div>
					<Route path="*" render={() => (
						isLoggedIn ? (
							<Container/>
						) : (
							<Switch>
								<Route path="/register" component={Register}/>
								<Route component={Login}/>
							</Switch>
						)
					)}/>
				</div>
			</HashRouter>
		)
	}
}

export default App;
