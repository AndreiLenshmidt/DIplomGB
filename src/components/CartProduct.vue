<template>
  <article class="flex basket__product">
    <div class="flex basket__product-description">
      <figure class="basket__img-box">
        <img
          :src="product.images[0]"
          :alt="product.title"
          class="basket__img"
        />
      </figure>
      <div>
        <h3 class="basket__product-headding">{{ product.title }}</h3>
        <p
          v-if="productCategory.includes(product.category)"
          class="basket__product-size"
        >
          Size: Сделать выбор размера
        </p>
      </div>
      <div class="basket__product-del">
        <svg
          class="basket__product-del-svg"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="28"
          viewBox="0 0 448 512"
          fill="#126d73"
        >
          <path
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
        <p class="basket__product-del-text">Удалить</p>
      </div>
    </div>
    <div>
      <div class="flex">
        <button
          @click="decreseQuantity(product.price)"
          class="basket__product-minus"
        >
          −
        </button>
        <input
          type="number"
          class="basket__product-quantity"
          v-model="quantity"
          name="quantity"
          min="1"
          max="100"
          @input="changeQuantity(product.price)"
        />
        <button
          @click="increseQuantity(product.price)"
          class="basket__product-plus"
        >
          +
        </button>
      </div>
      <p class="basket__product-amount">{{ product.price }} $</p>
    </div>
    <p class="basket__price">{{ total }} $</p>
  </article>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      empty: false,
      quantity: 1,
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
    this.$emit("sentTotal", this.total);
  },
  methods: {
    increseQuantity(price) {
      this.quantity !== 100 ? this.$emit("sentTotal", price) : false;
      this.quantity <= 100 ? this.quantity++ : false;
    },
    decreseQuantity(price) {
      this.quantity !== 1 ? this.$emit("sentTotal", -price) : false;
      this.quantity > 1 ? this.quantity-- : false;
    },
    changeQuantity(price) {
      this.quantity > 0 && this.quantity !== 100
        ? this.$emit("sentTotal", event.target.value * price)
        : (this.quantity = 0);
      // this.quantity <= 100
      //   ? this.$emit("sentTotal", event.target.value * price)
      //   : (this.quantity = 100);
    },
  },
  computed: {
    total() {
      return this.quantity * this.product.price;
    },
  },
};
</script>

<style lang="scss" scoped>
.basket {
  &__product {
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 20px;
    margin-bottom: 32px;
    align-items: center;
  }
  &__product-description {
    align-items: center;
  }
  &__img-box {
    width: 90px;
    height: 90px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-right: 20px;
    background: rgb(234, 234, 234);
    border: 1px solid #9de7d7;
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__product-headding {
    font-size: 24px;
    color: #12d0a7;
  }
  &__product-del:hover > svg {
    fill: #b32d38;
    cursor: pointer;
  }
  &__product-del:hover > p {
    color: #b32d38;
    cursor: pointer;
  }
  &__product-del-text {
    align-self: center;
    padding-left: 20px;
    color: #126d73;
  }
  &__product-del-svg {
    padding-left: 35px;
    padding-right: 8px;
  }
  &__product-amount {
    text-align: center;
    padding-top: 10px;
  }
  &__product-minus,
  &__product-plus {
    padding: 9px 15px;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    background-color: #fff;
  }
  &__product-minus:hover,
  &__product-plus:hover {
    cursor: pointer;
  }
  &__product-quantity {
    width: 100%;
    outline: none;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    text-align: center;
    padding: 12px 10px;
  }
  &__price {
    font-size: 32px;
    width: 200px;
  }
}
</style>
