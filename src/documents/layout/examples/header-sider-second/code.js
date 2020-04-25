const code =
`<template>
  <vui-layout>
    <vui-header theme="dark">
      <h1 style="float: left; width: 124px; height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px 0;"></h1>
      <vui-menu theme="dark" mode="horizontal" selectedName="1" style="float: left; margin-left: 25px; line-height: 64px;">
        <vui-menu-item name="1" title="Item 1" />
        <vui-menu-item name="2" title="Item 2" />
        <vui-menu-item name="3" title="Item 3" />
      </vui-menu>
    </vui-header>
    <vui-layout>
      <vui-sider :width="200">
        <vui-menu mode="inline" :openNames="['1']" :selectedName="'1-1'" style="min-height: 100%; box-shadow: none;">
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
      <vui-layout style="padding: 25px;">
        <vui-breadcrumb style="margin-bottom: 25px;">
          <vui-breadcrumb-item>Home</vui-breadcrumb-item>
          <vui-breadcrumb-item>Components</vui-breadcrumb-item>
          <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
        </vui-breadcrumb>
        <vui-content style="min-height: 250px; background-color: #fff; padding: 25px;">Content</vui-content>
      </vui-layout>
    </vui-layout>
  </vui-layout>
</template>

<script>
  export default {

  };
</script>
`;

export default code;