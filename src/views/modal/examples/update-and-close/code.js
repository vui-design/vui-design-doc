const code =
`<template>
  <vui-button type="primary" v-on:click="showSuccessNotice">Close automatically after 5s</vui-button>
</template>

<script>
  export default {
    methods: {
      showSuccessNotice() {
        let seconds = 5;
        let modal = this.$modal.success({
          title: "Friendly Tips",
          description: "This modal will be closed after " + seconds + " second!"
        });
        let interval = setInterval(() => {
          seconds -= 1;
          modal.update({
            description: "This modal will be closed after " + seconds + " second!"
          });
        }, 1000);

        setTimeout(() => {
          clearInterval(interval);
          interval = null;

          modal.close();
        }, seconds * 1000);
      }
    }
  };
</script>
`;

export default code;