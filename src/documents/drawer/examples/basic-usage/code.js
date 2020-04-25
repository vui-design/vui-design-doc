const code =
`<template>
  <div class="example-drawer-basic-usage">
    <vui-button type="primary" @click="handleOpen">Open basic drawer</vui-button>
    <vui-drawer title="Drawer Title" v-model="visible">
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
      handleOpen() {
        this.visible = true;
      }
    }
  };
</script>
`;

export default code;