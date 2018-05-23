import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './styles.scss';

const FormItem = Form.Item;

class Login extends Component {
  render() {
    let { network, settings } = this.props.stores;

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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
      </Card>
    );
  }
}

export default observer(Login);
