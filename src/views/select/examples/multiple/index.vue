<template>
  <example v-bind:code="code" id="example-select-multiple">
    <template slot="demo">
      <vui-select v-model="value" multiple placeholder="Please select" v-on:change="handleChange">
        <vui-option value="new york">New York</vui-option>
        <vui-option value="london">London</vui-option>
        <vui-option value="sydney">Sydney</vui-option>
        <vui-option value="ottawa">Ottawa</vui-option>
        <vui-option value="paris">Paris</vui-option>
        <vui-option value="canberra">Canberra</vui-option>
      </vui-select>
    </template>
    <template slot="title">多选</template>
    <template slot="description">
      <p>设置 <code>multiple</code> 属性可以开启多选模式。多选模式下，<code>v-model</code> 接受数组类型的数据。</p>
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
        value: ["london", "ottawa"]
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>