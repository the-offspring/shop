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
                <div class="filter-products" v-if="minPrice !== null && maxPrice !== null">
                    <Product v-for="product in filteredComputed" :key="product.id" :product="product" />
                </div>
                <div class="search-products" v-else>
                    <Product v-for="product in products" :key="product.id" :product="product" />
                </div>

            </div>
            <div class="footer">
                <AppPagination :total-pages="pagination.pages" :current-page="pagination.page"
                    @update:current-page="changePage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { getProducts } from '@/api/products';
import type { IProduct } from '@/types/product';
import type { IPagination } from '@/types/pagination';
import Product from '../ProductView.vue';
import AppPagination from '../AppPaginationView.vue';
import Filter from '../FilterView.vue'
import Search from '../SearchView.vue'


const products = ref<IProduct[]>([])
const pagination = ref<IPagination>({
    page: 1,
    pages: 0,
    total: 0,
})

const minPrice = ref<number | null>(null);
const maxPrice = ref<number | null>(null);
const searchText = ref('');

const handleSearchinChange = ({ searchText }: { searchText: string }) => {
    console.log('Оправленный запрос на поиск:', searchText);

    loadProducts(1, searchText);
};

const handlePriceChange = ({ minPrice: newMinPrice, maxPrice: newMaxPrice }: { minPrice: number | null; maxPrice: number | null }) => {
    if (newMinPrice !== null) {
        minPrice.value = newMinPrice;
    }
    if (newMaxPrice !== null) {
        maxPrice.value = newMaxPrice;
    }
};

const filteredComputed = computed(() => {
    const filteredProducts = products.value.filter(product => {
        if (minPrice.value !== null && product.price < minPrice.value) {
            return false;
        }
        if (maxPrice.value !== null && product.price > maxPrice.value) {
            return false;
        }
        return true;
    });
    console.log('Filtered products:', filteredProducts);
    return filteredProducts;
});


const loadProducts = async (page: number, searchText?: string) => {
    try {
        const response = await getProducts(page, searchText);
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

watch(searchText, (newVal, oldVal) => {
    loadProducts(1, newVal);
}, {immediate: true});
</script>


<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 15px;
}

.header {
    width: 100%;
}

.right-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    .body {
        .filter-products,.search-products {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }
    }

    .footer {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
    }
}

.left-layout {
    height: 100vh;
}
</style>@/api/products