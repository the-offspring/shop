import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter ({
    history: createWebHashHistory('/'),
    routes: [
        {
            name: 'main',
            path: '/main',
            component: ( ) => import('../views/MainView.vue'),
            children: [
                {
                    name: 'sales',
                    path: 'sales',
                    component: ( ) => import('../views/catalog/MainSalesView.vue'),
                },
                {
                    name: 'catalog',
                    path: 'catalog',
                    component: ( ) => import('../views/catalog/MainCatalogView.vue'),
                },
            ]
        },
        {
            name: 'settings',
            path: '/settings',
            component: ( ) => import('../views/SettingsView.vue'),
        },
        {
            name: 'product',
            path: '/product/:id',
            component: ( ) => import('../views/ProductView.vue'),
        },
        {
            name: 'not-found',
            path: '/:pathMatch(.*)*',
            component: ( ) => import('../components/err/NotFoundView.vue'),
        },
    ]
})

export default router