const code =
`<template>
  <vui-layout>
    <vui-sider color="dark" collapsible v-bind:collapsed="collapsed" v-bind:showTrigger="false">
      <h1 style="height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px;"></h1>
      <vui-menu
        mode="inline"
        color="dark"
        v-bind:collapsed="collapsed"
        v-bind:openNames="openNames"
        v-bind:selectedName="selectedName"
      >
        <vui-submenu name="1" icon="apps" title="Sub Menu 1">
          <vui-menu-item name="1-1" title="Item 1-1" />
          <vui-menu-item name="1-2" title="Item 1-2" />
          <vui-menu-item name="1-3" title="Item 1-3" />
          <vui-menu-item name="1-4" title="Item 1-4" />
        </vui-submenu>
        <vui-submenu name="2" icon="mail" title="Sub Menu 2">
          <vui-menu-item name="2-1" title="Item 2-1" />
          <vui-menu-item name="2-2" title="Item 2-2" />
          <vui-menu-item name="2-3" title="Item 2-3" />
          <vui-menu-item name="2-4" title="Item 2-4" />
        </vui-submenu>
        <vui-submenu name="3" icon="settings" title="Sub Menu 3">
          <vui-menu-item name="3-1" title="Item 3-1" />
          <vui-menu-item name="3-2" title="Item 3-2" />
          <vui-menu-item name="3-3" title="Item 3-3" />
          <vui-menu-item name="3-4" title="Item 3-4" />
        </vui-submenu>
      </vui-menu>
    </vui-sider>
    <vui-layout>
      <vui-header color="light" style="padding: 0 24px;">
        <vui-button
          size="small"
          style="float: left; margin: 20px 0;"
          v-bind:icon="btnTriggerIconType"
          v-on:click="handleCollapse"
        />
      </vui-header>
      <vui-content style="padding: 0 24px;">
        <vui-breadcrumb style="margin: 24px 0;">
          <vui-breadcrumb-item>Home</vui-breadcrumb-item>
          <vui-breadcrumb-item>Components</vui-breadcrumb-item>
          <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
        </vui-breadcrumb>
        <div style="min-height: 320px; background-color: #fff; padding: 24px;">Content</div>
      </vui-content>
      <vui-footer style="padding: 24px; text-align: center;">2010-2020 © EXAMPLE</vui-footer>
    </vui-layout>
  </vui-layout>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        openNames: ["1"],
        selectedName: "1-1"
      };
    },
    computed: {
      btnTriggerIconType() {
        return this.collapsed ? "menu-unfold" : "menu-fold";
      }
    },
    methods: {
      handleCollapse() {
        this.collapsed = !this.collapsed;
      }
    }
  };
</script>
`;

export default code;