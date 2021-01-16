const code =
`<template>
  <vui-upload draggable multiple v-bind:action="action">
    <div class="example-upload-draggable-button">
      <vui-icon type="upload-cloud-filled" />
      <h4>Click or drag file to this area to upload</h4>
      <p>Only JPG / PNG files can be uploaded, and no more than 500kb</p>
    </div>
  </vui-upload>
</template>

<script>
  export default {
    data() {
      return {
        action: "//jsonplaceholder.typicode.com/posts/"
      };
    }
  };
</script>

<style>
  .example-upload-draggable-button { line-height:1; }
  .example-upload-draggable-button i { color:#2d8cf0; font-size:50px; }
  .example-upload-draggable-button h4 { margin-top:20px; color:#595959; font-size:16px; }
  .example-upload-draggable-button p { margin-top:10px; color:#8c8c8c; font-size:12px; }
</style>
`;

export default code;