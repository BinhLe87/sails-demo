import ServiceDetail from './views/servicedetail/ServiceDetail';
import Template from './views/template/Template';
import ServiceList from './views/services/ServiceList';
import ServiceUpdate from './views/serviceupdate/ServiceUpdate';

export const drawerConfig = [
    {
        title: 'Administration',
        icon: 'lock',
        url: '/administration'
    },
    {
        title: 'Services',
        icon: 'shopping-cart',
        childs: [
            {
                title: 'Add Service',
                icon: 'plus-circle-o',
                url: '/services/add'
            },
            {
                title: 'Detail Service',
                icon: 'edit',
                url: '/services/detail'
            },
            {
                title: 'List Services',
                icon: 'profile',
                url: '/services/list',
            }
        ]
    }
]

export const routeConfig = [
    {
        url: '/administration',
        scope: [],
        component: Template
    },
    {
        url: '/services/list',
        scope: [],
        component: ServiceList
    },
    {
        url: '/services/add',
        scope: [],
        component: ServiceDetail
    },
    {
        url: '/services/detail',
        scope: [],
        component: ServiceDetail
    },
    {
        url: '/services/update',
        scope: [],
        component: ServiceUpdate
    },
]