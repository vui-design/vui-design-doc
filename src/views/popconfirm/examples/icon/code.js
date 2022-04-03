const code =
`<template>
  <vui-popconfirm
    title="Are you sure delete this task?"
    v-on:cancel="handleCancel"
    v-on:ok="handleOk"
  >
    <vui-icon slot="icon" type="warning-filled" style="color: #f00;" />
    <a href="javascript:;">Delete</a>
  </vui-popconfirm>
</template>

<script>
  export default {
    methods: {
      handleCancel() {
        this.$message.error("Clicked on No");
      },
      handleOk() {
        this.$message.success("Clicked on Yes");
      }
    }
  };
</script>
`;

export default code;