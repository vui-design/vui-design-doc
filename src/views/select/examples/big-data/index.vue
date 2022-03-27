<template>
  <example v-bind:code="code" id="example-select-big-data">
    <template slot="demo">
      <div class="example-select-big-data">
        <vui-select v-model="value1" searchable style="width: 200px;" placeholder="Please select">
          <vui-option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{option.label}}</vui-option>
        </vui-select>
        <vui-select v-model="value2" multiple searchable placeholder="Please select">
          <vui-option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{option.label}}</vui-option>
        </vui-select>
      </div>
    </template>
    <template slot="title">大数据</template>
    <template slot="description">
      <p><code>Select</code> 组件支持了虚拟滚动技术，在含有大数量选项的同时保持了良好的性能。</p>
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
      let options = [];

      for (let i = 0; i < 10000; i++) {
        const index = i + 1;

        options.push({
          value: index,
          label: "Option " + index
        });
      }

      return {
        code,
        options: options,
        value1: undefined,
        value2: []
      };
    },
    watch: {
      value1(value) {
        console.log(value);
      },
      value2(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-select-big-data .vui-select + .vui-select { margin-top:16px; }
</style>