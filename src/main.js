import "vui-design/style/index.less";
import "src/assets/styles/highlightjs.css";
import Vue from "vue";
import VuiDesign from "vui-design";
import VueHighlightJS from "vue-highlightjs";
import App from "src/App";
import i18n from "src/locale";
import router from "src/router";
import store from "src/store";

Vue.config.productionTip = false;
Vue.use(VuiDesign, {
  i18n: (key, value) => i18n.t(key, value),
  authorize: value => {
    return store.state.app.permissions.some(permission => typeof value === "string" ? value === permission : value.includes(permission));
  }
});
Vue.use(VueHighlightJS);

new Vue({
  el: "#root",
  i18n,
  router,
  store,
  render: h => h(App)
});