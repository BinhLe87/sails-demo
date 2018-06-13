import React, { Component } from 'react';
import { Button, Menu, Dropdown, Layout, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import './styles.scss';

const { Footer } = Layout;

@inject('stores')
class AppFooter extends Component {
    @observer
    render() {
        const {localization} = this.props.stores;
        let txt = localization.getText('txtCopyright')
        return (
            <Footer style={{ textAlign: 'center' }}>
                <span>{txt}
                </span>
            </Footer>
        )
    }
}

export default AppFooter;