import React, { Component } from 'react';
import { Button, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';
import { Switch } from 'react-router-dom';

import AppHeader from './header/AppHeader';
import AppDrawer from './drawer/AppDrawer';
import AppFooter from './footer/AppFooter';
// footer import

import './style.scss';

const { Header, Content, Sider, Footer } = Layout;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    render() {
        return (
            <Layout>
                <AppDrawer/>
                <Layout>
                    <AppHeader title="Header title"/>
                    <div>
                        <Content className="content">
                            <Switch>
                            </Switch>
                        </Content>
                    </div>
                    <AppFooter/>                
                </Layout>
            </Layout>
        )
    }
}

export default observer(Container);