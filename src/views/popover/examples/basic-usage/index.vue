<template>
  <example v-bind:code="code" id="example-popover-basic-usage">
    <template slot="demo">
      <vui-popover title="Title" content="This is a popover.">
        <vui-button type="primary">Hover me</vui-button>
      </vui-popover>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法，浮层的大小由内容区域决定。</p>
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