const code =
`<template>
  <vui-upload
    ref="uploader"
    v-bind:list="list"
    v-bind:action="action"
    v-bind:autoUpload="autoUpload"
    v-on:change="handleChange"
  >
    <vui-button icon="image" slot="trigger">Select</vui-button>
    <vui-button icon="upload" style="margin-left: 10px;" v-bind:disabled="list.length === 0" v-on:click="handleUpload">Upload</vui-button>
  </vui-upload>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        action: "//jsonplaceholder.typicode.com/posts/",
        autoUpload: false
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.list = fileList;
      },
      handleUpload() {
        this.$refs.uploader.upload();
      }
    }
  };
</script>
`;

export default code;