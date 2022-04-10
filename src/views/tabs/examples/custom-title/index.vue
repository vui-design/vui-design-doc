<template>
  <example v-bind:code="code" id="example-tabs-custom-title">
    <template slot="demo">
      <vui-tabs>
        <vui-tab-panel key="tab1">
          <template slot="title">
            <span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>
            <vui-badge status="error" />
          </template>
          Content of Tab Panel 1
        </vui-tab-panel>
        <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>
        <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>
      </vui-tabs>
    </template>
    <template slot="title">自定义标题</template>
    <template slot="description">
      <p>可以通过具名插槽来实现自定义页签标题。</p>
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