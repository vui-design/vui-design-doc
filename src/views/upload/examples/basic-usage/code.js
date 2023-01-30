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
      handleReady(file, list) {
        console.log(file.name + " ready!");
      },
      handleProgress(progress, file, list) {
        console.log(file.name + " upload " + file.percentage + "%!");
      },
      handleSuccess(response, file, list) {
        this.$message.success(file.name + " upload successfully!");
      },
      handleError(error, file, list) {
        this.$message.error(file.name + " upload failed!");
      },
      handleChange(file, list) {
        console.log(file.name, list.length);
      }
    }
  };
</script>
`;

export default code;