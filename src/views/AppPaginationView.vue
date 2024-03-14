<template>
    <div class="paginator">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button
         v-for="page in totalPages"
         :key="page"
         @click="goToPage(page)"
         :class="{ 'active': currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>
  
<script setup lang="ts">
  const props = defineProps<{ totalPages: number, currentPage: number, }>()
  
  
  const emit = defineEmits(["update:current-page"])
  
  const prevPage = () => {
    if (props.currentPage > 1) {
        goToPage(props.currentPage - 1)
    }
  };
  
  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
        goToPage(props.currentPage + 1)
    }
  };
  
  const goToPage = (page: number) => { emit("update:current-page", page) };
</script>
  
<style scoped>
.paginator {
    display: flex;
    justify-content: center;
    margin-top: 8vh;
    margin-bottom: 3vh;
}
  .active {
    background-color: #007bff;
    color: #fff;
  }
  button {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
</style>