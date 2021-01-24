const code =
`<template>
  <div class="example-input-prefix-suffix">
    <vui-input prefix="mic" placeholder="Enter something..." />
    <vui-input suffix="calendar" placeholder="Enter something..." />
    <vui-input placeholder="Enter something...">
      <vui-icon slot="prefix" type="group" />
      <vui-tooltip slot="suffix" content="Extra Information">
        <vui-icon type="info" />
      </vui-tooltip>
    </vui-input>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-input-prefix-suffix .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;