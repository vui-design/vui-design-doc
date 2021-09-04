<template>
  <example v-bind:code="code" id="example-descriptions-basic-usage">
    <template slot="demo">
      <vui-descriptions title="User Info">
        <vui-description label="UserName">Zhang San</vui-description>
        <vui-description label="Telephone">18066668888</vui-description>
        <vui-description label="Live">Hangzhou, Zhejiang</vui-description>
        <vui-description label="Address" v-bind:span="2">
          No. 1, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China
        </vui-description>
        <vui-description label="Remark">Empty</vui-description>
      </vui-descriptions>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>简单的描述列表。</p>
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