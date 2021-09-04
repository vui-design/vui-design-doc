<template>
  <example v-bind:code="code" id="example-button-link">
    <template slot="demo">
      <div class="example-button-link">
        <section>
          <h4>A Link</h4>
          <vui-button type="primary" href="https://cn.vuejs.org/">Vue.js</vui-button>
          <vui-button type="primary" href="https://github.com/" target="_blank">Github</vui-button>
          <vui-button href="/">Home</vui-button>
          <vui-button href="/guide" target="_blank">Guide</vui-button>
          <vui-button href="/components">Components</vui-button>
        </section>
        <section>
          <h4>Router Link</h4>
          <vui-button to="/">Home</vui-button>
          <vui-button to="/guide" target="_blank">Guide</vui-button>
          <vui-button to="/components">Components</vui-button>
        </section>
      </div>
    </template>
    <template slot="title">链接按钮</template>
    <template slot="description">
      <p>属性 <code>href</code> 用于设置按钮点击后的跳转地址，指定此属性后按钮的点击行为将和普通 <code>a</code> 链接保持一致。</p>
      <p>当需要支持用户在具有路由功能的应用中导航（同 <code>&lt;router-link /&gt;</code> 组件）时，请通过 <code>to</code> 属性指定目标地址。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-button-link > section > h4 { margin-bottom:16px; }
  .example-button-link > section > .vui-button { margin:0 16px 16px 0; }
</style>