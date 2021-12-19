<template>
  <example v-bind:code="code" id="example-link-link">
    <template slot="demo">
      <div class="example-link-link">
        <section>
          <h4>A Link</h4>
          <vui-link type="primary" href="https://cn.vuejs.org/">Vue.js</vui-link>
          <vui-link type="primary" href="https://github.com/" target="_blank">Github</vui-link>
          <vui-link href="/">Home</vui-link>
          <vui-link href="/guide" target="_blank">Guide</vui-link>
          <vui-link href="/components">Components</vui-link>
        </section>
        <section>
          <h4>Router Link</h4>
          <vui-link to="/">Home</vui-link>
          <vui-link to="/guide" target="_blank">Guide</vui-link>
          <vui-link to="/components">Components</vui-link>
        </section>
      </div>
    </template>
    <template slot="title">链接导航</template>
    <template slot="description">
      <p>属性 <code>href</code> 用于设置文字链接点击后的跳转地址，指定此属性后文字链接的点击行为将和原生 <code>a</code> 链接保持一致。</p>
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
  .example-link-link > section + section { margin-top:16px; }
  .example-link-link > section > h4 { color:#262626; }
  .example-link-link > section > .vui-link + .vui-link { margin-left:16px; }
</style>