const code =
`<template>
  <vui-layout>
    <vui-header color="dark">
      <h1 style="float: left; width: 124px; height: 30px; background-color: rgba(255,255,255,0.2); margin: 17px 0;" />
      <vui-menu
        mode="horizontal"
        color="dark"
        selectedName="1"
        style="float: left; margin-left: 24px; line-height: 64px;"
      >
        <vui-menu-item name="1" title="Item 1" />
        <vui-menu-item name="2" title="Item 2" />
        <vui-menu-item name="3" title="Item 3" />
      </vui-menu>
    </vui-header>
    <vui-content style="padding: 0 48px;">
      <vui-breadcrumb style="margin: 20px 0;">
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
      </vui-breadcrumb>
      <div style="min-height: 280px; background-color: #fff; padding: 24px;">Content</div>
    </vui-content>
    <vui-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-footer>
  </vui-layout>
</template>

<script>
  export default {

  };
</script>
`;

export default code;