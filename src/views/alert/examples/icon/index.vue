<template>
  <example v-bind:code="code" id="example-alert-icon">
    <template slot="demo">
      <div class="example-alert-icon">
        <vui-alert showIcon message="Infomation" />
        <vui-alert type="warning" showIcon message="Warning" />
        <vui-alert type="success" showIcon message="Success" />
        <vui-alert type="error" showIcon message="Error" />
        <vui-alert showIcon message="Information">
          <p slot="description">Additional description and information about copywriting.</p>
        </vui-alert>
        <vui-alert type="warning" showIcon message="Warning" description="Detailed description and advice about successful copywriting." />
        <vui-alert type="success" showIcon message="Success" description="This is a warning notice about copywriting." />
        <vui-alert type="error" showIcon message="Error" description="This is an error message about copywriting." />
      </div>
    </template>
    <template slot="title">图标</template>
    <template slot="description">
      <p>可口的图标让信息类型更加醒目。</p>
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
  .example-alert-icon .vui-alert + .vui-alert { margin-top:16px; }
</style>