<template>
  <example v-bind:code="code" id="example-breadcrumb-icon">
    <template slot="demo">
      <div class="example-breadcrumb-icon">
        <vui-breadcrumb>
          <vui-breadcrumb-item to="/" icon="home" title="Home" />
          <vui-breadcrumb-item to="/components" icon="stack" title="Components" />
          <vui-breadcrumb-item icon="links" title="Navigation" />
          <vui-breadcrumb-item title="Breadcrumb" />
        </vui-breadcrumb>
        <vui-breadcrumb>
          <vui-breadcrumb-item to="/">
            <vui-icon type="home" />Home
          </vui-breadcrumb-item>
          <vui-breadcrumb-item to="/components">
            <vui-icon type="stack" />Components
          </vui-breadcrumb-item>
          <vui-breadcrumb-item>
            <vui-icon type="links" />Navigation
          </vui-breadcrumb-item>
          <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
        </vui-breadcrumb>
      </div>
    </template>
    <template slot="title">带图标的</template>
    <template slot="description">
      <p>可自定义每项的内容，比如带有一个图标。</p>
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
  .example-breadcrumb-icon .vui-breadcrumb + .vui-breadcrumb { margin-top:10px; }
</style>