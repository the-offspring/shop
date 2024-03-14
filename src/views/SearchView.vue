<template>
        <form @submit.prevent="sendRequest"  class="search-section">
            <div class="form-section_left">
                <label>
                    <h3>Поиск товара:</h3>
                </label>
                <input type="text" :value="searchQuery" @input="updateSearchQuery">
            </div>
            <div class="form-section_right">
                <button type="submit">Найти</button>
            </div>
        </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['search-product']);

const searchQuery = ref<string>('');

const updateSearchQuery = (event: Event) => {
    searchQuery.value = (event.target as HTMLInputElement).value;
};

const sendRequest = () => {
    console.log('Search query:', searchQuery.value);
    if (searchQuery.value.trim() !== '') {
        emit('search-product', { searchText: searchQuery.value });
    }
};
</script>


<style scoped>
.search-section {
    width: 96.5%;
    display: grid;
    grid-template-columns: 6fr .5fr;
    gap: 12px;
    border: 1px solid #000;
    border-radius: 12px;
    padding: 15px 12px;
}
.form-section_left {
    display: flex;
    flex-direction: column;
    
    label {
        
    }
    input {
        width: 100%;
    }
}
.form-section_right {
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
        button {
            cursor: pointer;
            width: fit-content;
            height: fit-content;
        }
}
</style>
