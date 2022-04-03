<template>
  <example v-bind:code="code" id="example-drawer-headless-and-footless">
    <template slot="demo">
      <div class="example-drawer-headless-and-footless">
        <vui-button type="primary" v-on:click="showDrawer1">No header</vui-button>
        <vui-drawer v-model="visible1">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-drawer>
        <vui-button type="primary" v-on:click="showDrawer2">No footer</vui-button>
        <vui-drawer v-model="visible2" v-bind:showFooter="false" title="Drawer Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-drawer>
      </div>
    </template>
    <template slot="title">隐藏页头页脚</template>
    <template slot="description">
      <p>未设置 <code>title</code> 标题时，头部将自动隐藏。</p>
      <p>将 <code>showFooter</code> 属性设置为 <code>false</code> 来隐藏抽屉的底部内容。</p>
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
        code,
        visible1: false,
        visible2: false
      };
    },
    methods: {
      showDrawer1() {
        this.visible1 = true;
      },
      showDrawer2() {
        this.visible2 = true;
      }
    }
  };
</script>

<style>
  .example-drawer-headless-and-footless > .vui-button { margin-right:16px; }
</style>