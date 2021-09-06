<template>
  <example v-bind:code="code" id="example-tag-checkable">
    <template slot="demo">
      <div class="example-tag-checkable">
        <vui-tag color="primary" checkable>Tag 1</vui-tag>
        <vui-tag color="info" checkable>Tag 2</vui-tag>
        <vui-tag color="warning" checkable>Tag 3</vui-tag>
        <vui-tag color="success" checkable>Tag 4</vui-tag>
        <vui-tag color="error" checkable>Tag 5</vui-tag>
      </div>
    </template>
    <template slot="title">可选择</template>
    <template slot="description">
      <p>设置 <code>checkable</code> 属性后可以对标签进行选择，属性 <code>checked</code> 控制当前选择状态。</p>
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
  .example-tag-checkable { display:flex; }
  .example-tag-checkable .vui-tag { margin-right:8px; }
</style>