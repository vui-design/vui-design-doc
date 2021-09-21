<template>
  <example v-bind:code="code" id="example-pagination-total">
    <template slot="demo">
      <div class="example-pagination-total">
        <vui-pagination v-bind:total="95" showTotal />
        <vui-pagination v-bind:total="95" v-bind:showTotal="showTotal" />
      </div>
    </template>
    <template slot="title">总数</template>
    <template slot="description">
      <p>通过设置 <code>showTotal</code> 展示总共有多少数据。 </p>
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
    },
    methods: {
      showTotal(total, range) {
        return range[0] + "~" + range[1] + " / " + total;
      }
    }
  };
</script>

<style>
  .example-pagination-total .vui-pagination + .vui-pagination { margin-top:16px; }
</style>