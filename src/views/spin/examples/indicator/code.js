const code =
`<template>
  <div class="example-spin-indicator">
    <vui-spin>
      <vui-icon slot="indicator" type="loading-filled" style="font-size: 24px" />
    </vui-spin>
    <vui-spin v-bind:indicator="indicator" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      };
    }
  };
</script>

<style>
  .example-spin-indicator > .vui-spin + .vui-spin { margin-left:24px; }
</style>
`;

export default code;