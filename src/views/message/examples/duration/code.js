const code =
`<template>
  <vui-button type="primary" v-on:click="showDurationMessage">Customized duration</vui-button>
</template>

<script>
  export default {
    methods: {
      showDurationMessage() {
        this.$message.info({
          content: "I'll be gone in 10 seconds..",
          duration: 10
        });
      }
    }
  };
</script>
`;

export default code;