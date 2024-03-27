import { createRouter, createWebHashHistory } from "vue-router";
import main from '../MainView.vue';
import calc from '../views/catalog/CalcView.vue';
import catalog from '../views/catalog/MainCatalogView.vue';
import productsList from '../views/product_list/ProductListView.vue';
import product from '../views/product_list/ProductCardPage.vue';
import notFound from '../components/err/NotFoundView.vue';

const router = createRouter ({
    history: createWebHashHistory('/'),
    routes: [
        {
            name: 'main',
            path: '/',
            component: main,
            children: [
                {
                    name: 'calc',
                    path: '/calc',
                    component: calc,
                },
                {
                    name: 'catalog',
                    path: '/catalog',
                    component: catalog,
                    children: [
                        {
                            name: 'products list',
                            path: 'products',
                            component: productsList,
                        },
                        {
                            name: 'product',
                            path: 'product/:id',
                            component: product                            ,
                        
                        },
                    ]
                },
            ]
        },
        {
            name: 'not-found',
            path: '/:pathMatch(.*)*',
            component: notFound,
        },
    ]
})

export default router