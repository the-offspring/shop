<template>
  <div class="main">
    <h2>
        Main Pages
    </h2>
    <RouterLink to="catalog/products" > Catalog </RouterLink>
    <RouterLink to="sales" > Sale </RouterLink>

    <div class="container">
        <div class="main__view">
            <RouterView />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}


</style>