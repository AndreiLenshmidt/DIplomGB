<template>
  <HeaderComp />
  <!-- <MainPage :categoryGrid="categories" /> -->
  <!-- <AllProductsPage /> -->
  <!-- <ProductPage :product="products[0]" /> -->
  <!-- <BasketPage :products="products" :userName="login" /> -->
  <!-- <AuthRegistrationPage/> -->
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
  <FooterComp />
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import AllProductsPage from "./pages/AllProductsPage.vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import ProductPage from "./pages/ProductPage.vue";
import BasketPage from "./pages/BasketPage.vue";
import AuthRegistrationPage from "./pages/AuthRegistrationPage.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MainPage,
    AllProductsPage,
    HeaderComp,
    FooterComp,
    ProductPage,
    BasketPage,
    AuthRegistrationPage,
  },
  data() {
    return {
      login: "",
      navLinks: [
        {
          name: "Главная",
          path: "/",
          // subkategory: ["Главная", "О магазине", "Доставка", "Соглашение"],
        },
        {
          name: "Каталог",
          path: "/products/все товары",
          // subkategory: [
          //   "smartphones",
          //   "laptops",
          //   "mens-watches",
          //   "womens-watches",
          //   "fragrances",
          //   "skincare",
          //   "mens-shoes",
          //   "mens-watches",
          //   "tops",
          //   "womens-dresses",
          //   "womens-shoes",
          //   "womens-jewellery",
          //   "groceries",
          //   "motorcycle",
          //   "sunglasses",
          //   "automotive",
          // ],
        },
        {
          name: "О нас",
          path: "/",
        },
        {
          name: "Доставка",
          path: "/",
        },
        {
          name: "Контакты",
          path: "/",
        },
      ],
    };
  },
  created() {
    this.getSortedProducts({
      commitName: "addCardsInNewProducts",
      sortParametr: "id",
      startIndex: 0,
      endIndex: 18,
    });
    this.getSortedProducts({
      commitName: "addCardsInMostRatedProducts",
      sortParametr: "rating",
      startIndex: 0,
      endIndex: 18,
    });
    this.getSortedProducts({
      commitName: "addCardsInRecomendProducts",
      sortParametr: "discountPercentage",
      startIndex: 0,
      endIndex: 18,
    });
    this.getCards({ limit: 18, skip: 0 });
    // this.getProductsForCategory("laptops");
    // const userData1 = {
    //   name: "Andrei",
    //   lastName: "Lenshidt",
    //   surname: "",
    //   emailLogin: "lenshmidt.andrei@gmail.com",
    //   password: "12345",
    //   phone: "8-999-6354759",
    //   adress: "Krasnodar",
    //   likedProducts: [1, 2, 3, 4],
    //   inBasketProducts: [{ id: 1, value: 2 }, { id: 2, value: 4 }, { id: 3, value: 1 }, { id: 4, value: 7 }],
    // };
    // localStorage.setItem("userData", JSON.stringify(userData1));
    this.readLocalUserData();
  },
  methods: {
    ...mapMutations({
      changeUserData: "changeUserData",
      readLocalUserData: "user/readLocalUserData",
    }),
    ...mapActions({
      getNews: "getNews",
      getSortedProducts: "getSortedProducts",
      getCards: "getCards",
    }),
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: #b5b3b3;
}
</style>
