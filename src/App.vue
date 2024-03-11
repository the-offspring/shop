
<template>
<div class="container">
  <header class="header">
    <RouterLink to="/main/">main page</RouterLink>
    <RouterLink to="/settings">settings page</RouterLink>
  </header>
  <h1>Progect Page</h1>
  <RouterView />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';






// const user = {
//   isManager: true,
// }

// const routerToSettings = () => {
//   if (user.isManager) {

//   } else {

//   }

// }




// import type { IProduct } from './types/product';

// const progectName = ref< null | string >(null);
// progectName.value = 'Shop';

// const props = defineProps<{ product: IProduct, }>();
// const emit = defineEmits<{ (name: 'set-product', product: IProduct, ):void
  
// }>();

</script>

<style scoped>
body {
  background-color: #e1e1e1;
}

.container {
  width: 95%;
  margin-inline: auto;
}

.header {
  display: flex;
  gap: 12px;
}
</style>
