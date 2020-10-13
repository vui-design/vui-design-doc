const code =
`<template>
  <div class="example-drawer-asynchronously-close">
    <vui-button type="primary" v-on:click="showDrawer">Open drawer with async logic</vui-button>
    <vui-drawer v-model="visible" v-on:cancel="handleCancel" okAsync v-on:ok="handleOk" title="Drawer Title">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </vui-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      handleCancel() {
        this.$message.info("Cancel task!");
      },
      handleOk(done) {
        // 模拟异步任务的执行
        const task = () => {
          // bool 为 true 表示异步任务执行成功
          // bool 为 false 表示异步任务执行失败
          const bool = Math.random() > 0.5;

          // 提示执行结果
          if (bool) {
            this.$message.success("Task executed successfully!");
          }
          else {
            this.$message.error("Task executed failed!");
          }

          // 调用 done 函数，告知抽屉 ok 事件回调函数内部的异步任务执行完成，取消按钮的 loading 状态
          // 给 done 函数传入 true，或者不传入参数，抽屉均会关闭
          // 传入 false 阻止抽屉关闭
          done && done(bool);
        };

        setTimeout(task, 3000);
      }
    }
  };
</script>
`;

export default code;