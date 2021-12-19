<template>
  <example v-bind:code="code" id="example-link-disabled">
    <template slot="demo">
      <div class="example-link-disabled">
        <vui-link href="https://github.com/vui-design/vui-design" target="_blank" disabled>Default</vui-link>
        <vui-link type="primary" disabled>Primary</vui-link>
        <vui-link type="info" disabled>Info</vui-link>
        <vui-link type="warning" disabled>Warning</vui-link>
        <vui-link type="success" disabled>Success</vui-link>
        <vui-link type="danger" disabled>Danger</vui-link>
      </div>
    </template>
    <template slot="title">禁用</template>
    <template slot="description">
      <p>禁用的文字链接。</p>
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
  .example-link-disabled .vui-link + .vui-link { margin-left:16px; }
</style>