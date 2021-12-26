<template>
  <example v-bind:code="code" id="example-link-underline">
    <template slot="demo">
      <div class="example-link-underline">
        <vui-link underline>Default</vui-link>
        <vui-link type="primary" underline>Primary</vui-link>
        <vui-link type="info" underline>Info</vui-link>
        <vui-link type="warning" underline>Warning</vui-link>
        <vui-link type="success" underline>Success</vui-link>
        <vui-link type="danger" underline>Danger</vui-link>
      </div>
    </template>
    <template slot="title">下划线</template>
    <template slot="description">
      <p>文字链接下划线。</p>
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
  .example-link-underline .vui-link + .vui-link { margin-left:16px; }
</style>