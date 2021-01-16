const code =
`<template>
  <div class="example-dropdown-placement">
    <div class="example-dropdown-placement-top">
      <vui-dropdown placement="top-start">
        <vui-button>Top Left</vui-button>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item name="1" title="Menu Item 1" />
          <vui-dropdown-menu-item name="2" title="Menu Item 2" />
          <vui-dropdown-menu-item name="3" title="Menu Item 3" />
          <vui-dropdown-menu-item name="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
      <vui-dropdown placement="top">
        <vui-button>Top Center</vui-button>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item name="1" title="Menu Item 1" />
          <vui-dropdown-menu-item name="2" title="Menu Item 2" />
          <vui-dropdown-menu-item name="3" title="Menu Item 3" />
          <vui-dropdown-menu-item name="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
      <vui-dropdown placement="top-end">
        <vui-button>Top Right</vui-button>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item name="1" title="Menu Item 1" />
          <vui-dropdown-menu-item name="2" title="Menu Item 2" />
          <vui-dropdown-menu-item name="3" title="Menu Item 3" />
          <vui-dropdown-menu-item name="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
    </div>
    <div class="example-dropdown-placement-bottom">
      <vui-dropdown placement="bottom-start">
        <vui-button>Bottom Left</vui-button>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item name="1" title="Menu Item 1" />
          <vui-dropdown-menu-item name="2" title="Menu Item 2" />
          <vui-dropdown-menu-item name="3" title="Menu Item 3" />
          <vui-dropdown-menu-item name="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
      <vui-dropdown placement="bottom">
        <vui-button>Bottom Center</vui-button>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item name="1" title="Menu Item 1" />
          <vui-dropdown-menu-item name="2" title="Menu Item 2" />
          <vui-dropdown-menu-item name="3" title="Menu Item 3" />
          <vui-dropdown-menu-item name="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
      <vui-dropdown placement="bottom-end">
        <vui-button>Bottom Right</vui-button>
        <vui-dropdown-menu slot="menu">
          <vui-dropdown-menu-item name="1" title="Menu Item 1" />
          <vui-dropdown-menu-item name="2" title="Menu Item 2" />
          <vui-dropdown-menu-item name="3" title="Menu Item 3" />
          <vui-dropdown-menu-item name="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </vui-dropdown>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-dropdown-placement-top {  }
  .example-dropdown-placement-top .vui-dropdown { margin-right:10px; }
  .example-dropdown-placement-top .vui-button { width:130px; }
  .example-dropdown-placement-bottom { margin-top:10px; }
  .example-dropdown-placement-bottom .vui-dropdown { margin-right:10px; }
  .example-dropdown-placement-bottom .vui-button { width:130px; }
</style>
`;

export default code;