<template>
  <example v-bind:code="code" id="example-link-icon">
    <template slot="demo">
      <div class="example-link-icon">
        <vui-link icon="edit">Edit</vui-link>
        <vui-link>
          <vui-icon slot="icon" type="dustbin" />Delete
        </vui-link>
        <vui-link>
          More<vui-icon type="chevron-down" />
        </vui-link>
      </div>
    </template>
    <template slot="title">图标</template>
    <template slot="description">
      <p>带图标的文字链接可增强辨识度。</p>
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
  .example-link-icon .vui-link + .vui-link { margin-left:16px; }
</style>