<template>
  <div class="basket-wrap">
    <div class="wrap">
      <div v-if="empty" class="basket__empty">
        <p class="oxygen-regular basket__empty-txt">Ваша корзина пуста</p>
        <a href="#" class="oxygen-regular basket__empty-txt"
          >Перейти на главную страницу</a
        >
      </div>
      <div class="basket" v-else>
        <h2 class="cabin-700 basket__title">Корзина</h2>
        <div class="basket__product-box">
          <div class="basket__product-wrap">
            <CartProduct
              v-for="product in products"
              :key="product.id"
              :product="product"
              @sentTotal="calcTotal"
            />
            <p class="basket__product-price">Итого: {{ totalPrice }} $</p>
          </div>
        </div>
        <a href="#" class="cabin-500 basket__back-ink">
          <svg
            width="20"
            height="19"
            viewBox="0 0 10.0041 20.0081"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="Vector"
              d="M1.00403 19.004L9.00403 10.004L1.00403 1.00403"
              stroke="#292F36"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
          Вернуться назад</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";

export default {
  components: {
    CartProduct,
  },
  props: {
    products: Array,
  },
  data() {
    return {
      empty: false,
      quantity: 1,
      totalPrice: 0,
      productCategory: [
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
      ],
    };
  },
  methods: {
    calcTotal(value) {
      this.totalPrice += value;
    },
  },
};
</script>

<style lang="scss" scoped>
.basket__empty {
  padding-top: 170px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  &-txt:last-child {
    color: #12d0a7;
  }
}
.basket {
  color: #126d73;
  &__title {
    padding-top: 48px;
    color: #000;
    text-transform: uppercase;
  }
  &__product-box {
    padding-top: 32px;
  }
  &__price {
    font-size: 32px;
    width: 200px;
  }
  &__product-price {
    text-align: end;
    font-size: 32px;
    padding-bottom: 40px;
  }
  &__back-ink {
    text-transform: uppercase;
    font-size: 16px;
    color: #000;
  }
  &__back-ink:hover {
    color: #126d73;
  }
  &__back-ink > svg {
    margin-right: 20px;
    transform: rotate(180deg);
    vertical-align: middle;
    padding-top: 1px;
  }
}
</style>
