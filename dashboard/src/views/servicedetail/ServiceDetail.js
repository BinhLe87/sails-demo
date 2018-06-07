import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 18 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 18 },
        sm: { span: 12 },
    },
}

@inject("stores")
class ServiceDetail extends Component {
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
				console.log(JSON.stringify(values));
                handleSubmit && handleSubmit(values);
            }
        });
    }

	@observer
	render() {
		const { getFieldDecorator } = this.props.form;
		const fields = [
			{
				name: 'username',
				title: 'Username:',
				rules: [{
					message: 'must be human name',
					required: true
				}],
				initialValue: 'John Doe',
				customRender: _ => <Input/>
			},
			{
				name: 'email',
				title: 'Email:',
				rules: [{
					type: 'email',
					message: 'must be email'
				}],
				initialValue: '',
				placeholder: 'your email',
				customRender: _ => <Input/>
			},
			{
				name: 'password',
				title: 'Password:',
				rules: [{
					type: 'string',
					message: 'must be 8 letters long',
				}],
				initialValue: '',
				customRender: _ => <Input type="password"/>
			},
		]
		return (
            <Form onSubmit={this._handleSubmit}>
			{
				fields.map((item) => {
					let { name, title, rules, initialValue, customRender, ...extraInfo } = item;
					const displayComp = customRender(initialValue);
					return (
						<FormItem key={name} label={title} {...formItemLayout}>
						{getFieldDecorator(name, {
							rules: rules,
							initialValue: initialValue,
							...extraInfo
						})(displayComp)}
						</FormItem>
					)
				})
			}
				<Button type='primary' htmlType='submit'>
					Start review
				</Button>
			</Form>
		);
	}
}

export default Form.create()(ServiceDetail);