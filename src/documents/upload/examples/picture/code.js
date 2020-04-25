const code =
`<template>
  <div class="example-upload-picture">
    <vui-upload
      v-bind:list="list"
      v-bind:listType="listType"
      v-bind:action="action"
      v-on:change="handleChange"
      v-on:preview="handlePreview"
      v-on:remove="handleRemove"
    >
      <vui-button icon="upload">Click To Upload</vui-button>
    </vui-upload>
    <vui-modal v-model="visible" headless footless centered>
      <img style="width: 100%;" v-bind:src="image" v-bind:alt="image" />
    </vui-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        listType: "picture",
        action: "//jsonplaceholder.typicode.com/posts/",
        image: "",
        visible: false
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.list = fileList;
      },
      handlePreview(file, fileList) {
        this.image = file.url;
        this.visible = true;
      },
      handleRemove(file, fileList) {
        console.log(file.name);
      }
    }
  };
</script>
`;

export default code;