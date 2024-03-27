import { computed, ref } from 'vue';
import { getProducts } from '@/api/products';
import type { IProduct } from '@/types/product';
import type { IPagination } from '@/types/pagination';

export const products = ref<IProduct[]>([])
export const pagination = ref<IPagination>({
    page: 1,
    pages: 0,
    total: 0,
})
export const state = ref<boolean>();
export const minPrice = ref<number | null>(null);
export const maxPrice = ref<number | null>(null);
export const searchText = ref('');
    
export const handleSearchinChange = ({ searchText }: { searchText: string }) => {
    loadProducts(1, searchText);
};

export const handlePriceChange = ({ minPrice: newMinPrice, maxPrice: newMaxPrice }: { minPrice: number | null; maxPrice: number | null }) => {
    if (newMinPrice !== null) {
        minPrice.value = newMinPrice;
    }
    if (newMaxPrice !== null) {
        maxPrice.value = newMaxPrice;
    }
};

export const filteredComputed = computed(() => {
    const filteredProducts = products.value.filter(product => {
        if (minPrice.value !== null && product.price < minPrice.value) {
            return false;
        }
        if (maxPrice.value !== null && product.price > maxPrice.value) {
            return false;
        }
        return true;
    });
    return filteredProducts;
});


export const loadProducts = async (page: number, searchText?: string) => {
    try {
        state.value = true;
        const response = await getProducts(page, searchText);
        products.value = response.product;
        pagination.value = response.pagination;
    } catch (error) {
        console.error(`Error fetching products: ${error.message}`);
    } finally {
        setTimeout(()=>{
            state.value = false;
        }, 1000000)
    }
};

export const changePage = async (page: number) => {
    if (page !== pagination.value.page) {
        await loadProducts(page)
    }
}
