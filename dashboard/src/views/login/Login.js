import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { message, Spin, Card, Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

@inject("stores")
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	_handleSubmit = (e) => {
        const { handleSubmit } = this.props;
		e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
				this.setState({loading: true});
				this.props.stores.network.login(values.username, values.password, {err: this._handleLoginError});
            }
        });
	}

	_handleLoginError = (err) => {
		message.error(`Login fail: ${err.message}`);
		this.setState({
			loading: false
		})
	}

	@observer
	render() {
		const { getFieldDecorator } = this.props.form;
		let { localization } = this.props.stores;

		return (
			<Card className="login-panel" title={localization.getText('txtLogin')}>
				<Spin spinning={this.state.loading}>
					<Form onSubmit={this._handleSubmit}>
						<FormItem key='username'>
						{
							getFieldDecorator('username', {
								rules: [{
									type: 'string',
									initialValue: '',
									required: true,
									message: localization.getText('txtInvalidUsername')
								}]
							})(<Input prefix={<Icon type="user"/>} placeholder={localization.getText('txtUsernamePlaceholder')}/>)
						}
						</FormItem>
						<FormItem key='password'>
						{
							getFieldDecorator('password', {
								rules: [{
									type: 'string',
									initialValue: '',
									required: 'true',
									message: localization.getText('txtInvalidPassword')
								}]
							})(<Input prefix={<Icon type="lock"/>} type="password" placeholder={localization.getText('txtInvalidPassword')}/>)
						}
						</FormItem>
						{/* <FormItem>
							<Checkbox>Remember me</Checkbox>
							<a className="login-form-forgot" style={{float: 'right'}} href="">Forgot password</a>
						</FormItem> */}
							<Button type="primary" htmlType="submit" className="login-form-button">
								{localization.getText('txtLogin')}
							</Button>{' '}
						{/* <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => this.props.stores.network.login()} style={{float: 'right'}}>
							Log in with Blockpass
						</Button> */}
					</Form>
				</Spin>
			</Card>
		);
	}
}

export default Form.create()(Login);