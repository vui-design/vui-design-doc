<template>
  <example v-bind:code="code" id="example-link-size">
    <template slot="demo">
      <div class="example-link-size">
        <section>
          <vui-link size="small">Default</vui-link>
          <vui-link type="primary" size="small">Primary</vui-link>
          <vui-link icon="edit" size="small">Edit</vui-link>
          <vui-link type="danger" icon="dustbin" size="small">Delete</vui-link>
        </section>
        <section>
          <vui-link>Default</vui-link>
          <vui-link type="primary">Primary</vui-link>
          <vui-link icon="edit">Edit</vui-link>
          <vui-link type="danger" icon="dustbin">Delete</vui-link>
        </section>
        <section>
          <vui-link size="large">Default</vui-link>
          <vui-link type="primary" size="large">Primary</vui-link>
          <vui-link icon="edit" size="large">Edit</vui-link>
          <vui-link type="danger" icon="dustbin" size="large">Delete</vui-link>
        </section>
      </div>
    </template>
    <template slot="title">链接尺寸</template>
    <template slot="description">
      <p>文字链接有小、中、大三种尺寸。</p>
      <p>通过设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 以使用小型或大型文字链接。若不设置 <code>size</code>，则默认为中型尺寸。</p>
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
  .example-link-size > section + section { margin-top:8px; }
  .example-link-size > section > .vui-link + .vui-link { margin-left:16px; }
</style>