<template>
  <HeaderComp :navCategory="navLinks" />
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
      products: [
        {
          id: 0,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 5491,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          ],
        },
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "womens-dresses",
          thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          ],
        },
        {
          id: 2,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          ],
        },
      ],
      navLinks: [
        {
          name: "Главная",
          path: "/",
          subkategory: ["Главная", "О магазине", "Доставка", "Соглашение"],
        },
        {
          name: "Каталог",
          path: "/products/все товары",
          subkategory: [
            "smartphones",
            "laptops",
            "mens-watches",
            "womens-watches",
            "fragrances",
            "skincare",
            "mens-shoes",
            "mens-watches",
            "tops",
            "womens-dresses",
            "womens-shoes",
            "womens-jewellery",
            "groceries",
            "motorcycle",
            "sunglasses",
            "automotive",
          ],
        },
        // {
        //   name: "Категории",
        //   path: "/product",
        //   subkategory: ["Мужчинам", "Женщинам", "Техника", "Для дома", "Косметика", "Другое"],
        // },
        // {
        //   name: "Basket",
        //   path: "/basket",
        //   // subkategory: [
        //   //   "tops",
        //   //   "womens-dresses",
        //   //   "womens-shoes",
        //   //   "womens-jewellery",
        //   // ],
        // },
        // {
        //   name: "Популярные",
        //   path: "/authentification",
        //   subkategory: ["home-decoration", "furniture", "lighting"],
        //   imgsrc:
        //     "https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?t=st=1709897269~exp=1709900869~hmac=20dd4e26941443d8097ad1d72cfd317d816681becfe4b4c0976a2babb55343ad&w=740",
        // },
        // {
        //   name: "Лучшая цена",
        //   link: "#",
        //   subkategory: ["groceries", "motorcycle", "sunglasses", "automotive"],
        //   imgsrc:
        //     "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?t=st=1709131043~exp=1709134643~hmac=1a11f8d63ede2a739e84ad45d14c52d8aea9d6ba2727acfd473fa7dd66f47898&w=740",
        // },
      ],
    };
  },
  created() {
    this.getNews();
    this.getSortedProducts({
      commitName: "addCardsInMostRatedProducts",
      sortParametr: "rating",
      maxVisionCard: 3,
    });
    this.getSortedProducts({
      commitName: "addCardsInRecomendProducts",
      sortParametr: "discountPercentage",
      maxVisionCard: 3,
    });
    this.getCards({ limit: 18, skip: 0 });
    // this.getProductsForCategory("laptops");
  },
  methods: {
    ...mapActions({
      getNews: "getNews",
      getSortedProducts: "getSortedProducts",
      getCards: "getCards",
      // getProductsForCategory: "getProductsForCategory",
    }),
  },
  // computed: {
  //   ...mapState({
  //     filters: (state) => state.filters,
  //   }),
  // },
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
