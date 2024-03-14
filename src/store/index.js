import { createStore } from "vuex";

export default createStore({
  state: {
    // HeaderComp
    categories: [
      {
        name: "Главная",
        path: "/",
        subkategory: ["Главная", "О магазине", "Доставка", "Соглашение"],
      },
      {
        name: "Каталог",
        path: "/products",
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
      {
        name: "Категории",
        path: "/product",
        subkategory: [
          "Мужчинам",
          "Женщинам",
          "Техника",
          "Для дома",
          "Косметика",
          "Другое",
        ],
      },
      {
        name: "Новинки",
        path: "/basket",
        // subkategory: [
        //   "tops",
        //   "womens-dresses",
        //   "womens-shoes",
        //   "womens-jewellery",
        // ],
      },
      {
        name: "Популярные",
        path: "/authentification",
        subkategory: ["home-decoration", "furniture", "lighting"],
        imgsrc:
          "https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?t=st=1709897269~exp=1709900869~hmac=20dd4e26941443d8097ad1d72cfd317d816681becfe4b4c0976a2babb55343ad&w=740",
      },
      // {
      //   name: "Лучшая цена",
      //   link: "#",
      //   subkategory: ["groceries", "motorcycle", "sunglasses", "automotive"],
      //   imgsrc:
      //     "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?t=st=1709131043~exp=1709134643~hmac=1a11f8d63ede2a739e84ad45d14c52d8aea9d6ba2727acfd473fa7dd66f47898&w=740",
      // },
    ],
    // MainPage
    login: "",
    product: {
      id: null,
      title: "",
      description: "",
      price: null,
      discountPercentage: null,
      rating: null,
      stock: null,
      brand: "",
      category: "",
      thumbnail: "",
      images: [],
    },
    mainphoto: [
      "https://img.freepik.com/free-photo/front-view-young-male-holding-red-sale-writing-yellow-ripped-background_140725-103864.jpg?t=st=1710234986~exp=1710238586~hmac=25c49da58229bda80d4508850d17843b36d31f276da87d5870ecf5cc1d568c60&w=740",
      "https://img.freepik.com/free-photo/high-angle-black-friday-arrangement-black-background_23-2148665578.jpg?t=st=1710235045~exp=1710238645~hmac=51d9179b221877e6171764f7b1b7bbd21cd77c6487fea45f6a760567f85a74a8&w=740",
      "https://img.freepik.com/free-photo/front-view-delivery-man-with-package_23-2148684711.jpg?t=st=1710235165~exp=1710238765~hmac=75543bff77f2dc73500d7bcf1dab0d728f470243b330e834596c5148fb18d9bc&w=826",
      "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?t=st=1710235527~exp=1710239127~hmac=c11acbc36ce4312d0072d09fd8d200c4ae5bab59ef50ea522c89572f1f1fd30f&w=740",
      "https://img.freepik.com/free-photo/shopping-cart-with-objects-sale-sticker_23-2148285126.jpg?t=st=1710235565~exp=1710239165~hmac=695509029544af758bf8d811e48552fe459a2dd619d82b0e7a976b18fa82ab38&w=740",
      "https://img.freepik.com/free-photo/flat-lay-black-friday-sales-composition-red-background_23-2148665540.jpg?t=st=1710235715~exp=1710239315~hmac=19c33b86bfba8348a201866c6e9f2fa696bedfbdad61ca176747f46bd6b8f8f4&w=740",
      "https://img.freepik.com/free-photo/young-couple-posing-studio-autumn-jacket-isolated-blue-human-negative-emotions-concept-cold-weather-female-male-fashion-concepts_155003-31145.jpg?t=st=1710235852~exp=1710239452~hmac=5e6db56e0941cc48da7df4793cbf029b58240cb5c731cb5dae4cbe6e3fd81e16&w=740",
      "https://img.freepik.com/free-photo/top-view-woman-sportswear-gym_23-2148430263.jpg?t=st=1710236019~exp=1710239619~hmac=2622067c22d3ba50c491a912c5f3370fe1e1e4ef89f06a62f8e99b7e53bb06b5&w=740",
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
        imgsrc:
          "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-2381.jpg?t=st=1709131043~exp=1709134643~hmac=1a11f8d63ede2a739e84ad45d14c52d8aea9d6ba2727acfd473fa7dd66f47898&w=740",
      },
    ],
    // AllProductPage
    articles: [],
    filters: [],
    category: [],
    sorted: [],
    // SecondCard.vue
    inBasketProducts: [],
    inLikedProducts: [],
  },
  getters: {
    // doubleLikes(state) {
    //   return state.likes * 2;
    // },
  },
  mutations: {
    addCardsInArticles(state, cards) {
      state.articles.push(...cards);
    },
    delCardsInArticles(state) {
      state.articles.splice(0, state.articles.length);
    },
    addCardsInNewProducts(state, cards) {
      state.newProducts.push(...cards);
    },
    addCardsInMostRatedProducts(state, card) {
      state.mostRatedProducts.push(card);
    },
    addCardsInRecomendProducts(state, cards) {
      state.recomendProducts.push(cards);
    },
    addProductInBasket(state, id) {
      state.inBasketProducts.push(id);
    },
    addProductInLiked(state, id) {
      state.inLikedProducts.push(id);
    },
    delProductInBasket(state, id) {
      const delIndex = state.inBasketProducts.indexOf(id);
      //   console.log(delIndex);
      state.inBasketProducts.splice(delIndex, 1);
      //   console.log(state.inBasketProducts);
    },
    delProductInLiked(state, id) {
      const delIndex = state.inLikedProducts.indexOf(id);
      //   console.log(delIndex);
      state.inLikedProducts.splice(delIndex, 1);
      //   console.log(state.inLikedProducts);
    },
    changeFilters(state, filters) {
      state.filters.splice(0, state.filters.length),
        state.filters.push(...filters);
    },
    changeSingleProduct(state, singleProduct) {
      state.product = singleProduct;
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
    async getNews({ state, commit }) {
      try {
        const response2 = await fetch(
          `${state.serverUrl}/products?limit=${3}&skip=${96}`
        );
        const result = await response2.json();
        commit("addCardsInNewProducts", result.products);
        //   this.newProducts.push(...result.products);
        //   console.log(this.newProducts);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getSortedProducts(
      { state, commit },
      { commitName, sortParametr, maxVisionCard }
    ) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products?limit=${0}&select=${sortParametr}`
        );
        const result = await response.json();
        const sorted = result.products.sort(
          (a, b) => b[sortParametr] - a[sortParametr]
        );
        for (let i = 0; i < maxVisionCard; i++) {
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
    async getSingleProduct({ state, commit }, id) {
      try {
        const response = await fetch(`${state.serverUrl}/products/${id}`);
        const result = await response.json();
        // console.log(result);
        commit("changeSingleProduct", result);
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
  },
  modules: {},
});
