import getLanguage from "src/utils/getLanguage";
import getMenuByRoutes from "src/utils/getMenuByRoutes";
import getAnchors from "src/utils/getAnchors";

export default {
  state: {
    year: new Date().getFullYear(),
    language: getLanguage(),
    menu: [],
    anchors: []
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
    setAnchors(state, container) {
      state.anchors = getAnchors(container);
    }
  }
};