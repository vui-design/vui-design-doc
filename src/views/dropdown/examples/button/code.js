const code =
`<template>
  <div class="example-dropdown-button">
    <vui-dropdown-button v-on:click="handleClick">
      Dropdown
      <vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
        <vui-dropdown-menu-item name="1" title="Menu Item 1" />
        <vui-dropdown-menu-item name="2" title="Menu Item 2" />
        <vui-dropdown-menu-item name="3" title="Menu Item 3" />
        <vui-dropdown-menu-item name="4" title="Menu Item 4" />
      </vui-dropdown-menu>
    </vui-dropdown-button>
    <vui-dropdown-button icon="user" v-on:click="handleClick">
      Dropdown
      <vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
        <vui-dropdown-menu-item name="1" title="Menu Item 1" />
        <vui-dropdown-menu-item name="2" title="Menu Item 2" />
        <vui-dropdown-menu-item name="3" title="Menu Item 3" />
        <vui-dropdown-menu-item name="4" title="Menu Item 4" />
      </vui-dropdown-menu>
    </vui-dropdown-button>
    <vui-dropdown-button disabled v-on:click="handleClick">
      Dropdown
      <vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
        <vui-dropdown-menu-item name="1" title="Menu Item 1" />
        <vui-dropdown-menu-item name="2" title="Menu Item 2" />
        <vui-dropdown-menu-item name="3" title="Menu Item 3" />
        <vui-dropdown-menu-item name="4" title="Menu Item 4" />
      </vui-dropdown-menu>
    </vui-dropdown-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$message.info("Click on left button");
      },
      handleMenuClick(value) {
        this.$message.info("Click on menu item");
      }
    }
  };
</script>

<style>
  .example-dropdown-button .vui-dropdown-button { margin:0 12px 12px 0; }
</style>
`;

export default code;