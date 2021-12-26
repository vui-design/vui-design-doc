const code =
`<template>
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