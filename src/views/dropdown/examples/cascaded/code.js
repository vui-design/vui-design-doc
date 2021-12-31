const code =
`<template>
  <vui-dropdown>
    <a href="javascript:;">Hover me</a>
    <vui-dropdown-menu slot="menu" v-on:click="handleClick">
      <vui-dropdown-menu-item value="1" title="Menu Item 1" />
      <vui-dropdown-menu-item value="2" title="Menu Item 2" />
      <vui-dropdown-menu-item-group title="Group Title">
        <vui-dropdown-menu-item value="3" title="Menu Item 3" />
        <vui-dropdown-menu-item value="4" title="Menu Item 4" />
      </vui-dropdown-menu-item-group>
      <vui-dropdown-submenu disabled title="Submenu 1">
        <vui-dropdown-menu-item value="1-1" title="Menu Item 1-1" />
        <vui-dropdown-menu-item value="1-2" title="Menu Item 1-2" />
      </vui-dropdown-submenu>
      <vui-dropdown-submenu title="Submenu 2">
        <vui-dropdown-menu-item value="2-1" title="Menu Item 2-1" />
        <vui-dropdown-menu-item value="2-2" title="Menu Item 2-2" />
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