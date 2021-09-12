<template>
  <example v-bind:code="code" id="example-page-header-breadcrumb">
    <template slot="demo">
      <vui-page-header
        style="border: 1px solid #f0f0f0;"
        title="Title"
        subTitle="This is a subtitle"
      >
        <vui-breadcrumb slot="breadcrumb">
          <vui-breadcrumb-item>Home</vui-breadcrumb-item>
          <vui-breadcrumb-item>Components</vui-breadcrumb-item>
          <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
          <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
        </vui-breadcrumb>
      </vui-page-header>
    </template>
    <template slot="title">含面包屑</template>
    <template slot="description">
      <p>含面包屑的页头，适合层级比较深的页面，让用户可以快速导航。</p>
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