const code =
`<template>
  <div class="example-tooltip-theme">
    <vui-tooltip theme="light" content="This is a tooltip">
      <vui-button>Light</vui-button>
    </vui-tooltip>
    <vui-tooltip content="This is a tooltip">
      <vui-button type="primary">Dark</vui-button>
    </vui-tooltip>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-tooltip-theme .vui-tooltip + .vui-tooltip { margin-left:10px; }
</style>
`;

export default code;