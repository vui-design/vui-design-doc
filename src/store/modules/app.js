import getDefaultLanguage from "@/utils/getDefaultLanguage";
import getMenuByRoutes from "@/utils/getMenuByRoutes";
import getCatalogue from "@/utils/getCatalogue";

export default {
  state: {
    language: getDefaultLanguage(),
    menu: [],
    catalogue: []
  },
  getters: {

  },
  mutations: {
    setLanguage(state, language) {
      localStorage.setItem("language", language);
      state.language = language;
    },
    setMenu(state, routes) {
      state.menu = getMenuByRoutes(routes);
    },
    setCatalogue(state, node) {
      state.catalogue = getCatalogue(node);
    }
  }
};