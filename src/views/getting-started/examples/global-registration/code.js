const code =
`import "vui-design/dist/style/vui-design.css";
import Vue from "vue";
import VuiDesign from "vui-design";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(VuiDesign);

new Vue({
  el: "#app",
  render: h => h(App)
});`;

export default code;