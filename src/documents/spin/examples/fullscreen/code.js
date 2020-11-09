const code =
`<template>
  <div class="example-spin-fullscreen">
    <vui-button type="primary" v-on:click="showShowSpin">全屏加载，3秒后关闭</vui-button>
    <vui-button outline v-on:click="showShowCustomSpin">自定义指示符</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showShowSpin() {
        const spin = this.$spin.spinning();

        setTimeout(() => spin.cancel(), 3000);
      },
      showShowCustomSpin() {
        const spin = this.$spin.spinning({
          indicator(h) {
            return h("vui-icon", {
              props: {
                type: "loading-spinner"
              },
              style: {
                fontSize: "24px"
              }
            });
          }
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