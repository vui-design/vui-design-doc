<template>
  <example v-bind:code="code" id="example-alert-description">
    <template slot="demo">
      <div class="example-alert-description">
        <vui-alert message="Information">
          <p slot="description">Additional description and information about copywriting.</p>
        </vui-alert>
        <vui-alert type="warning" message="Warning" description="Detailed description and advice about successful copywriting." />
        <vui-alert type="success" message="Success" description="This is a warning notice about copywriting." />
        <vui-alert type="error" message="Error" description="This is an error message about copywriting." />
      </div>
    </template>
    <template slot="title">描述信息</template>
    <template slot="description">
      <p>含有描述信息的警告提示。</p>
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
  .example-alert-description .vui-alert + .vui-alert { margin-top:16px; }
</style>