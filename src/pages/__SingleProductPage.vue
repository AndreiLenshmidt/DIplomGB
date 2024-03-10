<template>
  <div class="product-wrap">
    <div class="wrap">
      <ProductComp :product="products[0]" />
    </div>
  </div>
</template>

<script>
import ProductComp from "@/components/ProductComp.vue";
export default {
  components: {
    ProductComp,
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
    };
  },
  //   mounted() {
  //     this.getCards();
  //   },
  //   methods: {
  //     async getCards() {
  //       try {
  //         const response = await fetch(
  //           `https://dummyjson.com/products?limit=${1}&skip=${0}`
  //         );
  //         const result = await response.json();
  //         this.products.push(...result.products);
  //         console.log(this.products[0]);
  //       } catch (e) {
  //         console.log(e.message);
  //       }
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
