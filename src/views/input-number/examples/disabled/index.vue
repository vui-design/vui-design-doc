<template>
  <example v-bind:code="code" id="example-input-number-disabled">
    <template slot="demo">
      <vui-input-number v-model="value" v-bind:min="1" v-bind:max="10" disabled />
    </template>
    <template slot="title">禁用</template>
    <template slot="description">
      <p>通过添加 <code>disabled</code> 属性将数字输入框设为禁用状态。</p>
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
        value: 1
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>