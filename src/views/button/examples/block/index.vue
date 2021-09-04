<template>
  <example v-bind:code="code" id="example-button-block">
    <template slot="demo">
      <div class="example-button-block">
        <vui-button type="primary" block>Primary</vui-button>
        <vui-button block>Default</vui-button>
        <vui-button type="dashed" block>Dashed</vui-button>
        <vui-button type="text" block>Text</vui-button>
      </div>
    </template>
    <template slot="title">Block 按钮</template>
    <template slot="description">
      <p>开启 <code>block</code> 属性将使按钮撑满其父元素宽度。</p>
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
  .example-button-block .vui-button + .vui-button { margin-top:16px; }
</style>