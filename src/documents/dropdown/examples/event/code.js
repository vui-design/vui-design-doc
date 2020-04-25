const code =
`<template>
  <vui-dropdown>
    <a href="javascript:;">Hover me, and click menu item</a>
    <vui-dropdown-menu slot="menu" @click="handleClick">
      <vui-dropdown-menu-item name="1" title="Menu Item 1" />
      <vui-dropdown-menu-item name="2" title="Menu Item 2" />
      <vui-dropdown-menu-item name="3" title="Menu Item 3" />
      <vui-dropdown-menu-item name="4" title="Menu Item 4" />
    </vui-dropdown-menu>
  </vui-dropdown>
</template>

<script>
  export default {
    methods: {
      handleClick(name) {
        this.$message.info("Click on menu item " + name);
      }
    }
  };
</script>
`;

export default code;