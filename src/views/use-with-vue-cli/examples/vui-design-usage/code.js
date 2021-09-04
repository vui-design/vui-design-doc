const code =
`<template>
  <div id="app">
    <vui-button type="primary" @click="showModal">Click me!</vui-button>
    <vui-modal v-model="visible" title="Welcome">Welcome to Vui Design!</vui-modal>
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