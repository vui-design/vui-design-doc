<template>
  <example v-bind:code="code" id="example-anchor-offset">
    <template slot="demo">
      <vui-anchor v-bind:offset="offset">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
    <template slot="title">滚动偏移量</template>
    <template slot="description">
      <p>设置锚点目标滚动到屏幕正中间。</p>
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
        code,
        offset: undefined
      };
    },
    mounted() {
      this.offset = window.innerHeight / 2;
    }
  };
</script>