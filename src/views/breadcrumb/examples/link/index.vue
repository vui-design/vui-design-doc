<template>
  <example v-bind:code="code" id="example-breadcrumb-link">
    <template slot="demo">
      <div class="example-breadcrumb-link">
        <section>
          <h4>A Link</h4>
          <vui-breadcrumb>
            <vui-breadcrumb-item href="/">Home</vui-breadcrumb-item>
            <vui-breadcrumb-item href="/components">Components</vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
          <vui-breadcrumb>
            <vui-breadcrumb-item>
              <a href="/">Home</a>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>
              <a href="/components">Components</a>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
        </section>
        <section>
          <h4>Router Link</h4>
          <vui-breadcrumb>
            <vui-breadcrumb-item to="/">Home</vui-breadcrumb-item>
            <vui-breadcrumb-item to="/components">Components</vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
          <vui-breadcrumb>
            <vui-breadcrumb-item>
              <router-link to="/">Home</router-link>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>
              <router-link to="/components">Components</router-link>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
        </section>
      </div>
    </template>
    <template slot="title">可点击的</template>
    <template slot="description">
      <p>属性 <code>href</code> 用于设置项目点击后的跳转地址，指定此属性后项目的点击行为将和普通 <code>a</code> 链接保持一致。</p>
      <p>当需要支持用户在具有路由功能的应用中导航（同 <code>&lt;router-link /&gt;</code> 组件）时，请通过 <code>to</code> 属性指定目标地址。</p>
      <p>当然，您也可以显式地使用 <code>a</code> 链接或者 <code>&lt;router-link /&gt;</code> 组件。</p>
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
  .example-breadcrumb-link section:not(:last-child) { margin-bottom:20px; }
  .example-breadcrumb-link section h4 {  }
  .example-breadcrumb-link section .vui-breadcrumb { margin-top:10px; }
</style>