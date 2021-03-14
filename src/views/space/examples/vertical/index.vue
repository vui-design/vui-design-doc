<template>
  <vui-doc-example v-bind:code="code" id="example-space-vertical">
    <template slot="demo">
      <vui-space block direction="vertical">
        <vui-card style="width: 300px;" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
        <vui-card title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </vui-space>
    </template>
    <template slot="title">垂直排列</template>
    <template slot="description">
      <p>相邻组件垂直排列。可以添加 <code>block</code> 属性，以使 <code>Space</code> 独占一行。</p>
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