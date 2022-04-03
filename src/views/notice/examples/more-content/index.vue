<template>
  <example v-bind:code="code" id="example-notice-more-content">
    <template slot="demo">
      <div class="example-notice-more-content">
        <vui-button type="primary" v-on:click="showVNodeNotice">VNode</vui-button>
        <vui-button type="primary" v-on:click="showFunctionNotice">Function</vui-button>
      </div>
    </template>
    <template slot="title">更多内容</template>
    <template slot="description">
      <p>选项 <code>title</code>、<code>description</code> 均支持传入 VNode 虚拟节点。</p>
      <p>另外，您也可以将它们设置为一个回调函数，该函数接收 <code>createElement</code> 作为参数，您所需要做的就是在函数内部返回提醒内容即可。</p>
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
      showVNodeNotice() {
        const description = (
          <div>The notice description is <span style="color: #2d8cf0;">VNode</span> virtual node.</div>
        );

        this.$notice.info({
          title: "This is the title",
          description
        });
      },
      showFunctionNotice() {
        this.$notice.info({
          title: "This is the title",
          description(h) {
            return h("div", null, "I was returned by a function.");
          }
        });
      }
    }
  };
</script>

<style>
  .example-notice-more-content .vui-button + .vui-button { margin-left:16px; }
</style>