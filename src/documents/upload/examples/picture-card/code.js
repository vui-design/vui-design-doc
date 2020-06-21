const code =
`<template>
  <div class="example-upload-picture-card">
    <vui-upload
      v-bind:list="list"
      v-bind:listType="listType"
      v-bind:action="action"
      v-on:change="handleChange"
      v-on:preview="handlePreview"
      v-on:remove="handleRemove"
    >
      <template v-if="list.length < 4">
        <vui-icon type="plus" style="font-size: 20px;" />
        <div style="margin-top: 10px; font-size: 14px;">Upload</div>
      </template>
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
        listType: "picture-card",
        action: "//www.mocky.io/v2/5cc8019d300000980a055e76",
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