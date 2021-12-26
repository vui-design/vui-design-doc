<template>
  <example v-bind:code="code" id="example-dropdown-event">
    <template slot="demo">
      <vui-dropdown>
        <a href="javascript:;">Hover me, and click menu item</a>
        <vui-dropdown-menu slot="menu" v-on:click="handleClick">
          <vui-dropdown-menu-item value="1" title="Menu Item 1" />
          <vui-dropdown-menu-item value="2" title="Menu Item 2" />
          <vui-dropdown-menu-item value="3" title="Menu Item 3" />
          <vui-dropdown-menu-item value="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
    </template>
    <template slot="title">触发事件</template>
    <template slot="description">
      <p>分割线和不可用菜单项。</p>
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
