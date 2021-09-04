<template>
  <example v-bind:code="code" id="example-switch-text">
    <template slot="demo">
      <div class="example-switch-text">
        <vui-switch checkedText="开" uncheckedText="关" />
        <vui-switch v-bind:checkedText="1" v-bind:uncheckedText="0" />
        <vui-switch checked>
          <vui-icon type="checkmark" slot="checkedText" />
          <vui-icon type="crossmark" slot="uncheckedText" />
        </vui-switch>
      </div>
    </template>
    <template slot="title">文字图标</template>
    <template slot="description">
      <p>带有文字或图标的开关。</p>
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
  .example-switch-text .vui-switch + .vui-switch { margin-left:16px; }
</style>