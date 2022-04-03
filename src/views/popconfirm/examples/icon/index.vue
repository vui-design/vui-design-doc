<template>
  <example v-bind:code="code" id="example-popconfirm-icon">
    <template slot="demo">
      <vui-popconfirm
        title="Are you sure delete this task?"
        v-on:cancel="handleCancel"
        v-on:ok="handleOk"
      >
        <vui-icon slot="icon" type="warning-filled" style="color: #f00;" />
        <a href="javascript:;">Delete</a>
      </vui-popconfirm>
    </template>
    <template slot="title">自定义图标</template>
    <template slot="description">
      <p>使用 <code>icon</code> 插槽自定义图标。</p>
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
      handleCancel() {
        this.$message.error("Clicked on No");
      },
      handleOk() {
        this.$message.success("Clicked on Yes");
      }
    }
  };
</script>