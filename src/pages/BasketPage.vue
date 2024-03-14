<template>
  <div class="basket-wrap">
    <div class="wrap">
      <div v-if="empty" class="basket__empty">
        <p class="oxygen-regular basket__empty-txt">Ваша корзина пуста</p>
        <p @click="$router.push(`/`)" class="oxygen-regular basket__empty-txt"
          >Перейти на главную страницу</p
        >
      </div>
      <div class="basket" v-else>
        <h2 class="cabin-700 basket__title">Корзина</h2>
        <div class="basket__product-box">
          <div class="basket__product-wrap">
            <CartProduct
              v-for="(product, index) in products"
              :key="product.id"
              :product="product"
              @sentTotal="calcTotal"
              @deleteProduct="deleteProductFromCart(index, product.id)"
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
        <div v-if="userName" class="basket__pay">
          <a href="#"><GreenButton>Оплатить</GreenButton></a>
        </div>
        <div v-else class="basket__pay">
          <p class="oxygen-regular basket__pay-text">
            Войдите в личный кабинет, чтобы оформить заказ
          </p>
          <router-link to="/authentification">
            <GreenButton>Войти</GreenButton>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";
import GreenButton from "@/components/GreenButton.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: 'BasketPage',
  components: {
    CartProduct,
    GreenButton,
  },
  data() {
    return {
      empty: this.$store.state.inBasketProducts.length === 0,
      products: [],
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
  mounted() {
    this.changeProducts();
  },
  methods: {
    ...mapMutations({
      delProductInBasket: "delProductInBasket",
    }),
    async getSingleProduct(id) {
      try {
        const response = await fetch(`${this.url}/products/${id}`);
        const result = await response.json();
        // console.log(result);
        this.products.push(result);
      } catch (e) {
        console.log(e.message);
      }
    },
    changeProducts() {
      for (const id of this.basketList) {
        this.getSingleProduct(id);
      }
    },
    deleteProductFromCart(indexd, id) {
      this.products.splice(indexd, 1);
      this.delProductInBasket(id);
      this.products.length === 0 ? (this.empty = true) : false;
    },
    calcTotal(value) {
      this.totalPrice += value;
    },
  },
  computed: {
    ...mapState({
      url: (state) => state.serverUrl,
      basketList: (state) => state.inBasketProducts,
      userName: (state) => state.login,
    }),
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
    cursor: pointer;
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
  &__pay {
    padding-top: 32px;
    text-align: center;
  }
  &__pay-text {
    padding-bottom: 32px;
  }
}
</style>
