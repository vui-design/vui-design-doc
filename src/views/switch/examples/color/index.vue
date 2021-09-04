<template>
  <example v-bind:code="code" id="example-switch-color">
    <template slot="demo">
      <vui-switch v-model="value" checkedColor="#52c41a" uncheckedColor="#ff4d4f" />
    </template>
    <template slot="title">自定义颜色</template>
    <template slot="description">
      <p>通过 <code>checkedColor</code> 和 <code>uncheckedColor</code> 属性自定义颜色。</p>
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
        value: false
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>