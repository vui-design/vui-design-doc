<template>
  <example v-bind:code="code" id="example-layout-header-sider-first">
    <template slot="demo">
      <browser>
        <vui-layout>
          <vui-header color="dark">
            <h1 style="float: left; width: 124px; height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px 0;"></h1>
            <vui-menu
              color="dark"
              mode="horizontal"
              v-bind:selectedName="headerMenuSelectedName"
              style="float: left; margin-left: 24px; line-height: 64px;"
            >
              <vui-menu-item name="1" title="Item 1" />
              <vui-menu-item name="2" title="Item 2" />
              <vui-menu-item name="3" title="Item 3" />
            </vui-menu>
          </vui-header>
          <vui-content style="padding: 0 48px;">
            <vui-breadcrumb style="margin: 24px 0;">
              <vui-breadcrumb-item>Home</vui-breadcrumb-item>
              <vui-breadcrumb-item>Components</vui-breadcrumb-item>
              <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
            </vui-breadcrumb>
            <vui-layout>
              <vui-sider v-bind:width="200" style="border-right: 1px solid #f0f0f0;">
                <vui-menu
                  mode="inline"
                  v-bind:openNames="siderMenuOpenNames"
                  v-bind:selectedName="siderMenuSelectedName"
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
              <vui-content style="min-height: 280px; background-color: #fff; padding: 24px;">Content</vui-content>
            </vui-layout>
          </vui-content>
          <vui-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-footer>
        </vui-layout>
      </browser>
    </template>
    <template slot="title">顶部 - 侧边布局</template>
    <template slot="description">
      <p>拥有顶部导航及侧边栏的页面，多用于展示类网站。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import Browser from "src/components/browser";
  import code from "./code";

  export default {
    components: {
      Example,
      Browser
    },
    data() {
      return {
        code,
        headerMenuSelectedName: "1",
        siderMenuOpenNames: ["1"],
        siderMenuSelectedName: "1-1"
      };
    }
  };
</script>