<template>
  <example v-bind:code="code" id="example-notice-placement">
    <template slot="demo">
      <div class="example-notice-placement">
        <vui-button type="primary" v-on:click="showTopLeftNotice">Top Left</vui-button>
        <vui-button type="primary" v-on:click="showTopRightNotice">Top Right</vui-button>
        <vui-button type="primary" v-on:click="showBottomLeftNotice">Bottom Left</vui-button>
        <vui-button type="primary" v-on:click="showBottomRightNotice">Bottom Right</vui-button>
      </div>
    </template>
    <template slot="title">弹出位置</template>
    <template slot="description">
      <p>可以设置通知提醒从左上角、右上角、左下角或右下角弹出，默认从右上角弹出。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code
      };
    },
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