const code =
`<template>
  <div class="example-progress-circle-small">
    <vui-progress type="circle" size="small" :percentage="75" />
    <vui-progress type="circle" size="small" :percentage="75" status="exception" />
    <vui-progress type="circle" size="small" :percentage="100" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-circle-small > .vui-progress:not(:first-child) { margin-left:15px; }
</style>
`;

export default code;