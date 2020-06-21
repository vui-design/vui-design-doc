const code =
`<template>
  <div class="example-upload-avatar">
    <vui-upload
      v-bind:showList="showList"
      v-bind:listType="listType"
      v-bind:action="action"
      v-bind:beforeUpload="beforeUpload"
      v-on:change="handleChange"
    >
      <img v-if="image" v-bind:src="image" alt="avatar" style="width: 90px; height: 90px; object-fit: cover; object-position: center;" />
      <template v-else>
        <vui-icon v-bind:type="loading ? 'loading' : 'plus'" style="font-size: 20px;" />
        <div style="margin-top: 10px; font-size: 14px; white-space: nowrap;">Upload</div>
      </template>
    </vui-upload>
  </div>
</template>

<script>
  function getBase64(image, callback) {
    let reader = new FileReader();

    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(image);
  }

  export default {
    data() {
      return {
        showList: false,
        listType: "picture-card",
        action: "//www.mocky.io/v2/5cc8019d300000980a055e76",
        image: "",
        loading: false
      };
    },
    methods: {
      beforeUpload(file) {
        let isJPG = file.type === "image/jpeg";

        if (!isJPG) {
          this.$message.error("You can only upload JPG file!");
        }

        let isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          this.$message.error("Image must smaller than 2MB!");
        }

        return isJPG && isLt2M;
      },
      handleChange(file, fileList) {
        if (file.status === "progress") {
          this.loading = true;
        }
        else if (file.status === "success") {
          getBase64(file.rawFile, url => {
            this.image = url;
            this.loading = false;
          });
        }
      }
    }
  };
</script>
`;

export default code;