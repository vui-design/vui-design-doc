<template>
  <example v-bind:code="code" id="example-drawer-placement">
    <template slot="demo">
      <div class="example-drawer-placement">
        <vui-radio-group type="button" v-model="placement">
          <vui-radio value="top">Top</vui-radio>
          <vui-radio value="bottom">Bottom</vui-radio>
          <vui-radio value="left">Left</vui-radio>
          <vui-radio value="right">Right</vui-radio>
        </vui-radio-group>
        <vui-button type="primary" v-on:click="showDrawer">Open</vui-button>
        <vui-drawer v-model="visible" v-bind:placement="placement" title="Basic Usage">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-drawer>
      </div>
    </template>
    <template slot="title">自定义位置</template>
    <template slot="description">
      <p>自定义位置，点击打开按钮抽屉从右滑出，点击遮罩区关闭。</p>
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
        visible: false,
        placement: "right"
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      }
    }
  };
</script>

<style>
  .example-drawer-placement .vui-radio-group { margin-right:16px; }
</style>