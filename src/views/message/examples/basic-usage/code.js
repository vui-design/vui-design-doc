const code =
`<template>
  <vui-button type="primary" v-on:click="showNormalMessage">Normal</vui-button>
</template>

<script>
  export default {
    methods: {
      showNormalMessage() {
        this.$message.open("This is a normal message");
      }
    }
  };
</script>
`;

export default code;