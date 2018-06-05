import React, { Component } from 'react';
import { Button, Menu, Dropdown, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';
import './styles.scss';

const { Footer } = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <span>Copyright Blockpass @2018
                </span>
            </Footer>
        )
    }
}

export default AppFooter;