<template>
  <example v-bind:code="code" id="example-tooltip-customized-content">
    <template slot="demo">
      <vui-tooltip v-bind:maxWidth="200">
        <vui-button>Customized content</vui-button>
        <div slot="content">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. </div>
      </vui-tooltip>
    </template>
    <template slot="title">自定义内容</template>
    <template slot="description">
      <p>通过 <code>content</code> 插槽自定义更丰富的内容。</p>
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