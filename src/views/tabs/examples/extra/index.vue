<template>
  <example v-bind:code="code" id="example-tabs-extra">
    <template slot="demo">
      <vui-tabs type="card">
        <vui-link slot="extra" type="primary" block>Link</vui-link>
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
    <template slot="title">附加内容</template>
    <template slot="description">
      <p>可以在页签右侧添加附加内容。</p>
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