<template>
  <example v-bind:code="code" id="example-pagination-flip-button">
    <template slot="demo">
      <vui-pagination v-model="page" v-bind:total="100" prevPageText="上一页" nextPageText="下一页" />
    </template>
    <template slot="title">翻页按钮文本</template>
    <template slot="description">
      <p>自定义翻页按钮的文本。</p>
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
        page: 1
      };
    },
    watch: {
      page(value) {
        console.log("page: " + value);
      }
    }
  };
</script>