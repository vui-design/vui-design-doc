<template>
  <example v-bind:code="code" id="example-modal-customized-footer">
    <template slot="demo">
      <div class="example-modal-customized-footer">
        <vui-button type="primary" v-on:click="showModal">Open modal with customized footer</vui-button>
        <vui-modal v-model="visible" title="Modal Title">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <vui-space slot="footer">
            <vui-button v-on:click="handleCancel">Cancel</vui-button>
            <vui-button type="primary" v-bind:loading="loading" v-on:click="handleSubmit">Submit</vui-button>
          </vui-space>
        </vui-modal>
      </div>
    </template>
    <template slot="title">自定义页脚</template>
    <template slot="description">
      <p>利用 <code>footer</code> 插槽自定义对话框底部内容。点击提交后进入 <code>loading</code> 状态，完成后关闭。</p>
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
        visible: false,
        loading: false
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleCancel() {
        this.visible = false;
      },
      handleSubmit() {
        this.loading = true;

        setTimeout(() => {
          this.visible = false;
          this.loading = false;
        }, 3000);
      }
    }
  };
</script>