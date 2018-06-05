import Template from './views/template/Template';

export default {
    routes: [
        {
            title: 'Menu item 1',
            icon: 'user',
            url: '/',
            scope: [],
            component: Template
        },
        {
            title: 'Menu item 2',
            icon: 'pie-chart',
            url: '/user',
            childs: [
                {
                    title: 'Submenu item 1',
                    icon: 'user',
                    url: '/user/1',
                    scope: [],
                    component: Template
                },
                {
                    title: 'Submenu item 2',
                    icon: 'user',
                    url: '/user/2',
                    scope: [],
                    component: Template
                },
                {
                    title: 'Submenu item 3',
                    icon: 'user',
                    url: '/user/3',
                    scope: [],
                    component: Template
                }
            ]
        },
        {
            title: 'Menu item 3',
            icon: 'user',
            url: '/settings',
            scope: [],
            component: Template
        },
        {
            title: 'Menu item 4',
            icon: 'user',
            url: '/doc',
            scope: [],
            component: Template
        },
    ]
};