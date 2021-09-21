<template>
  <example v-bind:code="code" id="example-pagination-more">
    <template slot="demo">
      <vui-pagination v-model="page" v-bind:total="500" />
    </template>
    <template slot="title">更多分页</template>
    <template slot="description">
      <p>更多分页，当页数过多时会自动折叠。</p>
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
        page: 6
      };
    },
    watch: {
      page(value) {
        console.log("page: " + value);
      }
    }
  };
</script>