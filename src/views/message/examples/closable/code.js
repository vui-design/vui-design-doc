const code =
`<template>
  <vui-button type="primary" v-on:click="showClosableMessage">Closable</vui-button>
</template>

<script>
  export default {
    methods: {
      showClosableMessage() {
        this.$message.info({
          content: "This is a message that can be closed manually",
          duration: 10,
          closable: true
        });
      }
    }
  };
</script>
`;

export default code;