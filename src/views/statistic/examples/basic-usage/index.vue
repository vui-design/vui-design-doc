<template>
  <example v-bind:code="code" id="example-statistic-basic-usage">
    <template slot="demo">
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="12">
          <vui-statistic v-bind:value="110888" title="Active Users" />
        </vui-col>
        <vui-col v-bind:span="12">
          <vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
        </vui-col>
      </vui-row>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>简单展示。</p>
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