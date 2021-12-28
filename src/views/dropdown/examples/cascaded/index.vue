<template>
  <example v-bind:code="code" id="example-dropdown-cascaded">
    <template slot="demo">
      <vui-dropdown>
        <a href="javascript:;">Hover me</a>
        <vui-dropdown-menu slot="menu" v-on:click="handleClick">
          <vui-dropdown-menu-item value="1" icon="settings" title="Menu Item 1" />
          <vui-dropdown-menu-item value="2" icon="home" title="Menu Item 2" />
          <vui-dropdown-menu-item disabled value="3" icon="checkmark" title="Menu Item 3" />
          <vui-dropdown-submenu value="4" icon="search" title="Menu Item 4">
            <vui-dropdown-menu-item value="4-1" title="Menu Item 4-1" />
            <vui-dropdown-menu-item value="4-2" title="Menu Item 4-2" />
            <vui-dropdown-menu-item value="4-3" title="Menu Item 4-3" />
          </vui-dropdown-submenu>
        </vui-dropdown-menu>
      </vui-dropdown>
    </template>
    <template slot="title">级联菜单</template>
    <template slot="description">
      <p>传入的菜单里有多个层级。</p>
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
      handleClick(value) {
        this.$message.info("Click on menu item " + value);
      }
    }
  };
</script>
