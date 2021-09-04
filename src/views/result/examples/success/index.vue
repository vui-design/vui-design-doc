<template>
  <example v-bind:code="code" id="example-result-success">
    <template slot="demo">
      <vui-result
        status="success"
        title="This is result title"
        description="Here is a brief description of the result of the operation."
      >
        <vui-space slot="extra">
          <vui-button type="primary">Back Home</vui-button>
          <vui-button>Continue</vui-button>
        </vui-space>
      </vui-result>
    </template>
    <template slot="title">成功类型</template>
    <template slot="description">
      <p>操作成功的结果展示。</p>
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