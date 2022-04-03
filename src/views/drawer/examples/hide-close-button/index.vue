<template>
  <example v-bind:code="code" id="example-drawer-hide-close-button">
    <template slot="demo">
      <div class="example-drawer-hide-close-button">
        <vui-button type="primary" v-on:click="showDrawer">Hide close button</vui-button>
        <vui-drawer v-model="visible" v-bind:closable="false" title="Drawer Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-drawer>
      </div>
    </template>
    <template slot="title">隐藏关闭按钮</template>
    <template slot="description">
      <p>将 <code>closable</code> 属性设置为 <code>false</code>，可以隐藏抽屉右上角的关闭按钮。</p>
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