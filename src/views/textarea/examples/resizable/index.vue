<template>
  <example v-bind:code="code" id="example-textarea-resizable">
    <template slot="demo">
      <vui-textarea v-model="value" resizable placeholder="Enter something..." />
    </template>
    <template slot="title">手动改变高度</template>
    <template slot="description">
      <p>启用 <code>resizable</code> 属性，用户可拖动改变文本域的高度。</p>
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
        value: ""
      };
    }
  };
</script>