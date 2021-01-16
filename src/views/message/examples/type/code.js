const code =
`<template>
  <div class="example-message-type">
    <vui-button type="info" @click="showInfoMessage">Info</vui-button>
    <vui-button type="warning" @click="showWarningMessage">Warning</vui-button>
    <vui-button type="success" @click="showSuccessMessage">Success</vui-button>
    <vui-button type="error" @click="showErrorMessage">Error</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showInfoMessage() {
        this.$message.info("This is a info message");
      },
      showWarningMessage() {
        this.$message.warning("This is a warning message");
      },
      showSuccessMessage() {
        this.$message.success("This is a success message");
      },
      showErrorMessage() {
        this.$message.error("This is a error message");
      }
    }
  };
</script>
`;

export default code;