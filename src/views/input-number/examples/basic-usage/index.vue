<template>
  <example v-bind:code="code" id="example-input-number-basic-usage">
    <template slot="demo">
      <vui-input-number v-model="value" v-bind:min="1" v-bind:max="10" />
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法，可以通过输入、鼠标点击或键盘的上下键来改变数值大小。使用 <code>v-model</code> 双向绑定数据。</p>
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