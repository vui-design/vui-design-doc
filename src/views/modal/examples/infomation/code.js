const code =
`<template>
  <div class="example-modal-information">
    <vui-button type="primary" @click="showInfoNotice">消息</vui-button>
    <vui-button type="warning" @click="showWarningNotice">警告</vui-button>
    <vui-button type="success" @click="showSuccessNotice">成功</vui-button>
    <vui-button type="error" @click="showErrorNotice">失败</vui-button>
  </div>
</template>

<script>
  export default {
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

<style>
  .example-modal-information > .vui-button { margin-right:10px; }
</style>
`;

export default code;