<template>
  <example v-bind:code="code" id="example-input-number-formatter">
    <template slot="demo">
      <div class="example-input-number-formatter">
        <vui-input-number v-model="value1" v-bind:min="0" v-bind:formatter="formatter1" />
        <vui-input-number v-model="value2" v-bind:min="50" v-bind:max="100" v-bind:formatter="formatter2" />
      </div>
    </template>
    <template slot="title">格式化展示</template>
    <template slot="description">
      <p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据。</p>
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
        value1: 1010,
        value2: 60
      };
    },
    watch: {
      value1(value) {
        console.log("value", value);
      },
      value2(value) {
        console.log("value", value);
      }
    },
    methods: {
      formatter1(value) {
        return ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      formatter2(value) {
        return value + "%";
      }
    }
  };
</script>

<style>
  .example-input-number-formatter .vui-input-number + .vui-input-number { margin-left:16px; }
</style>