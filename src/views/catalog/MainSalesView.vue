<template>
    <div class="content">
        <div class="deposit-calculator">
            <h2 class="deposit-calculator__title">Доход</h2>
            <div class="deposit-calculator__input-group">
                <label for="input-months" class="deposit-calculator__label">Количество месяцев:</label>
                <input id="input-months" v-model.number="inputData.months" type="text"
                    class="deposit-calculator__input deposit-calculator__input_size-small" inputmode="numeric"
                    pattern="[0-9]*" @blur.stop.prevent="addSymbolToEnd($event, ' мес.')" />
            </div>
            <div class="deposit-calculator__input-group">
                <label for="input-percent" class="deposit-calculator__label">Процентная ставка вклада:</label>
                <input id="input-percent" v-model.number="inputData.percent" type="text"
                    class="deposit-calculator__input deposit-calculator__input_size-small" inputmode="numeric"
                    pattern="[0-9]*" @blur.stop.prevent="addSymbolToEnd($event, ' %')" />
            </div>
            <div class="deposit-calculator__input-group">
                <label for="input-income" class="deposit-calculator__label">Сумма вклада:</label>
                <input id="input-income" v-model.number="inputData.amount" type="text"
                    class="deposit-calculator__input deposit-calculator__input_size-small" inputmode="numeric"
                    pattern="[0-9]*" @blur.stop.prevent="addSymbolToEnd($event, ' ₽')"/>
            </div>
            <hr class="deposit-calculator__divider" />
            <div class="deposit-calculator__output">
                <div class="deposit-calculator__output-item">
                    <span class="deposit-calculator__output-label">Доход:</span>
                    <span class="deposit-calculator__output-value">
                        {{ calculateIncome }} ₽
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';

const inputData = ref<{
    amount: number | undefined,
    months: number | undefined,
    percent: number | undefined,
}>(
    {
        amount: undefined,
        months: undefined,
        percent: undefined,
    });
    const addSymbolToEnd = (event: Event, symbol: string) => {
        if (event && event.target) {
            const input = event.target as HTMLInputElement;
            const value = input.value;
            if (!value.endsWith(symbol)) {
                input.value = value + symbol;
            }
        }
};


const calculateIncome = computed(() => {
    if (!inputData.value) {
        return 0;
    }
    const { amount, months, percent } = inputData.value;
    if (amount === undefined || months === undefined || percent === undefined) {
        return 0;
    } else {
        const depositPeriod = (months: number) => {
            const currentDate = new Date();
            const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + months);
            const differenceInMilliseconds = futureDate.getTime() - currentDate.getTime();
            const days = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
            return days;
        };
        const totalInterest = ((amount * percent / 365 * depositPeriod(months)) / 100).toFixed(2);
        const formattedInterest =  new Intl.NumberFormat('ru-RU').format(Number(totalInterest));
        return formattedInterest;
    }

});
// Функция для сброса к дефолтным значениям
const resetCalculator = () => {
    window.removeEventListener('scroll', checkScroll);
    inputData.value = {
        amount: undefined,
        months: undefined,
        percent: undefined,
    };
};

const checkScroll = () => {
    if (window.scrollY > 600) {
        resetCalculator();
    }
};

window.addEventListener('scroll', checkScroll);

</script>

<style scoped>
.content {
    width: 100%;
    min-height: 180vh;
}
.deposit-calculator {
    background-color: #f6f6f6;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    min-width: 600px;
    max-width: 750px;
    margin: auto;
    margin-top: 3rem;
}

.deposit-calculator__title {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
    text-align: center;
}

.deposit-calculator__input-group {
    display: flex;
    /* max-height: 3rem; */
    justify-content: space-between;
    margin-bottom: 15px;
}

.deposit-calculator__label {
    font-size: 1.1rem;
    color: #000;
}

.deposit-calculator__input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    font-size: 1.1rem;
}

/* .deposit-calculator__input_size-large {
    height: 50px;
} */

.deposit-calculator__input_size-small {
    height: 35px;
}

.deposit-calculator__divider {
    border: none;
    height: 1px;
    background-color: #ccc;
    margin: 1rem 0;
}

.deposit-calculator__output {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.3rem;
}

.deposit-calculator__output-label {
    margin-right: 1rem;
    color: #000;
}

.deposit-calculator__output-value {
    color: green;
}
</style>