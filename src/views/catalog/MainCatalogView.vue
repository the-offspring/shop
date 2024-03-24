<template>
    <h2> Catalog </h2>
    <div class="content">
        <div class="left-layout">
            <Filter :min-price="minPrice" :max-price="maxPrice" @price="handlePriceChange" />
        </div>
        <div class="right-layout">
            <div class="header">
                <Search @search-product="handleSearchinChange" />
            </div>
            <div class="body">
             <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';

import Filter from '@/components/FilterView.vue';
import Search from '@/components/SearchView.vue';

import { minPrice, maxPrice, searchText, loadProducts, handleSearchinChange, handlePriceChange } from '@/api/catalog/list';



watch(searchText, (newVal, oldVal) => {
    loadProducts(1, newVal);
}, { immediate: true });
</script>


<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 30px;
}

.header,
.body,
.footer {
    width: 100%;
}

.right-layout {
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
    flex-direction: column;
    justify-content: flex-start;
}

.left-layout {
    height: 100vh;
}
</style>