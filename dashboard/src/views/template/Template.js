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
			loading: false
		}
	}

	@observer
	render() {
		return (
            <div>
				<Card loading={this.state.loading} title="Guess what?">
					<img src="https://i1.wp.com/www.davishousecac.org/wp-content/uploads/2016/12/UNDER-CONSTRUCTION-kids.png" style={{width: '100%'}}/>
				</Card>
			</div>
		);
	}
}

export default Template;