<template>
  <div class="main-wrap">
    <div class="wrap">
      <section class="main">
        <figure class="main__img-box">
          <img class="main__img" :src="mainphoto[maincounter]" alt="#" />
          <button
            class="main__btn main__btn-prev"
            @click="
              maincounter > 0
                ? maincounter--
                : (maincounter = mainphoto.length - 1)
            "
          >
            Prev
          </button>
          <button
            class="main__btn main__btn-next"
            @click="
              maincounter < mainphoto.length - 1
                ? maincounter++
                : (maincounter = 0)
            "
          >
            Next
          </button>
        </figure>
      </section>
    </div>
  </div>
  <div class="category-wrap" @click="closeMenu">
    <div class="wrap">
      <section class="category">
        <a
          v-for="category in categoryGrid"
          @click="clickForCategory(category)"
          class="category__link"
        >
          <img
            :src="category.imgsrc"
            :alt="category.name.ru"
            class="category__img"
          />
          <span class="category__name">{{ category.name.ru }}</span>
        </a>
      </section>
    </div>
  </div>
  <div class="articles-wrap">
    <!-- <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Все товары</h2>
        <div class="articles__box">
          <SecondCard :articles="articles" />
        </div>
      </section>
      <button @click="getCards((skip += 9))">Show More</button>
    </div> -->
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Новинки</h2>
        <div class="articles__box">
          <SecondCard
            v-for="card in newProducts"
            :key="card.id"
            :article="card"
          />
        </div>
        <GreenButton><a href="#">Подробнее</a></GreenButton>
      </section>
    </div>
  </div>
  <div class="articles-wrap-mid">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Бестселлеры</h2>
        <div class="articles__box">
          <SecondCard
            v-for="card in mostRatedProducts"
            :key="card.id"
            :article="card"
          />
          <!-- <SecondCard :articles="mostRatedProducts" /> -->
        </div>
        <GreenButton><a href="#">Подробнее</a></GreenButton>
      </section>
    </div>
  </div>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Рекомендуем</h2>
        <div class="articles__box">
          <SecondCard
            v-for="card in recomendProducts"
            :key="card.id"
            :article="card"
          />
          <!-- <SecondCard :articles="recomendProducts" /> -->
        </div>
        <GreenButton><a href="#">Подробнее</a></GreenButton>
      </section>
    </div>
  </div>
</template>

<script>
import SecondCard from "@/components/SecondCard.vue";
import GreenButton from "@/components/GreenButton.vue";
import { mapMutations, mapState, mapActions } from "vuex";

// const getData = async (URL) => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// getData("https://dummyjson.com/products?limit=10&skip=10");

