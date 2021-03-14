<template>
  <vui-doc-example v-bind:code="code" id="example-button-ghost">
    <template slot="demo">
      <div class="example-button-ghost">
        <vui-button type="primary" ghost>Primary</vui-button>
        <vui-button type="info" ghost>Info</vui-button>
        <vui-button type="warning" ghost>Warning</vui-button>
        <vui-button type="success" ghost>Success</vui-button>
        <vui-button type="error" ghost>Error</vui-button>
        <vui-button ghost>Default</vui-button>
        <vui-button type="dashed" ghost>Dashed</vui-button>
        <vui-button type="text" ghost>Text</vui-button>
      </div>
    </template>
    <template slot="title">幽灵按钮</template>
    <template slot="description">
      <p>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    components: {
      VuiDocExample
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-button-ghost { background-color:#bec8c8; padding:8px 16px; }
  .example-button-ghost .vui-button { margin:8px 16px 8px 0; }
</style>