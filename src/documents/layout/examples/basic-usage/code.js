const code =
`<template>
  <div class="example-layout-basic-usage">
    <vui-layout>
      <vui-header>Header</vui-header>
      <vui-content>Content</vui-content>
      <vui-footer>Footer</vui-footer>
    </vui-layout>
    <vui-layout>
      <vui-header>Header</vui-header>
      <vui-layout>
        <vui-sider>Sider</vui-sider>
        <vui-content>Content</vui-content>
      </vui-layout>
      <vui-footer>Footer</vui-footer>
    </vui-layout>
    <vui-layout>
      <vui-header>Header</vui-header>
      <vui-layout>
        <vui-content>Content</vui-content>
        <vui-sider>Sider</vui-sider>
      </vui-layout>
      <vui-footer>Footer</vui-footer>
    </vui-layout>
    <vui-layout>
      <vui-sider>Sider</vui-sider>
      <vui-layout>
        <vui-header>Header</vui-header>
        <vui-content>Content</vui-content>
        <vui-footer>Footer</vui-footer>
      </vui-layout>
    </vui-layout>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-layout-basic-usage .vui-layout + .vui-layout { margin-top:20px; }
  .example-layout-basic-usage .vui-layout-header,
  .example-layout-basic-usage .vui-layout-footer { background-color:rgba(45,140,240,0.7); color:#fff; text-align:center; }
  .example-layout-basic-usage .vui-layout-sider { background-color:rgba(45,140,240,0.85); color:#fff; text-align:center; line-height:120px; }
  .example-layout-basic-usage .vui-layout-content { background-color:rgba(45,140,240,1); color:#fff; text-align:center; line-height:120px; }
</style>
`;

export default code;