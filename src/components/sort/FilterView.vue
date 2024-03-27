<template>
  <div class="filter block-shadow">
    <form class="filter-form">
      <label>Цена от:
        <input class="input-shadow" type="number" name="min-price" @input="updateMinPrice">
      </label>
      <label>Цена до:
        <input class="input-shadow" type="number" name="max-price" @input="updateMaxPrice">
      </label>
      <button type="reset" class="button-ui button-ui_white">Сбросить</button>
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



// const setLimit = (priceLimits: number, event: Event) => {
// priceLimits = parseInt((event.target as HTMLInputElement).value);
// emit('price', priceLimits);
// };

// const minPriceValue = (event: Event) => setLimit(props.minPrice, event);
// const maxPriceValue = (event: Event) => setLimit(props.maxPrice, event);


<style scoped>
@import '/assets/global/variables.scss';

.filter {
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

input {
  height: 2.3rem;
}
</style>