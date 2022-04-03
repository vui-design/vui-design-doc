<template>
  <example v-bind:code="code" id="example-drawer-asynchronously-close">
    <template slot="demo">
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
    <template slot="title">异步关闭</template>
    <template slot="description">
      <p>通过设置 <code>cancelAsync</code>、<code>okAsync</code> 标记取消或确定按钮的点击事件回调函数是否执行异步任务。</p>
      <p>当该属性为 <code>true</code> 时，点击按钮后，按钮会进入 <code>loading</code> 状态，同时事件回调函数会接收一个 <code>done</code> 函数作为参数，需要在异步任务完成后调用这个 <code>done</code> 函数，告知抽屉异步任务执行完成，此时按钮会移除 <code>loading</code> 状态。</p>
      <p>1、<code>done()</code> 或 <code>done(true)</code> 表示 <code>loading</code> 状态结束后自动关闭抽屉；</p>
      <p>2、<code>done(false)</code> 表示 <code>loading</code> 状态结束后禁止关闭抽屉。</p>
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