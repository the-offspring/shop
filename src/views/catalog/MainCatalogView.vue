<template>
    <h2> Catalog </h2>
    <div class="catalog">
   <Product 
        v-for="product in products"
        :key="product.id"
        :product="product"
   />
    </div>
    <AppPagination 
        :total-pages="pagination.pages"
        :current-page="pagination.page"
        @update:current-page="changePage"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getProducts } from '@/api/product';
import type { IProduct } from '@/types/product';
import type { IPagination } from '@/types/pagination';
import Product from '../ProductView.vue';
import AppPagination from '../AppPaginationView.vue';


const products = ref<IProduct[]>([])
const pagination = ref<IPagination>({
    page: 1,
    pages: 0,
    total: 0,
})

const loadProducts = async (page: number) => {
  try {
    const response = await getProducts(page);
    products.value = response.product;
    pagination.value = response.pagination;
  } catch (error) {
    console.error(`Error fetching products: ${error.message}`);
  }
};


const changePage = async (page: number) => {
    if (page !== pagination.value.page) {
        await loadProducts(page)
    }
}

loadProducts(pagination.value.page)
</script>

<style scoped>
.catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}
/* .list {
    list-style-type: none;
    padding: 0;
}
.item {
    width: 80px;
    height: 120px;
    background-color: #d3d2d2;
    border: 1px solid #000;
    border-radius: 12px;
    &:nth-child(6n + 2) {
        width: 100%;
    }
} */
</style>