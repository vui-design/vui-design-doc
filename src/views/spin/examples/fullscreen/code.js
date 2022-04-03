const code =
`<template>
  <div class="example-spin-fullscreen">
    <vui-button type="primary" v-on:click="showSpin">全屏加载，3秒后关闭</vui-button>
    <vui-button outline v-on:click="showCustomSpin">自定义指示符</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showSpin() {
        const spin = this.$spin.spinning();

        setTimeout(() => spin.cancel(), 3000);
      },
      showCustomSpin() {
        const spin = this.$spin.spinning({
          indicator(h) {
            const props = {
              type: "loading-spinner"
            };
            const style = {
              fontSize: "34px"
            };

            return h("vui-icon", { props, style });
          },
          background: "rgba(0, 0, 0, 0.5)"
        });

        setTimeout(() => spin.cancel(), 3000);
      }
    }
  };
</script>

<style>
  .example-spin-fullscreen > .vui-button { margin-right:10px; }
</style>
`;

export default code;