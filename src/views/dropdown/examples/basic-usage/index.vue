<template>
  <example v-bind:code="code" id="example-dropdown-basic-usage">
    <template slot="demo">
      <vui-dropdown>
        <a href="javascript:;">Hover me</a>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item value="1" title="Menu Item 1" />
          <vui-dropdown-menu-item value="2" title="Menu Item 2" />
          <vui-dropdown-menu-item value="3" title="Menu Item 3" />
          <vui-dropdown-menu-item value="4" danger title="Menu Item danger" />
        </vui-dropdown-menu>
      </vui-dropdown>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>最简单的下拉菜单。</p>
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
