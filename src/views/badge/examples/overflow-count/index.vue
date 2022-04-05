<template>
  <example v-bind:code="code" id="example-badge-overflow-count">
    <template slot="demo">
      <div class="example-badge-overflow-count">
        <vui-badge v-bind:count="99">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge v-bind:count="100">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge v-bind:count="1000" v-bind:overflowCount="999">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
      </div>
    </template>
    <template slot="title">封顶数值</template>
    <template slot="description">
      <p>当 <code>count</code> 大于 <code>overflowCount</code> 限定的值时会显示为 <code>overflowCount+</code>，默认的 <code>overflowCount</code> 为 <code>99</code>。</p>
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
  .example-badge-overflow-count > .vui-badge { margin-right:16px; }
  .example-badge-overflow-count > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>