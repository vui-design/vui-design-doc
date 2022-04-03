<template>
  <example v-bind:code="code" id="example-alert-closable">
    <template slot="demo">
      <div class="example-alert-closable">
        <vui-alert type="warning" message="Warning" closable />
        <vui-alert type="error" message="Error" description="This is an error message about copywriting." closable />
      </div>
    </template>
    <template slot="title">可关闭的警告提示</template>
    <template slot="description">
      <p>显示关闭按钮，点击可关闭警告提示。</p>
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
  .example-alert-closable .vui-alert + .vui-alert { margin-top:16px; }
</style>