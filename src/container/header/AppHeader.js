import React, { Component } from 'react';
import { Button, Menu, Dropdown, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';
import './styles.scss';

const { Header } = Layout;

class AppHeader extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header className="header">
                <label className="headerText">{this.props.title}</label>
                <div className="headerMenu">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button className="ant-dropdown-link" href="#" shape="circle" size="large">
                            <Icon type="user" />
                        </Button>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}

export default observer(AppHeader);