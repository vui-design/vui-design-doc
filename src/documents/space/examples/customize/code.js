const code =
`<template>
  <div class="example-space-customize">
    <section>
      <vui-space v-bind:size="40">
        <vui-button type="primary">Primary</vui-button>
        <vui-button>Default</vui-button>
        <vui-button type="dashed">Dashed</vui-button>
        <vui-button type="text">Text</vui-button>
      </vui-space>
    </section>
    <section>
      <vui-space divider v-bind:size="20">
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
      </vui-space>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-space-customize section { margin-top:20px; }
</style>
`;

export default code;