<template>
  <example v-bind:code="code" id="example-upload-picture-card">
    <template slot="demo">
      <div class="example-upload-picture-card">
        <vui-upload
          v-bind:list="upload.list"
          v-bind:listType="upload.listType"
          v-bind:action="upload.action"
          v-on:preview="handlePreview"
          v-on:remove="handleRemove"
          v-on:change="handleChange"
        >
          <template v-if="upload.list.length < 4">
            <vui-icon type="plus" v-bind:size="20" />
            <div style="margin-top: 8px;">Upload</div>
          </template>
        </vui-upload>
        <vui-modal v-model="modal.visible" v-bind:showFooter="false">
          <h4>{{modal.name}}</h4>
          <img style="width: 100%; margin-top: 16px;" v-bind:src="modal.url" v-bind:alt="modal.url" />
        </vui-modal>
      </div>
    </template>
    <template slot="title">照片墙</template>
    <template slot="description">
      <p>用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。</p>
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
          listType: "picture-card",
          action: "//www.mocky.io/v2/5cc8019d300000980a055e76",
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