const code =
`<template>
  <vui-button type="primary" v-on:click="showNotice">Customized duration</vui-button>
</template>

<script>
  export default {
    methods: {
      showNotice() {
        this.$notice.info({
          title: "I'll be gone in 10 seconds..",
          description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
          duration: 10
        });
      }
    }
  };
</script>
`;

export default code;