import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { message, Spin, Card, Form, Icon, Input, Button, Checkbox, Select, Row, Col } from 'antd';
import './styles.scss';

const FormItem = Form.Item;
const Option = Select.Option;

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
        const languages = [
            { title: 'English', lang_id: 'en', flag: 'http://flags.fmcdn.net/data/flags/w1160/gb.png'},
            { title: 'Japanese', lang_id: 'jp', flag: 'http://flags.fmcdn.net/data/flags/w1160/jp.png'},
            { title: 'French', lang_id: 'fr', flag: 'http://flags.fmcdn.net/data/flags/w1160/fr.png'},
            { title: 'Russian', lang_id: 'ru', flag: 'http://flags.fmcdn.net/data/flags/w1160/ru.png'},
            { title: 'Chinese', lang_id: 'cn', flag: 'http://flags.fmcdn.net/data/flags/w1160/cn.png'},
        ]

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
						<Row>
							<Col className="gutter-box" span={12}>
								<Button type="primary" htmlType="submit" className="fullwidth login-form-button">
									{localization.getText('txtLogin')}
								</Button>
							</Col>
							<Col className="gutter-box" span={12}>
								<Select defaultValue="en" className="fullwidth" onChange={(langID) => localization.changeLanguage(langID)}>
								{
									languages.map((item, idx) => {return (
										<Option key={item.lang_id} value={item.lang_id}><img src={item.flag} style={{width: 16, height: 12}}/> {item.title}</Option>
									)})
								}
								</Select>
							</Col>
						</Row>
					</Form>
				</Spin>
			</Card>
		);
	}
}

export default Form.create()(Login);