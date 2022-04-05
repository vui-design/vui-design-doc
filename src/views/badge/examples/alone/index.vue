<template>
  <example v-bind:code="code" id="example-badge-alone">
    <template slot="demo">
      <div class="example-badge-alone">
        <vui-badge v-bind:count="99" />
        <vui-badge v-bind:count="100" />
        <vui-badge v-bind:count="1000" v-bind:overflowCount="999" />
        <vui-badge text="NEW" />
        <vui-badge text="HOT" />
      </div>
    </template>
    <template slot="title">独立使用</template>
    <template slot="description">
      <p>不包裹任何元素或组件。</p>
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

<style>
  .example-badge-alone > .vui-badge { margin-right:16px; }
</style>