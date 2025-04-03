import template from './my-first-page.html.twig';

Shopware.Component.register('my-first-page', {
    template,
    
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                    status: 'active',
                    createdAt: '2023-01-15'
                },
                {
                    id: 2,
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                    status: 'inactive',
                    createdAt: '2023-02-20'
                },
                {
                    id: 3,
                    name: 'Carol Williams',
                    email: 'carol@example.com',
                    status: 'active',
                    createdAt: '2023-03-10'
                },
                {
                    id: 4,
                    name: 'Dave Brown',
                    email: 'dave@example.com',
                    status: 'active',
                    createdAt: '2023-04-05'
                },
                {
                    id: 5,
                    name: 'Eve Davis',
                    email: 'eve@example.com',
                    status: 'inactive',
                    createdAt: '2023-05-18'
                }
            ],
            columns: [
                { property: 'id', label: 'ID', rawData: true },
                { property: 'name', label: 'Name', rawData: true },
                { property: 'email', label: 'Email', rawData: true },
                { property: 'status', label: 'Status', rawData: true },
                { property: 'createdAt', label: 'Created At', rawData: true }
            ],
            showUserDetails: false,
            selectedUser: {}
        };
    },
    
    methods: {
        onViewDetails(user) {
            this.selectedUser = user;
            this.showUserDetails = true;
        },
        
        closeUserDetails() {
            this.showUserDetails = false;
            this.selectedUser = {};
        }
    }
});
