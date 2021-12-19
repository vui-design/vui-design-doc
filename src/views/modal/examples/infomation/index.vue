<template>
  <example v-bind:code="code" id="example-modal-information">
    <template slot="demo">
      <vui-space>
        <vui-button type="primary" v-on:click="showInfoNotice">消息</vui-button>
        <vui-button type="warning" v-on:click="showWarningNotice">警告</vui-button>
        <vui-button type="success" v-on:click="showSuccessNotice">成功</vui-button>
        <vui-button type="danger" v-on:click="showErrorNotice">失败</vui-button>
      </vui-space>
    </template>
    <template slot="title">信息提示</template>
    <template slot="description">
      <p>四种类型的信息提示，只提供一个确定按钮用于关闭。</p>
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
    },
    methods: {
      showInfoNotice() {
        this.$modal.info({
          title: "This is a info message",
          description: "Some descriptions..."
        });
      },
      showWarningNotice() {
        this.$modal.warning({
          title: "This is a warning message",
          description: "Some descriptions..."
        });
      },
      showSuccessNotice() {
        this.$modal.success({
          title: "This is a success message",
          description: "Some descriptions..."
        });
      },
      showErrorNotice() {
        this.$modal.error({
          title: "This is a error message",
          description: "Some descriptions..."
        });
      }
    }
  };
</script>