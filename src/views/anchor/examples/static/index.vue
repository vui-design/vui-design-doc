<template>
  <example v-bind:code="code" id="example-anchor-static">
    <template slot="demo">
      <vui-anchor v-bind:affix="false">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
    <template slot="title">静态位置</template>
    <template slot="description">
      <p>不浮动，状态不随页面滚动变化。</p>
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