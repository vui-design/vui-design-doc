<template>
  <example v-bind:code="code" id="example-pagination-align">
    <template slot="demo">
      <div class="example-pagination-simple">
        <vui-pagination v-bind:total="500" />
        <vui-pagination v-bind:total="500" align="center" />
        <vui-pagination v-bind:total="500" align="right" />
      </div>
    </template>
    <template slot="title">对齐方式</template>
    <template slot="description">
      <p>通过 <code>align</code> 属性设置分页的对齐方式。</p>
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

<style>
  .example-pagination-align .vui-pagination + .vui-pagination { margin-top:16px; }
</style>