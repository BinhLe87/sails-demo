import React, { Component } from 'react';
import { Button, Menu, Dropdown, Layout, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import './styles.scss';

const { Footer } = Layout;

@inject('stores')
class AppFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <span>{this.props.stores.localization.getText('txtCopyright')}
                </span>
            </Footer>
        )
    }
}

export default AppFooter;