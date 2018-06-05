import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

@inject("stores")
class Template extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	@observer
	render() {
		return (
            <div>
				<Card loading={this.state.loading} title="Card title">
				Whatever content
				</Card>
				<Button onClick={this.handleClick} style={{ marginTop: 16 }}>Toggle loading</Button>
			</div>
		);
	}
}

export default Template;