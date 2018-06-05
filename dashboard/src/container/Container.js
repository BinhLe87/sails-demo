import React, { Component } from 'react';
import { Button, Layout, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import { Link, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import AppHeader from './header/AppHeader';
import AppDrawer from './drawer/AppDrawer';
import AppFooter from './footer/AppFooter';
// footer import

import './styles.scss';
import routes from '../routes';

const { Header, Content, Sider, Footer } = Layout;

function recursiveFind(url, route) {
    // console.log('recursive', url, route.url);
    if (route.url == url) {
        // console.log('found', route.title);
        return [{title: route.title, url: route.url}];
    } else if (route.childs != null && 
        route.childs != undefined && 
        Array.isArray(route.childs) && 
        route.childs.length > 0) 
    {
        for (let i = 0; i < route.childs.length; i++) {
            let res = recursiveFind(url, route.childs[i]);
            if (Array.isArray(res)) return [{title: route.title, url: route.url}, ...res];
        }
        // console.log('why here')
        return '';
    }
}

function breadCrumbRender(currentPath) {
    let path = [];
    // console.log(routes.routes)
    for (let i = 0; i < routes.routes.length; i++) {
        let _p = recursiveFind(currentPath, routes.routes[i]);
        if (_p != '' && _p != undefined) {
            path = _p.slice(0);
        }
    }

    return (
        <div className="breadcrumb">
        {
            path.map((item, idx) => {
                let isFirstItem = idx == 0;
                let isLastItem = idx == path.length - 1;
                return <span key={idx} className={isLastItem ? 'breadcrumbCurrent' : 'breadcrumbPrevious'}>{isFirstItem ? item.title : ' > ' + item.title}</span>
            })
        }
        <hr/>
        </div>
    );
}

@inject('stores')
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    @observer
    render() {
        let { network } = this.props.stores;
        let _routes = routes.routes;
        return (
            <Layout>
                <AppDrawer/>
                <Layout>
                    <AppHeader title="Header title"/>
                    <div>
                        <Content className="content">
                            {breadCrumbRender(this.props.location.pathname)}
                            <Switch>
                            {
                                _routes.filter(route => network.hasPermission(route.scope))
                                    .map((route, idx) => (
                                        <Route exact key={idx} path={route.url} component={route.component}/>
                                    )) 
                            }
                            </Switch>
                        </Content>
                    </div>
                    <AppFooter/>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Container);