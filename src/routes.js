export default {
    routes: [
        {
            title: 'Menu item 1',
            icon: 'user',
        },
        {
            title: 'Menu item 2',
            icon: 'pie-chart',
            childs: [
                {
                    title: 'Submenu item 1',
                    icon: 'user',
                    url: '/#'
                },
                {
                    title: 'Submenu item 2',
                    icon: 'user',
                    url: '#/'
                },
                {
                    title: 'Submenu item 3',
                    icon: 'user',
                    url: '^/'
                }
            ]
        },
        {
            title: 'Menu item 3',
            icon: 'user',
            url: '/'
        },
        {
            title: 'Menu item 4',
            icon: 'user',
            url: '/'
        },
    ]
};