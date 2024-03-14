<template>
    <div class="filter">
      <form class="filter-form">
        <label>Цена от:
            <input type="number" name="min-price" @input="updateMinPrice">
        </label>
        <label>Цена до:
            <input type="number" name="max-price" @input="updateMaxPrice">
        </label>
        <button type="reset">Сбросить</button>
      </form>
    </div>
  </template>
  
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ minPrice: number | null, maxPrice: number | null }>();
const emit = defineEmits(['price']);

const updateMinPrice = (event: Event) => {
  const minPrice = parseInt((event.target as HTMLInputElement).value);
  emit('price', { minPrice });
};

const updateMaxPrice = (event: Event) => {
  const maxPrice = parseInt((event.target as HTMLInputElement).value);
  emit('price', { maxPrice });
};
</script>

  
  
//   const setLimit = (priceLimits: number, event: Event) => {
//       priceLimits = parseInt((event.target as HTMLInputElement).value);
//       emit('price', priceLimits);
//   };
  
//   const minPriceValue = (event: Event) => setLimit(props.minPrice, event);
//   const maxPriceValue = (event: Event) => setLimit(props.maxPrice, event);
  

<style scoped>
.filter {
    border: 1px solid #000;
    border-radius: 12px;
    padding: 15px 12px;
}

.filter-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    button {
        width: 45%;
    }
}
</style>