<template>
  <example v-bind:code="code" id="example-upload-picture">
    <template slot="demo">
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
    <template slot="title">图片列表样式</template>
    <template slot="description">
      <p>上传文件为图片，可展示本地缩略图。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
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