import "vui-design/style/index.less";
import "highlight.js/styles/solarized-light.css";

import Vue from "vue";
import VuiDesign from "vui-design";
import VueHighlightJS from "vue-highlightjs";

import App from "src/App";
import i18n from "src/locale";
import router from "src/router";
import store from "src/store";

Vue.use(VuiDesign, {
	i18n: (key, value) => i18n.t(key, value)
});
Vue.use(VueHighlightJS);
Vue.config.productionTip = false;

new Vue({
	el: "#root",
	i18n,
	router,
	store,
	render: h => h(App)
});