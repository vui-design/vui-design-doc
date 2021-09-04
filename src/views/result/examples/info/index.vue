<template>
  <example v-bind:code="code" id="example-result-info">
    <template slot="demo">
      <vui-result
        title="This is result title"
        description="Here is a brief description of the result of the operation."
      >
        <template slot="extra">
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template slot="title">消息类型</template>
    <template slot="description">
      <p>消息类型的结果展示。</p>
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