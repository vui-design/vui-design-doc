<template>
  <example v-bind:code="code" id="example-ribbon-basic-usage">
    <template slot="demo">
      <vui-ribbon text="Hippies">
        <vui-card title="Pushes open the window">
          <p>and raises the spyglass.</p>
        </vui-card>
      </vui-ribbon>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>简单的缎带展示。</p>
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