const code =
`import "vui-design/dist/style/vui-design.css";
import Vue from "vue";
import VuiDesign from "vui-design";
import App from "./App";
import store from "src/store";

Vue.config.productionTip = false;
Vue.use(VuiDesign, {
  // 注册 Authorizer 组件全局校验函数
  // 接收 value 和 attrs 作为参数，其中 attrs 为其它非预定义的自定义属性
  authorize: (value, attrs) => {
    // 这里假设使用了 Vuex 状态管理工具，并将获取到的用户权限列表存储于 store 中的 user 模块下
    const permissions = store.state.user.permissions;

    // 判断用户权限列表中是否包含组件 value 属性中定义的权限标识
    const predicate = permission => {
      return typeof value === "string" ? value === permission : value.includes(permission);
    };

    return permissions.some(predicate);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});`;

export default code;