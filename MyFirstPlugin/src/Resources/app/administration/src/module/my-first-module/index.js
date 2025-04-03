import './page/my-first-page';

Shopware.Module.register('my-first-module', {
    type: 'plugin',
    name: 'My First Module',
    title: 'My First Module',
    description: 'Description of my first module',
    color: '#ff3d58',
    
    routes: {
        list: {
            component: 'my-first-page',
            path: 'list'
        }
    },

    navigation: [{
        id: 'my-first-module',
        label: 'My First Module',
        color: '#ff3d58',
        path: 'my.first.module.list',
        icon: 'default-shopping-paper-bag-product',
        parent: 'sw-catalogue',
        position: 100
    }]
});

