const code =
`<template>
  <div class="example-menu-switch-state">
    <div>
      <vui-radio-group type="button" v-model="mode">
        <vui-radio value="vertical">Vertical</vui-radio>
        <vui-radio value="inline">Inline</vui-radio>
      </vui-radio-group>
      <vui-radio-group type="button" v-model="color">
        <vui-radio value="light">Light</vui-radio>
        <vui-radio value="dark">Dark</vui-radio>
      </vui-radio-group>
    </div>
    <vui-menu :mode="mode" :color="color" :selectedName="selectedName" @select="handleSelect" style="width: 250px;">
      <vui-submenu name="1" icon="apps" title="Navigation 1">
        <vui-menu-item name="1-1" title="Item 1-1" />
        <vui-menu-item name="1-2" title="Item 1-2" />
        <vui-menu-item name="1-3" title="Item 1-3" />
        <vui-menu-item name="1-4" title="Item 1-4" />
      </vui-submenu>
      <vui-menu-item name="2" icon="mail" title="Navigation 2" />
      <vui-submenu name="3" icon="settings" title="Navigation 3">
        <vui-menu-item-group title="Group 1">
          <vui-menu-item name="3-1" title="Item 3-1" />
          <vui-menu-item name="3-2" title="Item 3-2" />
        </vui-menu-item-group>
        <vui-menu-item-group title="Group 2">
          <vui-menu-item name="3-3" title="Item 3-3" />
          <vui-menu-item name="3-4" title="Item 3-4" />
        </vui-menu-item-group>
      </vui-submenu>
      <vui-submenu name="4" icon="links" title="Navigation 4">
        <vui-menu-item name="4-1" title="Item 4-1" />
        <vui-menu-item name="4-2" title="Item 4-2" />
        <vui-submenu name="4-3" title="Item 4-3">
          <vui-menu-item name="4-3-1" title="Item 4-3-1" />
          <vui-menu-item name="4-3-2" title="Item 4-3-2" />
        </vui-submenu>
      </vui-submenu>
    </vui-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mode: "inline",
        color: "dark",
        selectedName: "1-1"
      };
    },
    methods: {
      handleToggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
      handleSelect(name) {
        this.selectedName = name;
      }
    }
  };
</script>

<style>
  .example-menu-switch-state {  }
  .example-menu-switch-state .vui-radio-group { margin-right:20px; }
  .example-menu-switch-state .vui-menu-root { margin-top:20px; }
</style>
`;

export default code;