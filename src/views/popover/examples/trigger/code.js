const code =
`<template>
  <div class="example-popover-trigger">
    <vui-popover title="Title" content="This is a popover.">
      <vui-button>Hover me</vui-button>
    </vui-popover>
    <vui-popover trigger="focus" title="Title" content="This is a popover.">
      <vui-button>Focus me</vui-button>
    </vui-popover>
    <vui-popover trigger="click" title="Title" content="This is a popover.">
      <vui-button>Click me</vui-button>
    </vui-popover>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-popover-trigger .vui-popover + .vui-popover { margin-left:10px; }
</style>
`;

export default code;