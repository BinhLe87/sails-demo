import ServiceDetail from './views/servicedetail/ServiceDetail';
import Template from './views/template/Template';

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
                title: 'Update Service',
                icon: 'edit',
                url: '/services/update'
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
        url: '/services/add',
        scope: [],
        component: ServiceDetail
    },
    {
        url: '/services/update',
        scope: [],
        component: ServiceDetail
    }
]