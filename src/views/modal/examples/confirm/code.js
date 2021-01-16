const code =
`<template>
  <div class="example-modal-confirm">
    <vui-button type="primary" @click="showConfirm">Confirm</vui-button>
    <vui-button @click="showDeleteConfirm">Delete</vui-button>
    <vui-button @click="showAsynchronouslyCloseConfirm">Asynchronously close</vui-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showConfirm() {
        this.$modal.confirm({
          title: "Do you want to delete these items?",
          description: "Some descriptions...",
          onCancel() {
            console.log("Cancel");
          },
          onOk() {
            console.log("OK");
          }
        });
      },
      showDeleteConfirm() {
        this.$modal.confirm({
          title: "Are you sure delete this task?",
          description: "Some descriptions...",
          cancelText: "No",
          okText: "Yes",
          okButtonProps: {
            props: {
              type: "error"
            }
          },
          onCancel() {
            console.log("Cancel");
          },
          onOk() {
            console.log("OK");
          }
        });
      },
      showAsynchronouslyCloseConfirm() {
        this.$modal.confirm({
          title: "Friendly Tips",
          description: "The current operation will permanently delete the task. Do you want to continue?",
          cancelText: "Cancel",
          okText: "Continue",
          okAsync: true,
          onCancel: () => {
            console.log("Cancel");
          },
          onOk: done => {
            // 模拟异步任务的执行
            const task = () => {
              // bool 为 true 表示异步任务执行成功
              // bool 为 false 表示异步任务执行失败
              const bool = Math.random() > 0.5;

              // 提示执行结果
              if (bool) {
                this.$message.success("Delete successfully!");
              }
              else {
                this.$message.error("Delete failed, please try again later!");
              }

              // 调用 done 函数，告知对话框 ok 事件回调函数内部的异步任务执行完成，取消按钮的 loading 状态
              // 给 done 函数传入 true，或者不传入参数，对话框均会关闭
              // 传入 false 阻止对话框关闭
              done && done(bool);
            };

            setTimeout(task, 3000);
          }
        });
      }
    }
  };
</script>

<style>
  .example-modal-confirm > .vui-button { margin-right:10px; }
</style>
`;

export default code;