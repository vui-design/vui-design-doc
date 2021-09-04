<template>
  <example v-bind:code="code" id="example-button-type">
    <template slot="demo">
      <div class="example-button-type">
        <vui-button type="primary">Primary</vui-button>
        <vui-button type="info">Info</vui-button>
        <vui-button type="warning">Warning</vui-button>
        <vui-button type="success">Success</vui-button>
        <vui-button type="error">Error</vui-button>
        <vui-button>Default</vui-button>
        <vui-button type="dashed">Dashed</vui-button>
        <vui-button type="text">Text</vui-button>
      </div>
    </template>
    <template slot="title">按钮类型</template>
    <template slot="description">
      <p>按钮包含八种类型。一般情况下，我们将 <code>primary</code> 类型用于主按钮，而次按钮使用 <code>default</code> 类型，建议主按钮在同一个操作区域最多出现一次。</p>
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
  .example-button-type .vui-button { margin:0 16px 16px 0; }
</style>