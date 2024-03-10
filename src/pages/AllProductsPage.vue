<template>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Все товары</h2>
        <div class="articles__box">
          <SecondCard v-for="card in articles" :key="card.id"
          :article="card" />
        </div>
      </section>
      <GreenButton @click="getCards((skip += 18))">Show More</GreenButton>
    </div>
  </div>
</template>

<script>
import SecondCard from "@/components/SecondCard.vue";
import GreenButton from "@/components/GreenButton.vue";

export default {
  components: {
    SecondCard,
    GreenButton,
  },
  data() {
    return {
      limit: 18,
      skip: 0,
      articles: [],
    };
  },
  mounted() {
    this.getCards(this.skip);
  },
  methods: {
    async getCards(skip) {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`
        );
        const result = await response.json();
        this.articles.push(...result.products);
        // console.log(this.articles);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
