<template>
  <example v-bind:code="code" id="example-drawer-get-popup-container">
    <template slot="demo">
      <div class="example-drawer-get-popup-container">
        <div style="width: 600px;">
          <vui-button type="primary" v-on:click="showDrawer">Open</vui-button>
        </div>
        <vui-drawer v-model="visible" v-bind:showFooter="false" v-bind:getPopupContainer="false" width="50%" title="Drawer Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-drawer>
      </div>
    </template>
    <template slot="title">渲染在当前容器</template>
    <template slot="description">
      <p>渲染在当前容器里。自定义容器，查看 <code>getPopupContainer</code> 属性。</p>
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
        visible: false
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
  .example-drawer-get-popup-container { position:relative; height:240px; border:1px solid #f0f0f0; background-color:#f6f6f6; padding:48px; overflow:auto; }
</style>