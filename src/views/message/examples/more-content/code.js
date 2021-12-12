const code =
`<template>
  <div class="example-message-more-content">
    <vui-button type="primary" v-on:click="showVNodeMessage">VNode</vui-button>
    <vui-button type="primary" v-on:click="showFunctionMessage">Function</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showVNodeMessage() {
        const content = (
          <div>The message content is <span style="color: #2d8cf0;">VNode</span> virtual node.</div>
        );

        this.$message.info({
          content
        });
      },
      showFunctionMessage() {
        this.$message.info({
          content(h) {
            return h("div", null, "I was returned by a function.");
          }
        });
      }
    }
  };
</script>

<style>
  .example-message-more-content .vui-button + .vui-button { margin-left:10px; }
</style>
`;

export default code;