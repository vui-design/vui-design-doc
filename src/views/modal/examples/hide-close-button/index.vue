<template>
  <example v-bind:code="code" id="example-modal-hide-close-button">
    <template slot="demo">
      <div class="example-modal-hide-close-button">
        <vui-button type="primary" v-on:click="showModal">Hide Close Button</vui-button>
        <vui-modal v-model="visible" v-bind:closable="false" title="Modal Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
      </div>
    </template>
    <template slot="title">隐藏关闭按钮</template>
    <template slot="description">
      <p>将 <code>closable</code> 属性设置为 <code>false</code>，可以隐藏对话框右上角的关闭按钮。</p>
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
      showModal() {
        this.visible = true;
      }
    }
  };
</script>