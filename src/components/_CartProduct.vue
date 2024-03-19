<template>
  <article class="flex basket__product">
    <div class="flex basket__product-description">
      <figure class="basket__img-box">
        <a href="#">
          <img
            :src="product.images[0]"
            :alt="product.title"
            class="basket__img"
          />
        </a>
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
      <div @click="deleteProduct(product.id)" class="basket__product-del">
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
    <div class="basket__product-btns">
      <div class="flex">
        <button
          @click="multyQuantity"
          class="basket__product-multy"
          :class="myltyActiveClass"
        >
          X10
        </button>
        <button
          @click="decreseQuantity(product.price)"
          class="basket__product-minus"
        >
          −
        </button>
        <p class="basket__product-quantity">{{ productQuantity }}</p>
        <button
          @click="increseQuantity(product.price)"
          class="basket__product-plus"
        >
          +
        </button>
      </div>
    </div>
    <p class="basket__price">{{ total }} $</p>
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    productID: Number,
    productQuantity: Number,
  },
  data() {
    return {
      empty: false,
      // quantity: 1,
      multy: 1,
      productCategory: [
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
      ],
    };
  },
  created() {
    this.getSingleProduct(this.productID);
  },
  mounted() {
    this.$emit("sentTotal", this.total);
  },
  methods: {
    ...mapActions({
      getSingleProduct: "getSingleProduct",
    }),
    deleteProduct(id) {
      this.$emit("deleteProduct", id);
      this.$emit("sentTotal", -this.total);
    },
    increseQuantity(price) {
      if (this.quantity >= 90 && this.multy === 10) this.multy = 1;
      if (this.quantity >= 100) return;
      this.quantity <= 100 ? (this.quantity += this.multy) : false;
      this.quantity <= 100
        ? this.$emit("sentTotal", price * this.multy)
        : false;
    },
    decreseQuantity(price) {
      if (this.productQuantity <= 10 && this.multy === 10) this.multy = 1;
      if (this.productQuantity === 1) return;
      this.productQuantity > 1 ? (this.productQuantity -= this.multy) : false;
      this.productQuantity > 0 ? this.$emit("sentTotal", -price * this.multy) : false;
    },
    multyQuantity() {
      this.multy === 1 ? (this.multy = 10) : (this.multy = 1);
    },
  },
  computed: {
    ...mapState({
      product: (state) => state.product,
    }),
    total() {
      return this.productQuantity * this.product.price;
    },
    myltyActiveClass() {
      if (this.multy === 10) return "basket__product-multy-active";
      else return "";
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
    justify-content: flex-start;
    width: 40%;
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
  &__product-multy {
    padding: 9px 8px;
    color: #126d73;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    margin-right: 25px;
  }
  &__product-multy-active {
    background-color: #12d0a7;
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
    width: 35px;
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
