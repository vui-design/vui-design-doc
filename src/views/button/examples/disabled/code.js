const code =
`<template>
  <div class="example-button-disabled">
    <section>
      <vui-button type="primary">Primary</vui-button>
      <vui-button type="primary" disabled>Primary(disabled)</vui-button>
    </section>
    <section>
      <vui-button>Default</vui-button>
      <vui-button disabled>Default(disabled)</vui-button>
    </section>
    <section>
      <vui-button type="dashed">Dashed</vui-button>
      <vui-button type="dashed" disabled>Dashed(disabled)</vui-button>
    </section>
    <section>
      <vui-button type="text">Text</vui-button>
      <vui-button type="text" disabled>Text(disabled)</vui-button>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-button-disabled > section:not(:last-child) { margin-bottom:16px; }
  .example-button-disabled > section > .vui-button { margin-right:16px; }
</style>
`;

export default code;