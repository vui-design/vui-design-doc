<template>
  <vui-doc-example v-bind:code="code" id="example-result-comingsoon">
    <template slot="demo">
      <vui-result
        status="comingsoon"
        title="Coming Soon!"
        description="Sorry, The current page is under development, so stay tuned!"
      >
        <template slot="extra">
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template slot="title">Coming Soon</template>
    <template slot="description">
      <p>敬请期待！</p>
    </template>
  </vui-doc-example>
</template>

<script>
  import VuiDocExample from "src/components/example";
  import code from "./code";

  export default {
    components: {
      VuiDocExample
    },
    data() {
      return {
        code
      };
    }
  };
</script>