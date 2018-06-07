import ServiceDetail from './views/servicedetail/ServiceDetail';
import Template from './views/template/Template';

export default {
    routes: [
        {
            title: 'Administration',
            icon: 'lock',
            url: '/administration',
            scope: [],
            component: Template
        },
        {
            title: 'Services',
            icon: 'shopping-cart',
            url: '/services',
            childs: [
                {
                    title: 'Add Service',
                    icon: 'plus-circle-o',
                    url: '/services/add',
                    scope: [],
                    component: ServiceDetail
                },
                {
                    title: 'Update Service',
                    icon: 'edit',
                    url: '/services/update',
                    scope: [],
                    component: ServiceDetail
                }
            ]
        },
        {
            title: 'Menu item 3',
            icon: 'user',
            url: '/settings',
            scope: [],
            component: ServiceDetail
        },
        // {
        //     title: 'Menu item 4',
        //     icon: 'user',
        //     url: '/doc',
        //     scope: [],
        //     component: Template
        // },
    ]
};