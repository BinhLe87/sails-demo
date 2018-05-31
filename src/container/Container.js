import React, { Component } from 'react';
import { Button, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';

import AppDrawer from './drawer/AppDrawer';
import AppHeader from './header/AppHeader';
// footer import

import './style.scss';

const { Header, Sider, Footer } = Layout;

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
                    <label>Main</label>
                    <Footer>
                        <label>Footer</label>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default observer(Container);