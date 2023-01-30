const code =
`<template>
  <div class="example-upload-picture">
    <vui-upload
      v-bind:list="upload.list"
      v-bind:listType="upload.listType"
      v-bind:action="upload.action"
      v-on:preview="handlePreview"
      v-on:remove="handleRemove"
      v-on:change="handleChange"
    >
      <vui-button icon="upload">Click To Upload</vui-button>
    </vui-upload>
    <vui-modal v-model="modal.visible" v-bind:showFooter="false">
      <h4>{{modal.name}}</h4>
      <img style="width: 100%; margin-top: 16px;" v-bind:src="modal.url" v-bind:alt="modal.url" />
    </vui-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        upload: {
          list: [],
          listType: "picture",
          action: "//jsonplaceholder.typicode.com/posts/",
        },
        modal: {
          visible: false,
          name: "",
          url: ""
        }
      };
    },
    methods: {
      handlePreview(file, list) {
        this.modal.visible = true;
        this.modal.name = file.name;
        this.modal.url = file.url;
      },
      handleRemove(file, list) {
        console.log(file.name);
      },
      handleChange(file, list) {
        this.upload.list = list;
      }
    }
  };
</script>
`;

export default code;