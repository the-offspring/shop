<template>
  <header>
    <NavBar />
  </header>

  <main>
    <div class="container">
        <RouterView />
    </div>

  </main>

  <footer>

  </footer>
</template>

<script setup lang="ts">
import NavBar from './components/nav/NavBar.vue'
</script>

<style lang="scss">
@import '/assets/global/variables.scss';
</style>
