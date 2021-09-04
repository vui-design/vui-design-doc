const code =
`import "vui-design/dist/style/vui-design.css";
import Vue from "vue";
import { Button, Modal } from "vui-design";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Modal);
Vue.prototype.$modal = Modal;

new Vue({
  el: "#app",
  render: h => h(App)
});`;

export default code;