import { computed, ref } from "vue";
import type { IProduct } from '@/types/product'
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', ()=>{
    const products = ref<IProduct[]>([]);
    const fullPrice = computed(()=> {
        return products.value.reduce((sum, product)=> sum + product.price, 0) 
    })
    function addCart (product: IProduct) {
        products.value.push(product)
    }
    function removeFromeCart (product: IProduct) {
        const index = products.value.indexOf(product)
        products.value.splice(index, 1)
    }
    function hasProductInCart (product: IProduct) {
        products.value.find(item => item.id === product.id)
    }

    return {
        products,
        fullPrice,
        addCart,
        removeFromeCart,
        hasProductInCart,
    }
})