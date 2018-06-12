import React, { Component } from 'react';
import { Button, Input, Menu, Dropdown, Layout, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { drawerConfig } from '../../routes';
import { observable } from 'mobx';

const { Sider } = Layout;
const { SubMenu } = Menu;

class MenuItem extends Component {
    render() {
        let menuItem = this.props.item;

        if (menuItem.childs && menuItem.childs.length > 0) {
            return (
                <SubMenu title={<span><Icon type={menuItem.icon || ''}/><span>{menuItem.title}</span></span>} {...this.props}>
                {
                    menuItem.childs.map((item, idx) => {
                        return (
                            <Menu.Item key={item.title}>
                                <Link to={item.url || '#'} replace>
                                    <Icon type={item.icon || '/'}/>
                                    <span>{item.title}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })
                }
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item {...this.props}>
                    <Link to={menuItem.url || '/'} replace>
                        <Icon type={menuItem.icon || ''}/>
                        <span>{menuItem.title}</span>
                    </Link>
                </Menu.Item>
            )
        }
    }
}

@inject('stores')
class AppDrawer extends Component {
    constructor(props) {
        super(props);
    }

    @observer
    render() {
        let { settings } = this.props.stores;
        let _this = this;
        
        return (
            <Sider className="drawer" trigger={null} collapsible collapsed={!settings.sidebar_open}>
                <Menu theme="light" mode="inline">
                {
                    drawerConfig.map((item, idx) => {
                        return <MenuItem key={item.title} item={item}/>
                    })
                }
                </Menu>
            </Sider>
        )
    }
}

export default AppDrawer;