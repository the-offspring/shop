<template>
    <div :class="['product', {'product-with-small-price': propsIsSmall}]">
        <img :src="product.image.file.url" :class="['product-img-top']" alt="product image">
        <div class="product-body">
            <h5 class="product-title">{{ product.title }}</h5>
            <div class="product-body-footer">
              <p :class="['product-text', {'product-text-with-small-price': propsIsSmall}]">{{ product.price }} ₽</p>
              <button type="submit" class="buy-button">Купить</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProduct } from '@/types/product';
import { computed } from 'vue';

const props = defineProps<{product: IProduct}>();

const propsIsSmall = computed(() => {
  return props.product.price !== undefined && props.product.price <= 5000;
});

</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    min-height: 340px;
    border: 1px solid #000;
    border-radius: .75rem;
    background-color: #c7c7c7;
}
.product-with-small-price {
  border: 1px solid #027502;
  background-color: #02750241;
}
.product-img-top {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: white;
  border-radius: .75rem .75rem 0 0;
}
.product-title {
  font-size: 1.25rem;
  font-weight: 700;
}
.product-body-footer {
  display: flex;
  justify-content: space-between;
  padding-inline: .413rem;

}
.product-text {
  width: 50%;
  border: 1px solid #939393;
  border-radius: .75rem;
  padding: .188rem .5rem;
  text-align: center;
  font-size: 1rem;
}
.product-text-with-small-price {
  color: #027502;
}
.buy-button {
  height: fit-content;
  width: 30%;
  margin-block: auto;
  border: 1px solid #939393;
  border-radius: .75rem;
  padding: .2rem .5rem;
  text-align: center;
  font-size: 1rem;
  background-color: inherit;
  cursor: pointer;
}
.product-body {
    max-height: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px;
}
h5 {
  margin: 16px 0;
}
</style>