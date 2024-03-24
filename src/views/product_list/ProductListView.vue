<template>
        <div class="filter-products" v-if="minPrice !== null && maxPrice !== null">
            <Product v-for="product in filteredComputed" :key="product.id" :product="product" />
        </div>
        <div class="search-products" v-else>

            <Product v-for="product in products" :key="product.id" :product="product" />

        </div>
    <div class="footer-products">
        <AppPagination :total-pages="pagination.pages" :current-page="pagination.page"
            @update:current-page="changePage" />
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/ProductView.vue';
import AppPagination from '@/components/AppPaginationView.vue';

import { minPrice, maxPrice, pagination, filteredComputed, products, changePage } from '@/api/catalog/list';

</script>

<style scoped>
    .filter-products,
    .search-products {
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
    }

    .footer-products {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
    }
</style>