import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

@inject("stores")
class Login extends Component {
	constructor(props) {
		super(props);
	}

	@observer
	render() {
		return (
			<Card className="login-panel" title="Login">
				<Form>
					<FormItem>
						<Input prefix={<Icon type="user"/>} placeholder="username"/>
					</FormItem>
					<FormItem>
						<Input prefix={<Icon type="lock"/>} type="password" placeholder="password"/>
					</FormItem>
					<FormItem>
						<Checkbox>Remember me</Checkbox>
						<a className="login-form-forgot" href="">Forgot password</a>
					</FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button" onClick={() => this.props.stores.network.login()}>
						Log in
					</Button>
				</Form>
			</Card>
		);
	}
}

export default Login;