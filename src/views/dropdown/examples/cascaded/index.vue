<template>
  <example v-bind:code="code" id="example-dropdown-cascaded">
    <template slot="demo">
      <vui-dropdown>
        <a href="javascript:;">Hover me</a>
        <vui-dropdown-menu slot="menu" v-on:click="handleClick">
          <vui-dropdown-menu-item value="1" icon="settings" title="Menu Item 1" />
          <vui-dropdown-menu-item disabled value="2" icon="checkmark" title="Menu Item 2" />
          <vui-dropdown-menu-divider />
          <vui-dropdown-menu-item danger value="3" icon="home" title="Menu Item 3" />
          <vui-dropdown-menu-item danger disabled value="4" icon="home" title="Menu Item 4" />
          <vui-dropdown-menu-item-group title="Group">
            <vui-dropdown-menu-item value="5" icon="settings" title="Menu Item 5" />
            <vui-dropdown-menu-item value="6" icon="home" title="Menu Item 6" />
          </vui-dropdown-menu-item-group>
          <vui-dropdown-submenu value="7" icon="search" title="Menu Item 7">
            <vui-dropdown-menu-item value="7-1" title="Menu Item 7-1" />
            <vui-dropdown-menu-item value="7-2" title="Menu Item 7-2" />
            <vui-dropdown-menu-item value="7-3" title="Menu Item 7-3" />
          </vui-dropdown-submenu>
        </vui-dropdown-menu>
      </vui-dropdown>
      <vui-dropdown>
        <a href="javascript:;">Hover me</a>
        <vui-dropdown-menu slot="menu" color="dark" v-on:click="handleClick">
          <vui-dropdown-menu-item value="1" icon="settings" title="Menu Item 1" />
          <vui-dropdown-menu-item disabled value="2" icon="checkmark" title="Menu Item 2" />
          <vui-dropdown-menu-divider />
          <vui-dropdown-menu-item danger value="3" icon="home" title="Menu Item 3" />
          <vui-dropdown-menu-item danger disabled value="4" icon="home" title="Menu Item 4" />
          <vui-dropdown-menu-item-group title="Group">
            <vui-dropdown-menu-item value="5" icon="settings" title="Menu Item 5" />
            <vui-dropdown-menu-item value="6" icon="home" title="Menu Item 6" />
          </vui-dropdown-menu-item-group>
          <vui-dropdown-submenu value="7" icon="search" title="Menu Item 7">
            <vui-dropdown-menu-item value="7-1" title="Menu Item 7-1" />
            <vui-dropdown-menu-item value="7-2" title="Menu Item 7-2" />
            <vui-dropdown-menu-item value="7-3" title="Menu Item 7-3" />
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
