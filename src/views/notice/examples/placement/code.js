const code =
`<template>
  <div class="example-notice-placement">
    <vui-button type="primary" v-on:click="showTopLeftNotice">Top Left</vui-button>
    <vui-button type="primary" v-on:click="showTopRightNotice">Top Right</vui-button>
    <vui-button type="primary" v-on:click="showBottomLeftNotice">Bottom Left</vui-button>
    <vui-button type="primary" v-on:click="showBottomRightNotice">Bottom Right</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showTopLeftNotice() {
        this.$notice.info({
          title: "This is the title",
          description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
          placement: "top-left"
        });
      },
      showTopRightNotice() {
        this.$notice.info({
          title: "This is the title",
          description: "This is the description of the notice. This is the description of the notice. This is the description of the notice."
        });
      },
      showBottomLeftNotice() {
        this.$notice.info({
          title: "This is the title",
          description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
          placement: "bottom-left"
        });
      },
      showBottomRightNotice() {
        this.$notice.info({
          title: "This is the title",
          description: "This is the description of the notice. This is the description of the notice. This is the description of the notice.",
          placement: "bottom-right"
        });
      }
    }
  };
</script>

<style>
  .example-notice-placement > .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;