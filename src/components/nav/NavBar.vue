<template>
    <section class="section">
        <div class="logo">
            <img src="/favicon.ico" class="logo-img" alt="Main logo">
        </div>
        <nav>
            <RouterLink to="catalog/products" class="button-ui button-ui_white"> Catalog </RouterLink>
            <RouterLink to="/calc" class="button-ui button-ui_white"> Sale </RouterLink>
        </nav>
        <div class="user">
            <RouterLink to="/" class="button-ui button-ui_white btn-cart"> 
                <div class="cart-icon">
                    <img src="/cart.svg" alt="">
                    <span class="cart-cout" :style="[products.length === 0 ? 'display: none;' : 'display: block;']"> {{ products.length >= 99 ? '+99' : products.length}} </span>
                </div>
                <span class="cart-info">{{ !products.length ? 'Корзина' : fullPrice }}</span>
                <span class="visually-hidden"> Корзина </span>
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useCartStore } from '@/stores/cart/cart';
import { storeToRefs } from 'pinia';

const { products, fullPrice } = storeToRefs(useCartStore());
// var sumCart = ref<number | unknown>(fullPrice);

</script>


<style scoped>
@import '/assets/global/variables.scss';


.section {
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    max-height: 25vh;
    align-items: center;
    /* background-color: #000; */
    border-bottom: 1px solid #000;
    justify-items: center;
    padding: .4rem;

}

.logo-img {
    max-height: 65px;
}

.btn-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .4rem;
    border: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 1.2;
    height: 55px;
    min-width: 65px;
    text-decoration: none;

}

.cart-icon {
    position: relative;
    width: fit-content;
    
}

.cart-cout {
    position: absolute;
    top: -13px;
    right: -37px;
    z-index: 5;
    border-radius: 25px;
    padding: 0.1rem;
    background-color: rgba(189, 189, 189, 0.489);
    min-width: 25px;
    max-width: 32px;
    height: 18px;
    font-size: .8rem;
}

.visually-hidden {
    position: absolute;
    visibility: hidden;
}

.cart-info {
    overflow: hidden;
}
</style>