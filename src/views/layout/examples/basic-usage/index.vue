<template>
  <example v-bind:code="code" id="example-layout-basic-usage">
    <template slot="demo">
      <div class="example-layout-basic-usage">
        <vui-layout>
          <vui-header>Header</vui-header>
          <vui-content>Content</vui-content>
          <vui-footer>Footer</vui-footer>
        </vui-layout>
        <vui-layout>
          <vui-header>Header</vui-header>
          <vui-layout>
            <vui-sider>Sider</vui-sider>
            <vui-content>Content</vui-content>
          </vui-layout>
          <vui-footer>Footer</vui-footer>
        </vui-layout>
        <vui-layout>
          <vui-header>Header</vui-header>
          <vui-layout>
            <vui-content>Content</vui-content>
            <vui-sider>Sider</vui-sider>
          </vui-layout>
          <vui-footer>Footer</vui-footer>
        </vui-layout>
        <vui-layout>
          <vui-sider>Sider</vui-sider>
          <vui-layout>
            <vui-header>Header</vui-header>
            <vui-content>Content</vui-content>
            <vui-footer>Footer</vui-footer>
          </vui-layout>
        </vui-layout>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>典型的页面布局。</p>
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
  .example-layout-basic-usage .vui-layout + .vui-layout { margin-top:24px; }
  .example-layout-basic-usage .vui-layout-header,
  .example-layout-basic-usage .vui-layout-footer { background-color:rgba(45,140,240,0.7); color:#fff; text-align:center; }
  .example-layout-basic-usage .vui-layout-sider { background-color:rgba(45,140,240,0.85); color:#fff; text-align:center; line-height:120px; }
  .example-layout-basic-usage .vui-layout-content { background-color:rgba(45,140,240,1); color:#fff; text-align:center; line-height:120px; }
</style>