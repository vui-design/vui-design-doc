const code =
`<template>
  <vui-tabs>
    <vui-tab-panel key="tab1">
      <template slot="title">
        <span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>
        <vui-badge status="error" />
      </template>
      Content of Tab Panel 1
    </vui-tab-panel>
    <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>
    <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>
  </vui-tabs>
</template>

<script>
  export default {

  };
</script>
`;

export default code;