<template>
  <example v-bind:code="code" id="example-badge-basic-usage">
    <template slot="demo">
      <div class="example-badge-basic-usage">
        <vui-badge v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge v-bind:count="0">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>简单的徽标展示。当 <code>count</code> 为 <code>0</code> 时，不会显示。</p>
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
  .example-badge-basic-usage > .vui-badge { margin-right:16px; }
  .example-badge-basic-usage > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>