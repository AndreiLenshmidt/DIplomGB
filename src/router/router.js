import AllProductsPage from "@/pages/AllProductsPage.vue";
import AuthRegistrationPage from "@/pages/AuthRegistrationPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/products/:category",
    component: AllProductsPage,
  },
  {
    path: "/product/:id",
    component: ProductPage,
  },
  // {
  //   path: "/product",
  //   component: ProductPage,
  // },
  {
    path: "/basket",
    component: BasketPage,
  },
  {
    path: "/authentification",
    component: AuthRegistrationPage,
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   component: NotFoundComponent,
  // }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

// app.use(router);
export default router;

