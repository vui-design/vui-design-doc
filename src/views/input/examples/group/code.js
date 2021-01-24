const code =
`<template>
  <div class="example-input-group">
    <vui-input-group>
      <vui-input placeholder="Enter something..." />
      <vui-button>Search</vui-button>
    </vui-input-group>
    <vui-input-group compact>
      <vui-input placeholder="Enter something..." />
      <vui-button>Search</vui-button>
    </vui-input-group>
    <vui-input-group>
      <vui-input value="0571" style="width: 80px;" />
      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
    </vui-input-group>
    <vui-input-group compact>
      <vui-input value="0571" style="width: 80px;" />
      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
    </vui-input-group>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-input-group .vui-input-group:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;