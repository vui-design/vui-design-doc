<template>
  <example v-bind:code="code" id="example-icon-basic-usage">
    <template slot="demo">
      <div class="example-icon-basic-usage">
        <vui-icon type="apps" />
        <vui-icon type="apps-filled" />
        <vui-icon type="settings" />
        <vui-icon type="settings-filled" />
        <vui-icon type="search" />
        <vui-icon type="search-filled" />
        <vui-icon type="loading" />
        <vui-icon type="loading-filled" />
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>使用 Icon 组件，指定图标对应的 <code>type</code> 属性。可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</p>
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
  .example-icon-basic-usage .vui-icon { margin-right:8px; }
</style>