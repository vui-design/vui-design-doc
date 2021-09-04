<template>
  <example v-bind:code="code" id="example-modal-basic-usage">
    <template slot="demo">
      <div class="example-modal-basic-usage">
        <vui-button type="primary" v-on:click="showModal">Open basic modal</vui-button>
        <vui-modal
          v-model="visible"
          title="Modal Title"
          v-on:ok="handleOk"
          v-on:cancel="handleCancel"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的使用方法，通过控制 <code>visible</code> 属性来显示或隐藏对话框。可以使用 <code>v-model</code> 双向绑定。</p>
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
      },
      handleOk() {
        this.$message.info("Clicked ok");
      },
      handleCancel() {
        this.$message.info("Clicked cancel");
      }
    }
  };
</script>