export default {
  name: "MainPage",
  components: {
    SecondCard,
    GreenButton,
  },
  data() {
    return {
      // mainphoto: this.$store.state.mainphoto,
      // categoryGrid: this.$store.state.categoryGrid,
      maincounter: 0,
      // newProducts: this.$store.state.newProducts,
      // mostRatedProducts: this.$store.state.mostRatedProducts,
      // recomendProducts: this.$store.state.recomendProducts,
      // serverUrl: "https://dummyjson.com/products",
      // limit: 0,
      // skip: 0,
      // // categories: [],
      // // articles: [],
      // ratings: [],
      // // newProducts: [],
      // // mostRatedProducts: [],
      // // recomendProducts: [],
    };
  },
  created() {
    // Перенес в app.created
    // this.getNews();
    // this.getSortedProducts({
    //   commitName: "addCardsInMostRatedProducts",
    //   sortParametr: "rating",
    //   maxVisionCard: 3,
    // });
    // this.getSortedProducts({
    //   commitName: "addCardsInRecomendProducts",
    //   sortParametr: "discountPercentage",
    //   maxVisionCard: 3,
    // });
    // this.getCards(this.skip);
    // this.getCategories();
    // this.getLimit();
    // this.getNews(this.limit);
    // this.getSortedProducts(this.mostRatedProducts, "rating", 3);
    // this.getSortedProducts(this.recomendProducts, "discountPercentage", 3);
    // Смена картинки раз в 3 сек
    // this.changeMainImg();
  },
  methods: {
    ...mapMutations({
      delCardsInArticles: "delCardsInArticles",
    }),
    ...mapActions({
      // getNews: "getNews",
      // getSortedProducts: "getSortedProducts",
      getProductsForCategory: "getProductsForCategory",
    }),
    clickForCategory(category) {
      this.delCardsInArticles();
      for (const sub of category.subkategory) {
        this.getProductsForCategory(sub.en);
      }
      this.$router.push(`/products/${category.name.ru.toLowerCase()}`);
    },
    // async getCards(skip) {
    //   try {
    //     const response = await fetch(
    //       `https://dummyjson.com/products?limit=${9}&skip=${skip}`
    //     );
    //     const result = await response.json();
    //     this.articles.push(...result.products);
    //     // console.log(this.articles);
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // },
    // async getCategories() {
    //   try {
    //     const response = await fetch(
    //       "https://dummyjson.com/products/categories"
    //     );
    //     const result = await response.json();
    //     this.categories.push(...result);
    //     console.log(this.categories);
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // },
    // async getLimit() {
    //   try {
    //     const response = await fetch(
    //       `https://dummyjson.com/products?limit=${0}&select=id`
    //     );
    //     const result = await response.json();
    //     this.limit = result.limit;
    //     console.log(this.limit);
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // },
    // async getNews() {
    //   try {
    //     const response2 = await fetch(
    //       `https://dummyjson.com/products?limit=${3}&skip=${96}`
    //     );
    //     const result = await response2.json();
    //     this.newProducts.push(...result.products);
    //     console.log(this.newProducts);
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // },
    // async getSortedProducts(dataArr, sortParametr, maxVisionCard) {
    //   try {
    //     const response = await fetch(
    //       `https://dummyjson.com/products?limit=${0}&select=${sortParametr}`
    //     );
    //     const result = await response.json();
    //     const sorted = result.products.sort(
    //       (a, b) => b[sortParametr] - a[sortParametr]
    //     );
    //     for (let i = 0; i < maxVisionCard; i++) {
    //       try {
    //         const response = await fetch(
    //           `https://dummyjson.com/products/${sorted[i].id}`
    //         );
    //         const result = await response.json();
    //         dataArr.push(result);
    //       } catch (e) {
    //         console.log(e.message);
    //       }
    //     }
    //     console.log(this.mostRatedProducts);
    //     // this.ratings.push(...result.products);
    //     // const sorted = result.sort((a,b)=>b.rating - a.rating);
    //     console.log(sorted);
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // },
    // // смена картики раз в 3 сек
    // changeMainImg() {
    //   setInterval(() => {
    //     this.maincounter < this.mainphoto.length - 1
    //       ? this.maincounter++
    //       : (this.maincounter = 0);
    //   }, 3000);
    // },
  },
  computed: {
    ...mapState({
      mainphoto: (state) => state.mainphoto,
      categoryGrid: (state) => state.categoryGrid,
      newProducts: (state) => state.newProducts,
      mostRatedProducts: (state) => state.mostRatedProducts,
      recomendProducts: (state) => state.recomendProducts,
    }),
  },
};
</script>

<style lang="scss" scoped>
// @keyframes imagesFading {
//   0% {
//     opacity: 1;
//   }
//   17% {
//     opacity: 1;
//   }
//   25% {
//     opacity: 1;
//   }
//   92% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 1;
//   }
// }
// @keyframes imagesFading {
//   0% {
//     margin-left: 0;
//   }
//   100% {
//     margin-left: 100%;
//   }
// }

.main {
  &__img-box {
    width: 1200px;
    position: relative;
    overflow: hidden;
    padding-top: 50%;
    background: rgb(234, 234, 234);
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // animation: imagesFading 1s;
  }

  &__btn {
    padding: 10px;
    opacity: 0.7;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
  }
  &__btn-prev {
    position: absolute;
    bottom: 10%;
    right: 15%;
  }
  &__btn-next {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
}
.category {
  margin-top: 36px;
  display: grid;
  grid-template: 300px 300px/1fr 1fr 1fr;
  padding-bottom: 48px;
  gap: 5px;
  &-wrap {
    background-color: #ebebeb;
  }
  &__link {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 20px 8px 20px 0px;
    // border: 1px solid #000;
  }
  &__link:hover {
    filter: contrast(0.5);
  }
  &__img {
    position: absolute;
    left: -5%;
    height: 100%;
    // z-index: -1;
  }
  &__name {
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding: 8px 10px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 20px 8px 20px 0px;
    background: rgb(255, 255, 255);
    color: #000;
    text-transform: uppercase;
  }
  &__link:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: start;
  }
  &__link:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    align-items: end;
  }
  &__link:nth-child(3) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  &__link:nth-child(4) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  &__link:nth-child(5) {
    display: flex;
    justify-content: end;
    align-items: end;
  }
  &__link:nth-child(6) {
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
.articles-wrap-mid {
  background-color: #ebebeb;
}
</style>
