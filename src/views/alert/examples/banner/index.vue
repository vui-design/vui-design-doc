<template>
  <example v-bind:code="code" id="example-alert-banner">
    <template slot="demo">
      <browser>
        <div class="example-alert-banner">
          <vui-alert type="warning" showIcon message="Warning" banner />
          <vui-alert type="warning" showIcon message="Detailed description and advice about warning copywriting." banner closable />
          <vui-alert type="success" message="Success without icon" banner />
          <vui-alert type="error" showIcon message="This is an error message about copywriting." banner />
        </div>
      </browser>
    </template>
    <template slot="title">顶部公告</template>
    <template slot="description">
      <p>设置 <code>banner</code> 属性可以应用顶部公告样式。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import Browser from "src/components/browser";
  import code from "./code";

  export default {
    components: {
      Example,
      Browser
    },
    data() {
      return {
        code
      };
    }
  };
</script>

<style>
  .example-alert-banner .vui-alert + .vui-alert { margin-top:16px; }
</style>