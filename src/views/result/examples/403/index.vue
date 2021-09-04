<template>
  <example v-bind:code="code" id="example-result-403">
    <template slot="demo">
      <vui-result
        status="403"
        title="403"
        description="Sorry, you are not authorized to access this page."
      >
        <template slot="extra">
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template slot="title">403</template>
    <template slot="description">
      <p>你没有此页面的访问权限。</p>
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