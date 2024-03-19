export const UserLocalStoreData = {
  state: () => ({
    userData: {
      name: "",
      surname: "",
      lastName: "",
      emailLogin: "",
      password: "",
      phone: "",
      adress: "",
      openProduct: {},
      likedProducts: [],
      inBasketProducts: [],
    },
  }),
  getters: {
    empty(state) {
      return state.userData.inBasketProducts.length ? false : true;
    },
  },
  mutations: {
    changeUserData(state, user) {
      state.userData = user;
    },
    changeOpenProduct(state, product) {
      state.openProduct = product;
      this.commit("user/rewriteLocalUserData", {
        key: "openProduct",
        value: product,
      });
    },
    changeInBasketProductValue(state, { id, value }) {
      const el = state.userData.inBasketProducts.findIndex(
        (item) => item.id === id
      );
      state.userData.inBasketProducts[el].value = value;
      console.log(state.userData.inBasketProducts);
    },
    readLocalUserData(state) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      userData && this.commit("user/changeUserData", userData);
      userData || this.commit("user/writeLocalUserData");
    },
    writeLocalUserData(state) {
      localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    rewriteLocalUserData(state, chahgedData) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      userData[chahgedData.key] = chahgedData.value;
      localStorage.setItem("userData", JSON.stringify(userData));
      this.commit("user/changeUserData", userData);
    },
  },
  actions: {},
  namespaced: true,
};
