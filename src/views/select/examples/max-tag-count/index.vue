<template>
  <example v-bind:code="code" id="example-select-max-tag-count">
    <template slot="demo">
      <div class="example-select-max-tag-count">
        <vui-select
          v-model="value1"
          v-bind:maxTagCount="2"
          multiple
          placeholder="Please select"
          v-on:change="handleChange1"
        >
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select
          v-model="value2"
          v-bind:maxTagCount="2"
          v-bind:maxTagPlaceholder="maxTagPlaceholder"
          multiple
          placeholder="Please select"
          v-on:change="handleChange2"
        >
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
      </div>
    </template>
    <template slot="title">最多显示数量</template>
    <template slot="description">
      <p>属性 <code>maxTagCount</code> 用于指定最多显示多少个 <code>tag</code> 标签，超出的部分折叠。</p>
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
        value1: [],
        value2: []
      };
    },
    methods: {
      maxTagPlaceholder(count) {
        return "More " + count;
      },
      handleChange1(value) {
        console.log(value);
      },
      handleChange2(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-select-max-tag-count .vui-select + .vui-select { margin-top:16px; }
</style>