<template>
  <example v-bind:code="code" id="example-textarea-basic-usage">
    <template slot="demo">
      <vui-textarea v-model="value" placeholder="Basic usage" />
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法，可以使用 <code>v-model</code> 双向绑定数据。</p>
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