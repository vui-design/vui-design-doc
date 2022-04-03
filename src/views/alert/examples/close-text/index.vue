<template>
  <example v-bind:code="code" id="example-alert-close-text">
    <template slot="demo">
      <vui-alert type="success" message="Success" closable closeText="Close" />
    </template>
    <template slot="title">自定义关闭按钮</template>
    <template slot="description">
      <p>允许自定义关闭按钮，自定义的文本会替换默认的关闭图标。</p>
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