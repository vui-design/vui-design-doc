<template>
  <example v-bind:code="code" id="example-input-group">
    <template slot="demo">
      <div class="example-input-group">
        <vui-input-group>
          <vui-input placeholder="Enter something..." />
          <vui-button>Search</vui-button>
        </vui-input-group>
        <vui-input-group compact>
          <vui-input placeholder="Enter something..." />
          <vui-button>Search</vui-button>
        </vui-input-group>
        <vui-input-group>
          <vui-input value="0571" style="width: 80px;" />
          <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
        </vui-input-group>
        <vui-input-group compact>
          <vui-input value="0571" style="width: 80px;" />
          <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
        </vui-input-group>
      </div>
    </template>
    <template slot="title">复合型输入框</template>
    <template slot="description">
      <p>输入框的组合展现。设置 <code>compact</code> 属性可以启用紧凑模式。</p>
      <p>复合型输入框中的组件宽度默认为自动适应，可以通过 <code>style</code> 属性自行设置宽度。</p>
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
  .example-input-group .vui-input-group:not(:first-child) { margin-top:24px; }
</style>