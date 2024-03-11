<template>
    <h5 style="text-align: center;"> Sales </h5>
    <div class="sale-catalog">
        <ul class="list">
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
        </ul>
    </div>
</template>

<style scoped>
.sale-catalog {
    /* background-color: #b8b8b8; */
}
.list {
    display: grid;
    grid-template-columns:  2fr 1fr 1fr 1fr 1fr 1fr;
    gap: 12px;
    list-style-type: none;
    padding: 0;
}
.item {
    width: 80px;
    height: 120px;
    background-color: #d3d2d2;
    border: 1px solid #000;
    border-radius: 12px;
    &:nth-child(6n + 1) {
        width: 100%;
    }
}
</style>