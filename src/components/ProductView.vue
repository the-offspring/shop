<template>
  <div :class="['product', { 'product-with-small-price': propsIsSmall }, 'block-shadow']">
    <img :src="product.image.file.url" :class="['product-img-top']" alt="product image">
    <div class="product-body">
      <RouterLink :to="{ name: 'product', params: { id: dynamicProductId } }">
        <h5 class="product-title">{{ product.title }}</h5>
      </RouterLink>
      <div class="product-body-footer">
        <p :class="['product-text', { 'product-text-with-small-price': propsIsSmall }]">{{ product.price }} ₽</p>
        <button @click="addCart(props.product), handleClick" :class="['button-ui button-ui_white btn', {'button-ui_passive': handleClick}]">Купить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import type { IProduct } from '@/types/product';
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart/cart';

var isClicked = ref<boolean>(false);
const props = defineProps<{ product: IProduct }>();
const dynamicProductId = props.product.id;
const {addCart} = useCartStore();
const handleClick = () => {
  isClicked.value = !isClicked.value;
  console.log('handleClick', isClicked.value);
};
const propsIsSmall = computed(() => {
  return props.product.price !== undefined && props.product.price <= 5000;
});
</script>

<style scoped>
@import '/assets/global/variables.scss';
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24%;
  min-height: 23.75rem;
  max-height: max-content;

  border-radius: .75rem;
  background-color: #cfcfcf;
}

.product-with-small-price {
  box-shadow: rgba(2, 117, 2, 0.32) 0px 8px 24px;
  background-color: #77cd7741;
}

.product-img-top {
  width: 100%;
  height: 200px !important;
  object-fit: contain;
  overflow: hidden;
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
  align-items: center;
  height: 2.7rem;
}

.product-text {
  width: 50%;
  box-shadow: rgba(147, 147, 147, 0.42) 0px 1px 3px;
  border-radius: .75rem;
  padding: .188rem .5rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
}

.product-text-with-small-price {
  color: #027502;
  font-size: 1.15rem;
}

.product-body {
  max-height: max-content;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.625rem;
}

h5 {
  margin: 1rem 0;
}

.btn {
  min-width: 35%;
  height: 35px;
  padding: 0 5px;
}
</style>