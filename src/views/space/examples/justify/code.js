const code =
`<template>
  <div class="example-space-justify">
    <div class="example-space-justify-block">
      <vui-space block justify="start">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="center">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="end">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="around">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="between">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-space-justify {  }
  .example-space-justify-block { border:1px solid #2d8cf0; padding:16px; }
  .example-space-justify-block + .example-space-justify-block { margin-top:24px; }
</style>
`;

export default code;