<template>
  <example v-bind:code="code" id="example-modal-confirm">
    <template slot="demo">
      <vui-space>
        <vui-button type="primary" v-on:click="showConfirm">Confirm</vui-button>
        <vui-button type="danger" ghost v-on:click="showDeleteConfirm">Delete</vui-button>
        <vui-button v-on:click="showAsynchronouslyCloseConfirm">Asynchronously close</vui-button>
      </vui-space>
    </template>
    <template slot="title">确认对话框</template>
    <template slot="description">
      <p>使用 <code>confirm()</code> 可以快捷地弹出确认框。</p>
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
        code
      };
    },
    methods: {
      showConfirm() {
        this.$modal.confirm({
          title: "Do you want to delete these items?",
          description: "Some descriptions...",
          cancel: () => console.log("Cancel"),
          ok: () => console.log("OK")
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
              type: "danger"
            }
          },
          cancel: () => console.log("No"),
          ok: () => console.log("Yes")
        });
      },
      showAsynchronouslyCloseConfirm() {
        this.$modal.confirm({
          title: "Friendly Tips",
          description: "The current operation will permanently delete the task. Do you want to continue?",
          cancelText: "Cancel",
          okText: "Continue",
          okAsync: true,
          cancel: () => {
            console.log("Cancel");
          },
          ok: done => {
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