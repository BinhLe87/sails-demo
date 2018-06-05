import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

@inject("stores")
class ServiceDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	@observer
	render() {
		return (
            <div>
			</div>
		);
	}
}

export default ServiceDetail;