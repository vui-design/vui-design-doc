<template>
  <example v-bind:code="code" id="example-result-404">
    <template slot="demo">
      <vui-result
        status="404"
        title="404"
        description="Sorry, the page you visited does not exist."
      >
        <template slot="extra">
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template slot="title">404</template>
    <template slot="description">
      <p>此页面未找到。</p>
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