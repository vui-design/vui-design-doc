<template>
  <example v-bind:code="code" id="example-tabs-card">
    <template slot="demo">
      <vui-tabs type="card">
        <vui-tab-panel key="tab1" title="Tab 1">
          Content of Tab Panel 1
        </vui-tab-panel>
        <vui-tab-panel key="tab2" title="Tab 2">
          Content of Tab Panel 2
        </vui-tab-panel>
        <vui-tab-panel key="tab3" title="Tab 3">
          Content of Tab Panel 3
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">卡片样式</template>
    <template slot="description">
      <p>卡片样式的页签，一般用于容器顶部。</p>
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