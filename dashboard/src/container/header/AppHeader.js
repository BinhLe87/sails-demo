import React, { Component } from 'react';
import { Button, Menu, Dropdown, Layout, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import './styles.scss';

const { Header } = Layout;
const MenuItem = Menu.Item;

@inject('stores')
class AppHeader extends Component {
    @observer
    render() {
        let { network, settings } = this.props.stores;

        const menu = (
            <Menu>
                <MenuItem>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </MenuItem>
                <MenuItem>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </MenuItem>
                <MenuItem onClick={() => network.logout()}>
                    <a target="_blank" rel="noopener noreferrer">Logout</a>
                </MenuItem>
            </Menu>
        );

        return (
            <Header className="header">
                <div className={settings.sidebar_open ? 'headerTitle' : 'headerTitleSmall'}>
                    <div className={settings.sidebar_open ? 'logo' : 'logoSmall'}/>
                </div>
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

export default AppHeader;