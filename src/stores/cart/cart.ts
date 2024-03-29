import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { IProduct } from '@/types/product'
import { useUserStore } from "../profile/accountStore";

export const useCartStore = defineStore('cart', ()=>{
    const { user } = useUserStore();
    const products = ref<IProduct[]>([]);
    const fullPrice = computed(()=> {
        const all = products.value.reduce((sum, product)=> sum + product.price, 0).toFixed(2) ;
        console.log(all)
        if (user.authorized && user.discont !== 0) {
            console.log(all)
            return Number(all) * user.discont;
        }
        return all;
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