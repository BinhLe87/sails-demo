import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

@inject("stores")
class Template extends Component {
	constructor(props) {
		super(props);
	}

	@observer
	render() {
		return (
            <div>
                <a>Hello world</a>
            </div>
		);
	}
}

export default Template;