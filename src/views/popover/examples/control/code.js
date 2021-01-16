const code =
`<template>
  <vui-popover trigger="click" title="Title" v-model="visible">
    <vui-button>Click me</vui-button>
    <div slot="content">
      <a href="javascript:;" v-on:click="handleClose">Click to close the popover.</a>
    </div>
  </vui-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    methods: {
      handleClose() {
        this.visible = false;
      }
    }
  };
</script>
`;

export default code;