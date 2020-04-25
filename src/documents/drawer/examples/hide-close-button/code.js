const code =
`<template>
  <div class="example-drawer-hide-close-button">
    <vui-button type="primary" @click="showDrawer">Hide close cutton</vui-button>
    <vui-drawer title="Drawer Title" :closable="false" v-model="visible">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      }
    }
  };
</script>
`;

export default code;