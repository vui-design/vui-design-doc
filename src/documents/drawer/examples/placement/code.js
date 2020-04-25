const code =
`<template>
  <div class="example-drawer-placement">
    <vui-radio-group type="button" v-model="placement">
      <vui-radio value="top">Top</vui-radio>
      <vui-radio value="bottom">Bottom</vui-radio>
      <vui-radio value="left">Left</vui-radio>
      <vui-radio value="right">Right</vui-radio>
    </vui-radio-group>
    <vui-button type="primary" @click="handleOpen">Open</vui-button>
    <vui-drawer title="Basic Usage" v-model="visible" :placement="placement">
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
        visible: false,
        placement: "right"
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