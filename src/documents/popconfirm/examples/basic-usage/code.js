const code =
`<template>
  <vui-popconfirm
    title="Are you sure delete this task?"
    cancelText="No"
    okText="Yes"
    @cancel="handleCancel"
    @ok="handleOk"
  >
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