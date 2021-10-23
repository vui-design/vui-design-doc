<template>
  <example v-bind:code="code" id="example-anchor-basic-usage">
    <template slot="demo">
      <vui-anchor style="background-color: #fff;">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-open-in-new-window" target="_blank" title="Open in new window" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-anchor-customize-highlight" title="Customize highlight" />
        <vui-anchor-link href="#example-anchor-offset" title="Offset" />
        <vui-anchor-link href="#example-anchor-click" title="Click" />
        <vui-anchor-link href="#example-anchor-change" title="Change" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的用法。</p>
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