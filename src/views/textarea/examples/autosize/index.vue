<template>
  <example v-bind:code="code" id="example-textarea-autosize">
    <template slot="demo">
      <div class="example-textarea-autosize">
        <vui-textarea
          v-model="value1"
          autosize
          placeholder="Autosize height based on content lines"
        />
        <vui-textarea
          v-model="value2"
          v-bind:autosize="autosize"
          placeholder="Autosize height with minimum and maximum number of lines"
        />
      </div>
    </template>
    <template slot="title">适应内容高度的文本域</template>
    <template slot="description">
      <p>启用 <code>autosize</code> 属性，文本域会自动适应内容高度变化。<code>autosize</code> 也可以设定为一个对象，指定最小行数和最大行数。</p>
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
        value1: "",
        value2: "",
        autosize: {
          minRows: 2,
          maxRows: 8
        }
      };
    }
  };
</script>

<style>
  .example-textarea-autosize > .vui-textarea + .vui-textarea { margin-top:24px; }
</style>