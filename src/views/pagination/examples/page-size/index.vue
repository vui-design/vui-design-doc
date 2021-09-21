<template>
  <example v-bind:code="code" id="example-pagination-page-size">
    <template slot="demo">
      <vui-pagination v-model="page" v-bind:total="500" showPageSizer v-on:changePageSize="handleChangePageSize" />
    </template>
    <template slot="title">每页数量</template>
    <template slot="description">
      <p>可以切换每页显示的数量。</p>
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
        page: 3
      };
    },
    watch: {
      page(value) {
        console.log("page: " + value);
      }
    },
    methods: {
      handleChangePageSize(value) {
        console.log("pageSize: " + value);
      }
    }
  };
</script>