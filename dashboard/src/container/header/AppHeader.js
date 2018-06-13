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
        let { network, settings, localization } = this.props.stores;
        const languages = [
            { title: 'English', lang_id: 'en', flag: 'http://flags.fmcdn.net/data/flags/w1160/gb.png'},
            { title: 'Japanese', lang_id: 'jp', flag: 'http://flags.fmcdn.net/data/flags/w1160/jp.png'},
            { title: 'French', lang_id: 'fr', flag: 'http://flags.fmcdn.net/data/flags/w1160/fr.png'},
            { title: 'Russian', lang_id: 'ru', flag: 'http://flags.fmcdn.net/data/flags/w1160/ru.png'},
            { title: 'Chinese', lang_id: 'cn', flag: 'http://flags.fmcdn.net/data/flags/w1160/cn.png'},
        ]

        const menu = (
            <Menu>
            {
                languages.map((item, idx) => {return (
                    <MenuItem key={idx} onClick={() => localization.changeLanguage(item.lang_id)}>
                        <div>
                            <img style={{width: 16, height: 12}} src={item.flag}/>
                            {
                                localization.current_language == item.lang_id ? <a> {item.title}</a> : <span> {item.title}</span>
                            }
                        </div>
                    </MenuItem>
                )})
            }
                <Menu.Divider/>
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