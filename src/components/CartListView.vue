<template>
    <div>
    <Product v-for="product in filteredComputed" :key="product.id" :product="product" />
    </div>
    <div class="search-products" >
        <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getProductsCart } from '../api/cart'
import type { IProduct } from '@/types/product';
import Product from '@/components/ProductView.vue';
import { useUserStore } from '@/stores/profile/accountStore';


const products = ref<IProduct[]>([])
    const userStore = useUserStore()
    const userAccessKey = userStore.userAccessKey.value;

const loadProducts = async (userAccessKey: string) => {
    try {
        const response = await getProductsCart(userAccessKey);
        products.value = response.items;
    } catch (error) {
        console.error(`Error fetching products: ${error.message}`);
    } 
};
</script>
