const code =
`<template>
  <vui-button type="primary" v-on:click="showLoadingMessage">Loading</vui-button>
</template>

<script>
  export default {
    methods: {
      showLoadingMessage() {
        const loading = this.$message.loading({
          content: "Action in progress..",
          duration: 0
        });

        setTimeout(() => {
          loading.close();
          this.$message.success("Action succeeded");
        }, 3000);
      }
    }
  };
</script>
`;

export default code;