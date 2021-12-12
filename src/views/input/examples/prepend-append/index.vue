<template>
  <example v-bind:code="code" id="example-input-prepend-append">
    <template slot="demo">
      <div class="example-input-prepend-append">
        <vui-input prepend="https://github.com/u/" placeholder="Enter something..." />
        <vui-input append="@qq.com" placeholder="Enter something..." />
        <vui-input placeholder="Enter something...">
          <template slot="prepend">https://</template>
          <template slot="append">.com</template>
        </vui-input>
      </div>
    </template>
    <template slot="title">前置/后置标签</template>
    <template slot="description">
      <p>通过设置 <code>prepend</code> 和 <code>append</code> 或同名插槽设置前置/后置标签。</p>
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
  .example-input-prepend-append .vui-input:not(:first-child) { margin-top:24px; }
</style>