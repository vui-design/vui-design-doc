<template>
  <example v-bind:code="code" id="example-spin-inside">
    <template slot="demo">
      <div class="example-spin-inside">
        <vui-spin />
      </div>
    </template>
    <template slot="title">容器</template>
    <template slot="description">
      <p>放入一个容器中。</p>
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
  .example-spin-inside { border-radius:2px; background-color:#fafafa; padding:48px; text-align:center; }
</style>