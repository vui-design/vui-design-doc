const code =
`<template>
  <vui-dropdown>
    <a href="javascript:;">Hover me</a>
    <vui-dropdown-menu slot="menu" v-on:click="handleClick">
      <vui-dropdown-menu-item value="1" title="Menu Item 1" />
      <vui-dropdown-menu-item value="2" title="Menu Item 2" />
      <vui-dropdown-menu-item disabled value="3" title="Menu Item 3" />
      <vui-dropdown-submenu value="4" title="Menu Item 4">
        <vui-dropdown-menu-item value="4-1" title="Menu Item 4-1" />
        <vui-dropdown-menu-item value="4-2" title="Menu Item 4-2" />
        <vui-dropdown-menu-item value="4-3" title="Menu Item 4-3" />
      </vui-dropdown-submenu>
    </vui-dropdown-menu>
  </vui-dropdown>
</template>

<script>
  export default {
    methods: {
      handleClick(value) {
        this.$message.info("Click on menu item " + value);
      }
    }
  };
</script>
`;

export default code;