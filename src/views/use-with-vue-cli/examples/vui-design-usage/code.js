const code =
`<template>
  <div id="app">
    <vui-button type="primary" @click="showModal">按钮</vui-button>
    <vui-modal v-model="visible" title="弹窗">这里是弹窗内容</vui-modal>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        visible: false
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      }
    }
  };
</script>

<style>
  #app {
    padding: 20px;
  }
</style>
`;

export default code;