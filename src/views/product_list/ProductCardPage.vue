<template>
  <div class="product-card-top product-card-top_full" v-if="product">
    <h1 class="product-card-top__title">{{ product.title }}</h1>
    <div class="product-card-top__name">{{ product.title }}</div>
    <div class="product-card-top__images">
      <div class="product-imgs">
        <img :src="product.image.file.url" class="product-imags__main-img" alt="product main image">
      </div>
    </div>
    <div class="product-card-top__specs">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa maxime repellendus impedit corrupti explicabo
      blanditiis quae accusantium, consectetur nostrum reiciendis expedita optio iure dolorem omnis nobis dicta
      distinctio. Maiores, ex!
    </div>
    <div class="product-card-top__stat">
      <a class="product-card-top__rating" href="#">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        716
      </a>
    </div>
    <div class="product-card-top__buy">
      <div class="product-buy product-buy_one-line">
        <div class="product-buy__price-wrap product-buy__price-wrap_interactive">
          <div class="product-buy__price product-buy__price_active">
            {{ product.price }}&nbsp;₽
            <span class="product-buy__prev">{{ calculateValue(product.price, 'discount') }}</span>
          </div>
          <div class="product-buy__sub">{{ calculateValue(product.price, 'monthlyPayment') }}&nbsp;₽/ мес.</div>
        </div>
        <button class="button-ui button-ui_passive">Купить</button>
      </div>
    </div>
    <div class="product-card-top__code">Код товара: {{ product.id }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getOneProduct } from '@/api/products';
import type { IProduct } from '@/types/product';

const productId = ref<number | null>(null);
const product = ref<IProduct | null>(null);
const route = useRoute();

const calculateValue = (count: number | null, type: string) => {
  if (count !== null) {
    const price = count;
    if (type === 'monthlyPayment') {
      return ((price + price * 0.1) / 6).toFixed(2);
    } else if (type === 'discount') {
      return (price + price * 0.3).toFixed(2);
    }
  } else {
    console.error('Product or count is null');
    return null;
  }
};

const loadProduct = async (id: number | null) => {
  try {
    if (id !== null) {
      const response = await getOneProduct(id);
      product.value = response;
    }
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`);
  }
};

onMounted(() => {
  const routeParams = route.params;
  if (routeParams && routeParams.id) {
    const id = Array.isArray(routeParams.id) ? routeParams.id[0] : routeParams.id;
    productId.value = parseInt(id);
  }

  loadProduct(productId.value);
});
</script>


<style scoped>
@import url(/assets/global/variables.scss);
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');


.product-card-top_full {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px 0px;
  border-radius: 8px;
}

.product-card-top_full {
  padding: 0px 24px 24px;
}

.product-card-top {
  position: relative;
}

.product-card-top_full {
  display: grid;
  grid-template-areas:
    "header header"
    "left spec-brand"
    "left stat"
    "left info"
    "left buy"
    "left add-sales"
    "left free";
  grid-template-columns: auto 530px;
  grid-template-rows: repeat(5, auto) 1fr;
  margin-bottom: 20px;
}

.product-imags__main-img {
  aspect-ratio: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  width: auto;
}

.product-card-top__title {
  background-color: rgb(246, 246, 246);
  font: 700 32px/1 'Montserrat', sans-serif;
  margin-block-start: 0;
  margin-left: -34px;

  margin-bottom: 34px;
  padding: 10px 24px;
  width: calc(100% + 52px);
  word-break: break-word;
  grid-area: header;
}

.product-card-top__name {
  display: none;
}

.product-card-top__images {
  margin-right: 32px;
  padding-bottom: 35px;
}

.product-imgs {
  height: 350px;
}

.product-card-top__buy {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px;
  border-radius: 11px;
  margin-bottom: 24px;
  min-height: 80px;
  padding: 16px 12px;
}

.product-card-top__buy .product-buy,
.product-buy_one-line,
.product-buy {
  display: flex;
  min-height: 44px;
}

.product-buy__price-wrap_interactive {
  cursor: pointer;
}

.product-buy__price-wrap {
  background: linear-gradient(270deg, #f6f6f6, hsla(0, 0%, 100%, 0));
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  min-height: 44px;
  position: relative;
}

.product-card-top__buy .product-buy__price,
.product-buy__price {
  font: 700 18px/20px 'Montserrat', sans-serif;
}

.product-buy__price_active {
  color: #fc8507;
}

.product-card-top__buy .product-buy__sub,
.product-buy__sub {
  font: 400 14px/1.3 'Montserrat', sans-serif;
  margin-top: 4px;
}

.product-buy .wishlist-btn {
  font-size: 20px;
  padding: 0;
  width: 44px !important;
}


.product-card-top__code {
  align-self: flex-end;
  color: #4e4e4e;
  font: 400 14px/1.3 'Montserrat', sans-serif;
  max-width: max-content;
}

.product-card-top__stat {
  display: flex;
  margin: 24px 0px;
}

.product-buy__prev {
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  text-decoration: line-through;
}

.product-card-top__rating,
.product-card-top__service-rating {
  align-items: center;
  display: inline-flex;
  font-size: 14px;
  line-height: 18px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(217, 217, 217);
  border-image: initial;
  border-radius: 8px;
  padding: 6px;
  text-decoration: none;
}

.product-card-top__service-rating {
  margin-left: 4px;
}

.product-card-top__service-rating-icon::before {
  content: url(/public/security.svg);
  align-items: center;
}

.product-card-top__rating i {
  background-image: url(/public/star.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 18px;
  margin-right: 4px;
  width: 12px;
  background-position: 50% center;
}

.product-card-top__code,
.product-card-top__images,
.product-card-top__tech-vobler,
.product-card-top__voblers {
  grid-area: left;
}

.product-card-top__code {
  align-self: flex-end;
  color: rgb(78, 78, 78);
  font-size: 14px;
  max-width: max-content;
}
</style>