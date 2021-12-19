const code =
`<template>
  <div class="example-message-background">
    <vui-button type="info" v-on:click="showInfoMessage">Info</vui-button>
    <vui-button type="warning" v-on:click="showWarningMessage">Warning</vui-button>
    <vui-button type="success" v-on:click="showSuccessMessage">Success</vui-button>
    <vui-button type="danger" v-on:click="showErrorMessage">Error</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showInfoMessage() {
        this.$message.info({
          background: true,
          content: "This is a info message"
        });
      },
      showWarningMessage() {
        this.$message.warning({
          background: true,
          content: "This is a warning message"
        });
      },
      showSuccessMessage() {
        this.$message.success({
          background: true,
          content: "This is a success message"
        });
      },
      showErrorMessage() {
        this.$message.error({
          background: true,
          content: "This is a error message"
        });
      }
    }
  };
</script>
`;

export default code;