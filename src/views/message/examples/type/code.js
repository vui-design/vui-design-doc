const code =
`<template>
  <div class="example-message-type">
    <vui-button type="info" ghost v-on:click="showInfoMessage">Info</vui-button>
    <vui-button type="warning" ghost v-on:click="showWarningMessage">Warning</vui-button>
    <vui-button type="success" ghost v-on:click="showSuccessMessage">Success</vui-button>
    <vui-button type="danger" ghost v-on:click="showErrorMessage">Error</vui-button>
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