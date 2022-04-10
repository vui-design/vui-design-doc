<template>
  <example v-bind:code="code" id="example-tabs-disabled">
    <template slot="demo">
      <vui-tabs>
        <vui-tab-panel key="tab1" title="Tab 1">
          Content of Tab Panel 1
        </vui-tab-panel>
        <vui-tab-panel key="tab2" title="Tab 2" disabled>
          Content of Tab Panel 2
        </vui-tab-panel>
        <vui-tab-panel key="tab3" title="Tab 3">
          Content of Tab Panel 3
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">禁用</template>
    <template slot="description">
      <p>添加 <code>disabled</code> 属性可以禁用页签。</p>
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