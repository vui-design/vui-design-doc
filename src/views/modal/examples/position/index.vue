<template>
  <example v-bind:code="code" id="example-modal-position">
    <template slot="demo">
      <div class="example-modal-position">
        <vui-space>
          <vui-button type="primary" v-on:click="showModal1">Open modal at 50px to top</vui-button>
          <vui-button type="primary" v-on:click="showModal2">Vertically centered modal</vui-button>
        </vui-space>
        <vui-modal v-model="visible1" v-bind:top="50" title="Modal Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
        <vui-modal v-model="visible2" centered title="Modal Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
      </div>
    </template>
    <template slot="title">位置</template>
    <template slot="description">
      <p>使用 <code>top</code> 或 <code>centered</code> 属性来设置对话框的打开位置。</p>
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