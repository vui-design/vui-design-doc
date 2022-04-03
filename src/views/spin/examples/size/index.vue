<template>
  <example v-bind:code="code" id="example-spin-size">
    <template slot="demo">
      <div class="example-spin-size">
        <vui-spin size="small" />
        <vui-spin />
        <vui-spin size="large" />
      </div>
    </template>
    <template slot="title">各种尺寸</template>
    <template slot="description">
      <p>建议将小型尺寸用于文本加载，默认尺寸用于卡片容器级加载，大型尺寸用于页面级加载。</p>
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
  .example-spin-size > .vui-spin + .vui-spin { margin-left:16px; }
</style>