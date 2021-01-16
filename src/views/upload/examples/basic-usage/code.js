const code =
`<template>
  <vui-upload
    v-bind:action="action"
    v-on:ready="handleReady"
    v-on:progress="handleProgress"
    v-on:success="handleSuccess"
    v-on:error="handleError"
    v-on:change="handleChange"
  >
    <vui-button icon="upload">Click To Upload</vui-button>
  </vui-upload>
</template>

<script>
  export default {
    data() {
      return {
        action: "//jsonplaceholder.typicode.com/posts/"
      };
    },
    methods: {
      handleReady(file, fileList) {
        console.log(file.name + " ready!");
      },
      handleProgress(progress, file, fileList) {
        console.log(file.name + "uploaded " + file.percentage + "%!");
      },
      handleSuccess(response, file, fileList) {
        this.$message.success(file.name + "uploaded successfully!");
      },
      handleError(error, file, fileList) {
        this.$message.error(file.name + "uploaded failed!");
      },
      handleChange(file, fileList) {
        console.log(file.name, fileList.length);
      }
    }
  };
</script>
`;

export default code;