const code =
`<template>
  <div class="example-button-type">
    <section>
      <vui-button type="primary">Primary</vui-button>
      <vui-button type="info">Info</vui-button>
      <vui-button type="warning">Warning</vui-button>
      <vui-button type="success">Success</vui-button>
      <vui-button type="error">Error</vui-button>
    </section>
    <section>
      <vui-button>Default</vui-button>
      <vui-button type="dashed">Dashed</vui-button>
      <vui-button type="text">Text</vui-button>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-button-type > section:not(:last-child) { margin-bottom:20px; }
  .example-button-type > section > .vui-button { margin-right:10px; }
</style>
`;

export default code;