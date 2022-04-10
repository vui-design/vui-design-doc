<template>
  <example v-bind:code="code" id="example-tabs-icon">
    <template slot="demo">
      <vui-tabs>
        <vui-tab-panel key="tab1" icon="apps" title="Tab 1">
          Content of Tab Panel 1
        </vui-tab-panel>
        <vui-tab-panel key="tab2" icon="bar-chart" title="Tab 2">
          Content of Tab Panel 2
        </vui-tab-panel>
        <vui-tab-panel key="tab3" icon="pie-chart" title="Tab 3">
          Content of Tab Panel 3
        </vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">图标</template>
    <template slot="description">
      <p>设置 <code>icon</code> 属性，可以为页签添加一个图标</p>
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