<template>
  <example v-bind:code="code" id="example-anchor-open-in-new-window">
    <template slot="demo">
      <vui-anchor v-bind:affix="false">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-open-in-new-window" target="_blank" title="Open in new window" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
    <template slot="title">新窗口中打开</template>
    <template slot="description">
      <p>设置 <code>AnchorLink</code> 的 <code>target</code> 属性为 <code>_blank</code>，可以在新窗口中打开锚点连接。</p>
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