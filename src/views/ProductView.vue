<template>
    <div :class="['product']">
        <img :src="product.image.file.url" :class="['product-img-top']" alt="product image">
        <div class="product-body">
            <h5 class="product-title">{{ product.title }}</h5>
            <p :class="['product-text']">{{ product.price }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProduct } from '@/types/product';

const props = defineProps<{product: IProduct}>()

</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    min-height: 340px;
    border: 1px solid #000;
    border-radius: 6px;
    background-color: #c7c7c7;
}

.product-with-small-price {
  border: 1px solid #027502;
}
img {
  width: max-content;
}
.product-img-top {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: white;
  border-radius: 6px 6px 0 0;
}
.product-title {
  font-size: 1.25rem;
  font-weight: 700;
}
.product-text {
  font-size: 1rem;
}
.product-text-with-small-price {
  color: #027502;
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