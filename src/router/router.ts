import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter ({
    history: createWebHashHistory('/'),
    routes: [
        {
            name: 'main',
            path: '/',
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
                    children: [
                        {
                            name: 'products list',
                            path: '/products',
                            component: ( ) => import('../views/product_list/ProductListView.vue'),
                        },
                        {
                            name: 'product',
                            path: '/product/:id',
                            component: ( ) => import('../views/product_list/ProductCardPage.vue'),
                        
                        },
                    ]
                },
            ]
        },
        {
            name: 'not-found',
            path: '/:pathMatch(.*)*',
            component: ( ) => import('../components/err/NotFoundView.vue'),
        },
    ]
})

export default router