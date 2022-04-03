<template>
  <example v-bind:code="code" id="example-modal-button-props">
    <template slot="demo">
      <div class="example-modal-button-props">
        <vui-button type="primary" v-on:click="showModal">Open modal with customized button props</vui-button>
        <vui-modal
          v-model="visible"
          title="Modal Title"
          cancelText="Cancel"
          okText="Delete"
          v-bind:cancelButtonProps="cancelButtonProps"
          v-bind:okButtonProps="okButtonProps"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </vui-modal>
      </div>
    </template>
    <template slot="title">按钮属性</template>
    <template slot="description">
      <p>通过 <code>cancelText</code> 和 <code>okText</code> 属性来设置按钮的显示文字。</p>
      <p>设置 <code>cancelButtonProps</code> 和 <code>okButtonProps</code> 分别定义取消按钮和确定按钮的属性，详见 <router-link to="/components/button">Button</router-link> 组件。</p>
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
        cancelButtonProps: {
          props: {
            type: "text"
          }
        },
        okButtonProps: {
          props: {
            type: "danger"
          }
        }
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      }
    }
  };
</script>