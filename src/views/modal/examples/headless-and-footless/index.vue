<template>
  <example v-bind:code="code" id="example-modal-headless-and-footless">
    <template slot="demo">
      <div class="example-modal-headless-and-footless">
        <vui-space>
          <vui-button type="primary" v-on:click="showModal1">No Header</vui-button>
          <vui-button type="primary" v-on:click="showModal2">No Footer</vui-button>
        </vui-space>
        <vui-modal v-model="visible1">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
        <vui-modal v-model="visible2" v-bind:showFooter="false" title="Modal Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
      </div>
    </template>
    <template slot="title">隐藏页头页脚</template>
    <template slot="description">
      <p>未设置 <code>title</code> 标题时，头部将自动隐藏。</p>
      <p>将 <code>showFooter</code> 属性设置为 <code>false</code> 来隐藏对话框的底部内容。</p>
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
      showModal1() {
        this.visible1 = true;
      },
      showModal2() {
        this.visible2 = true;
      }
    }
  };
</script>