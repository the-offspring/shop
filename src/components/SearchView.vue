<template>
        <form @submit.prevent="sendRequest"  class="search-section block-shadow">
            <div class="form-section_header">
                    <h3>Поиск товара:</h3>
                </div>
                <div class="form-section_body">
                <input class="input-shadow" type="text" :value="searchQuery" @input="updateSearchQuery">
                <button class="button-ui button-ui_white" type="submit">Найти</button>
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
    if (searchQuery.value.trim() !== '') {
        emit('search-product', { searchText: searchQuery.value });
    }
};
</script>


<style scoped>
@import '/assets/global/variables.scss';

.search-section {
    background-color: #f6f6f6;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px;
    /* border: 1px solid #000; */
    border-radius: 12px;
    padding: 15px 12px;
}
.form-section_header {
    h3 {
        margin-top: 0;
    }
}
.form-section_body {
    display: grid;
    grid-template-columns: 6fr .5fr;
    gap: 12px;
    input {
        width: 100%;
    }
    button {
            cursor: pointer;
            width: fit-content;
            height: fit-content;
        }
}
</style>
