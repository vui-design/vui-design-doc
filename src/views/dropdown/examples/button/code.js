const code =
`<template>
  <div class="example-dropdown-button">
    <vui-dropdown-button v-on:click="handleClick">
      Dropdown
      <vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
        <vui-dropdown-menu-item value="1" title="Menu Item 1" />
        <vui-dropdown-menu-item value="2" title="Menu Item 2" />
        <vui-dropdown-menu-item value="3" title="Menu Item 3" />
        <vui-dropdown-menu-item value="4" title="Menu Item 4" />
      </vui-dropdown-menu>
    </vui-dropdown-button>
    <vui-dropdown-button icon="user" v-on:click="handleClick">
      Dropdown
      <vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
        <vui-dropdown-menu-item value="1" title="Menu Item 1" />
        <vui-dropdown-menu-item value="2" title="Menu Item 2" />
        <vui-dropdown-menu-item value="3" title="Menu Item 3" />
        <vui-dropdown-menu-item value="4" title="Menu Item 4" />
      </vui-dropdown-menu>
    </vui-dropdown-button>
    <vui-dropdown-button disabled v-on:click="handleClick">
      Dropdown
      <vui-dropdown-menu slot="menu" v-on:click="handleMenuClick">
        <vui-dropdown-menu-item value="1" title="Menu Item 1" />
        <vui-dropdown-menu-item value="2" title="Menu Item 2" />
        <vui-dropdown-menu-item value="3" title="Menu Item 3" />
        <vui-dropdown-menu-item value="4" title="Menu Item 4" />
      </vui-dropdown-menu>
    </vui-dropdown-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$message.info("Click on button");
      },
      handleMenuClick(value) {
        this.$message.info("Click on menu item " + value);
      }
    }
  };
</script>

<style>
  .example-dropdown-button .vui-dropdown-button { margin:0 16px 16px 0; }
</style>
`;

export default code;