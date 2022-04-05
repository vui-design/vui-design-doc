<template>
  <example v-bind:code="code" id="example-badge-type">
    <template slot="demo">
      <div class="example-badge-type">
        <vui-badge type="default" v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge type="primary" v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge type="info" v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge type="warning" v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge type="success" v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
      </div>
    </template>
    <template slot="title">预设类型</template>
    <template slot="description">
      <p>使用 <code>type</code> 属性，可以创建不同类型的徽标。默认情况下使用 <code>error</code> 类型。</p>
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
  .example-badge-type > .vui-badge { margin-right:16px; }
  .example-badge-type > .vui-badge > img { width:48px; height:48px; border-radius:5px; }
</style>