<template>
  <example v-bind:code="code" id="example-pagination-simple">
    <template slot="demo">
      <div class="example-pagination-simple">
        <vui-pagination simple v-bind:total="50" />
        <vui-pagination simple v-bind:total="50" showTotal />
      </div>
    </template>
    <template slot="title">简洁版本</template>
    <template slot="description">
      <p>设置 <code>simple</code> 属性即可使用简洁版本的分页，通过输入页码回车切换，或使用键盘的上下键来切换。</p>
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
  .example-pagination-simple .vui-pagination + .vui-pagination { margin-top:16px; }
</style>