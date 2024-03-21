import { createStore } from "vuex";
import { UserLocalStoreData } from "@/store/localStore";

export default createStore({
  state: {
    // HeaderComp
    // categories: [
    //   {
    //     name: "Главная",
    //     path: "/",
    //     subkategory: ["Главная", "О магазине", "Доставка", "Соглашение"],
    //   },
    //   {
    //     name: "Каталог",
    //     path: "/products",
    //     subkategory: [
    //       "smartphones",
    //       "laptops",
    //       "mens-watches",
    //       "womens-watches",
    //       "fragrances",
    //       "skincare",
    //       "mens-shoes",
    //       "mens-watches",
    //       "tops",
    //       "womens-dresses",
    //       "womens-shoes",
    //       "womens-jewellery",
    //       "groceries",
    //       "motorcycle",
    //       "sunglasses",
    //       "automotive",
    //     ],
    //   },
    //   {
    //     name: "Категории",
    //     path: "/product",
    //     subkategory: [
    //       "Мужчинам",
    //       "Женщинам",
    //       "Техника",
    //       "Для дома",
    //       "Косметика",
    //       "Другое",
    //     ],
    //   },
    //   {
    //     name: "Новинки",
    //     path: "/basket",
    //     // subkategory: [
    //     //   "tops",
    //     //   "womens-dresses",
    //     //   "womens-shoes",
    //     //   "womens-jewellery",
    //     // ],
    //   },
    //   {
    //     name: "Популярные",
    //     path: "/authentification",
    //     subkategory: ["home-decoration", "furniture", "lighting"],
    //     imgsrc:
    //       "https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?t=st=1709897269~exp=1709900869~hmac=20dd4e26941443d8097ad1d72cfd317d816681becfe4b4c0976a2babb55343ad&w=740",
    //   },
    //   // {
    //   //   name: "Лучшая цена",
    //   //   link: "#",
    //   //   subkategory: ["groceries", "motorcycle", "sunglasses", "automotive"],
    //   //   imgsrc:
    //   //     "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?t=st=1709131043~exp=1709134643~hmac=1a11f8d63ede2a739e84ad45d14c52d8aea9d6ba2727acfd473fa7dd66f47898&w=740",
    //   // },
    // ],
    navLinks: [
      {
        name: "Главная",
        path: "/",
      },
      {
        name: "Каталог",
        path: "/products/все товары",
      },
      {
        name: "Доставка",
        path: "/delivery",
      },
      {
        name: "Контакты",
        path: "/contacts",
      },
      {
        name: "О Магазине",
        path: "/about",
      },
    ],
    // MainPage
    // product: {
    //   id: 0,
    //   title: "gxth",
    //   description: "sggrs",
    //   price: 565,
    //   discountPercentage: 12,
    //   rating: 4.0,
    //   stock: 25,
    //   brand: "fzrgzg",
    //   category: "aefaf",
    //   thumbnail: "#",
    //   images: ["#"],
    // },
    mainphoto: [
      require("@/assets/img/main1.jpg"),
      require("@/assets/img/main2.jpg"),
      require("@/assets/img/main3.jpg"),
      require("@/assets/img/main4.jpg"),
      require("@/assets/img/main5.jpg"),
    ],
    serverUrl: "https://dummyjson.com",
    newProducts: [],
    mostRatedProducts: [],
    recomendProducts: [],
    // AllProductPage, MainPage
    categoryGrid: [
      {
        name: { ru: "Техника", en: "technique" },
        subkategory: [
          { en: "smartphones", ru: "смартфоны" },
          { en: "laptops", ru: "ноутбуки" },
          { en: "mens-watches", ru: "мужские часы" },
          { en: "womens-watches", ru: "женские часы" },
        ],
        imgsrc:
          "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?t=st=1709896595~exp=1709900195~hmac=8c704ccb74e1205cc5930e88eec9aa47b35d7289410a87cdd848d56022cbf4f4&w=740",
      },
      {
        name: { ru: "Косметика", en: "cosmetics" },
        subkategory: [
          { en: "fragrances", ru: "парфюмерия" },
          { en: "skincare", ru: "крема" },
        ],
        imgsrc:
          "https://img.freepik.com/free-photo/top-view-body-butter-recipient_23-2148542999.jpg?t=st=1709897085~exp=1709900685~hmac=c72aebc011cee6afd6ece299f6adb0f56c8c92c30c1ed8485c8abe970f6af413&w=740",
      },
      {
        name: { ru: "Мужчинам", en: "mens" },
        subkategory: [
          { en: "mens-shoes", ru: "мужские часы" },
          { en: "mens-watches", ru: "женские часы" },
        ],
        imgsrc:
          "https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?t=st=1709897139~exp=1709900739~hmac=938a65cf70f63d76a34e030477f2e9de45930a92e98c3c4e6ef9e4e99167cce8&w=740",
      },
      {
        name: { ru: "Женчинам", en: "womens" },
        subkategory: [
          { en: "tops", ru: "топы" },
          { en: "womens-dresses", ru: "платья" },
          { en: "womens-shoes", ru: "туфли" },
          { en: "womens-jewellery", ru: "украшения" },
        ],
        imgsrc:
          "https://img.freepik.com/free-photo/fashion-portrait-of-young-elegant-woman_1328-2743.jpg?w=740&t=st=1709897198~exp=1709897798~hmac=5b3046035ce5eeabc0ee36185bac05cd21e29d364675126c15587acadde154d6",
      },
      {
        name: { ru: "Для дома", en: "homeuses" },
        subkategory: [
          { en: "home-decoration", ru: "декор" },
          { en: "furniture", ru: "мебель" },
          { en: "lighting", ru: "люстры" },
        ],
        imgsrc:
          "https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?t=st=1709897269~exp=1709900869~hmac=20dd4e26941443d8097ad1d72cfd317d816681becfe4b4c0976a2babb55343ad&w=740",
      },
      {
        name: { ru: "Другое", en: "other" },
        subkategory: [
          { en: "groceries", ru: "продукты" },
          { en: "motorcycle", ru: "мотоциклы" },
          { en: "sunglasses", ru: "солнцезащитные очки" },
          { en: "automotive", ru: "для авто" },
        ],
        imgsrc: require("@/assets/img/other.jpg"),
      },
    ],
    // AllProductPage
    articles: [],
    filters: [],
    category: [],
    sorted: [],
    liked: [],
    // SecondCard.vue
    // inBasketProducts: [],
    // inLikedProducts: [],
    // SearchPage
    searchResalt: [],
  },
  // getters: {
  //   // doubleLikes(state) {
  //   //   return state.likes * 2;
  //   // },
  // },
  getters: {},
  mutations: {
    // changeUserData(state, user) {
    //   state.userData = user;
    // },
    addCardsInArticles(state, cards) {
      state.articles.push(...cards);
    },
    addCardInArticles(state, card) {
      state.articles.push(card);
    },
    delCardsInArticles(state) {
      state.articles.splice(0, state.articles.length);
    },
    addCardsInNewProducts(state, card) {
      state.newProducts.push(card);
    },
    addCardsInMostRatedProducts(state, card) {
      state.mostRatedProducts.push(card);
    },
    addCardsInRecomendProducts(state, card) {
      state.recomendProducts.push(card);
    },
    addCardInLiked(state, card) {
      state.liked.push(card);
    },
    delCardInLiked(state, card) {
      const delIndex = state.liked.findIndex((item) => item.id === card.id);
      state.liked.splice(delIndex, 1);
    },
    delCardsInLiked(state) {
      state.liked = [];
    },

    // delProductInBasket(state, id) {
    //   const delIndex = state.inBasketProducts.indexOf(id);
    //   //   console.log(delIndex);
    //   state.inBasketProducts.splice(delIndex, 1);
    //   //   console.log(state.inBasketProducts);
    // },
    // delProductInLiked(state, id) {
    //   const delIndex = state.inLikedProducts.indexOf(id);
    //   //   console.log(delIndex);
    //   state.inLikedProducts.splice(delIndex, 1);
    //   //   console.log(state.inLikedProducts);
    // },
    changeFilters(state, filters) {
      state.filters.splice(0, state.filters.length),
        state.filters.push(...filters);
    },
    changeSingleProduct(state, singleProduct) {
      state.product = singleProduct;
    },
    changeSearchResalt(state, products) {
      state.searchResalt = [];
      state.searchResalt.push(...products);
    },
  },
  actions: {
    async getCards({ state, commit }, { limit, skip }) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products?limit=${limit}&skip=${skip}`
        );
        const result = await response.json();
        // console.log(result);
        commit("addCardsInArticles", result.products);
        // this.articles.push(...result.products);
        // console.log(this.articles);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getSortedProducts(
      { state, commit },
      { commitName, sortParametr, startIndex, endIndex }
    ) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products?limit=${0}&select=${sortParametr}`
        );
        const result = await response.json();
        const sorted = result.products.sort(
          (a, b) => b[sortParametr] - a[sortParametr]
        );
        for (let i = startIndex; i < endIndex; i++) {
          try {
            const response = await fetch(
              `https://dummyjson.com/products/${sorted[i].id}`
            );
            const result = await response.json();
            commit(commitName, result);
          } catch (e) {
            console.log(e.message);
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async getSingleProduct({ state, commit }, { id, commitName }) {
      try {
        const response = await fetch(`${state.serverUrl}/products/${id}`);
        const result = await response.json();
        // console.log(result);
        // commit("changeSingleProduct", result);
        commit(commitName, result);
        // this.articles.push(...result.products);
        // console.log(this.articles);
      } catch (e) {
        console.log(e.message);
      }
    },
    // 'https://dummyjson.com/products/category/smartphones'
    async getProductsForCategory({ state, commit }, categoryName) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products/category/${categoryName}`
        );
        const result = await response.json();
        // console.log(result);
        commit("addCardsInArticles", result.products);
        // this.articles.push(...result.products);
        // console.log(this.articles);
      } catch (e) {
        console.log(e.message);
      }
    },
    async searchProduct({ state, commit }, searchParams) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products/search?q=${searchParams}`
        );
        const result = await response.json();
        // console.log(result);
        commit("changeSearchResalt", result.products);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  modules: {
    user: UserLocalStoreData,
  },
});
