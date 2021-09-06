<template>
  <example v-bind:code="code" id="example-tag-icon">
    <template slot="demo">
      <div class="example-tag-icon">
        <vui-tag icon="chat-ellipsis-filled" color="primary">Comment</vui-tag>
        <vui-tag icon="thumb-up-filled" color="success">Thumb up</vui-tag>
        <vui-tag icon="thumb-down-filled" color="error">Thumb down</vui-tag>
      </div>
    </template>
    <template slot="title">图标标签</template>
    <template slot="description">
      <p>如果需要在 <code>Tag</code> 内插入一个图标，可以设置 <code>icon</code> 属性，或者直接在 <code>Tag</code> 内使用 <code>Icon</code> 组件。</p>
      <p>使用 <code>Tag</code> 的 <code>icon</code> 属性，图标将被插入到按钮左侧，如果需要自定义位置，请使用 <code>Icon</code> 组件。</p>
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
    }
  };
</script>

<style>
  .example-tag-icon { display:flex; }
  .example-tag-icon .vui-tag { margin-right:8px; }
</style>