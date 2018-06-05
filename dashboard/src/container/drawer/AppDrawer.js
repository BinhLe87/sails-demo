import React, { Component } from 'react';
import { Button, Input, Menu, Dropdown, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './styles.scss';
import routes from '../../routes';

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
                                    <Link to={item.url || '#'}>
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
                    <Link to={menuItem.url || '/'}>
                        <Icon type={menuItem.icon || ''}/>
                        <span>{menuItem.title}</span>
                    </Link>
                </Menu.Item>
            )
        }
    }
}

class AppDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    render() {
        let _this = this;
        let _routes = routes.routes;
        
        return (
            <Sider className="drawer" trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className={this.state.collapsed ? "logoSmall" : "logo"} onClick={() => _this.setState({collapsed: !_this.state.collapsed})}/>
                <Menu theme="light" mode="inline">
                {
                    _routes.map((item, idx) => {
                        return <MenuItem key={item.title} item={item}/>
                    })
                }
                </Menu>
            </Sider>
        )
    }
}

export default observer(AppDrawer);