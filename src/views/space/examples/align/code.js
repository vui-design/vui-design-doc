const code =
`<template>
  <div class="example-space-align">
    <div class="example-space-align-block">
      <vui-space align="start">
        start
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 20px 10px;">Block</div>
      </vui-space>
    </div>
    <div class="example-space-align-block">
      <vui-space align="center">
        center
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 20px 10px;">Block</div>
      </vui-space>
    </div>
    <div class="example-space-align-block">
      <vui-space align="end">
        end
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 20px 10px;">Block</div>
      </vui-space>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-space-align { display:inline-flex; flex-direction:column; }
  .example-space-align-block { border:1px solid #2d8cf0; padding:16px; }
  .example-space-align-block + .example-space-align-block { margin-top:24px; }
</style>
`;

export default code;