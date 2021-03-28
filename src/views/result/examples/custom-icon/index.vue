<template>
  <vui-doc-example v-bind:code="code" id="example-result-custom-icon">
    <template slot="demo">
      <vui-result
        icon="checkmark-circle"
        title="Great, we have done all the operations!"
      >
        <template slot="extra">
          <vui-button type="primary">Next</vui-button>
        </template>
      </vui-result>
    </template>
    <template slot="title">自定义图标</template>
    <template slot="description">
      <p>通过 <code>icon</code> 属性自定义图标类型。</p>
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