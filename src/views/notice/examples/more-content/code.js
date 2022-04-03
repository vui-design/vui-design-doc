const code =
`<template>
  <div class="example-notice-more-content">
    <vui-button type="primary" v-on:click="showVNodeNotice">VNode</vui-button>
    <vui-button type="primary" v-on:click="showFunctionNotice">Function</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showVNodeNotice() {
        const description = (
          <div>The notice description is <span style="color: #2d8cf0;">VNode</span> virtual node.</div>
        );

        this.$notice.info({
          title: "This is the title",
          description
        });
      },
      showFunctionNotice() {
        this.$notice.info({
          title: "This is the title",
          description(h) {
            return h("div", null, "I was returned by a function.");
          }
        });
      }
    }
  };
</script>

<style>
  .example-notice-more-content .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;