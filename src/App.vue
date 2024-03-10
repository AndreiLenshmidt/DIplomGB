<template>
  <HeaderComp :navCategory="categories" />
  <!-- <MainPage :categoryGrid="categories" /> -->
  <!-- <AllProductsPage /> -->
  <!-- <ProductPage :product="products[0]" /> -->
  <BasketPage :products="products" />
  <FooterComp />
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import AllProductsPage from "./pages/AllProductsPage.vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import ProductPage from "./pages/ProductPage.vue";
import BasketPage from "./pages/BasketPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
    AllProductsPage,
    HeaderComp,
    FooterComp,
    ProductPage,
    BasketPage,
  },
  data() {
    return {
      products: [
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
      ],
      categories: [
        {
          name: "Техника",
          link: "#",
          subkategory: [
            "smartphones",
            "laptops",
            "mens-watches",
            "womens-watches",
          ],
          imgsrc:
            "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?t=st=1709896595~exp=1709900195~hmac=8c704ccb74e1205cc5930e88eec9aa47b35d7289410a87cdd848d56022cbf4f4&w=740",
        },
        {
          name: "Косметика",
          link: "#",
          subkategory: ["fragrances", "skincare"],
          imgsrc:
            "https://img.freepik.com/free-photo/top-view-body-butter-recipient_23-2148542999.jpg?t=st=1709897085~exp=1709900685~hmac=c72aebc011cee6afd6ece299f6adb0f56c8c92c30c1ed8485c8abe970f6af413&w=740",
        },
        {
          name: "Мужчинам",
          link: "#",
          subkategory: ["mens-shoes", "mens-watches"],
          imgsrc:
            "https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?t=st=1709897139~exp=1709900739~hmac=938a65cf70f63d76a34e030477f2e9de45930a92e98c3c4e6ef9e4e99167cce8&w=740",
        },
        {
          name: "Женчинам",
          link: "#",
          subkategory: [
            "tops",
            "womens-dresses",
            "womens-shoes",
            "womens-jewellery",
          ],
          imgsrc:
            "https://img.freepik.com/free-photo/fashion-portrait-of-young-elegant-woman_1328-2743.jpg?w=740&t=st=1709897198~exp=1709897798~hmac=5b3046035ce5eeabc0ee36185bac05cd21e29d364675126c15587acadde154d6",
        },
        {
          name: "Для дома",
          link: "#",
          subkategory: ["home-decoration", "furniture", "lighting"],
          imgsrc:
            "https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?t=st=1709897269~exp=1709900869~hmac=20dd4e26941443d8097ad1d72cfd317d816681becfe4b4c0976a2babb55343ad&w=740",
        },
        {
          name: "Другое",
          link: "#",
          subkategory: ["groceries", "motorcycle", "sunglasses", "automotive"],
          imgsrc:
            "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?t=st=1709131043~exp=1709134643~hmac=1a11f8d63ede2a739e84ad45d14c52d8aea9d6ba2727acfd473fa7dd66f47898&w=740",
        },
      ],
    };
  },
  methods: {
    // scrollPage() {
    //   console.log("scroll");
    // },
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
./pages/__SingleProductPage.vue./pages/ProductComp.vue./pages/ProductPage.vue
