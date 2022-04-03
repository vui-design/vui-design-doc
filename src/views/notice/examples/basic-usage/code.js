const code =
`<template>
  <div class="example-notice-basic-usage">
    <vui-button type="primary" v-on:click="showNotice(true)">With description</vui-button>
    <vui-button v-on:click="showNotice(false)">No description</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showNotice(withDescription) {
        this.$notice.open({
          title: "This is the title",
          description: withDescription ? "This is the description of the notice. This is the description of the notice. This is the description of the notice." : ""
        });
      }
    }
  };
</script>

<style>
  .example-notice-basic-usage > .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;