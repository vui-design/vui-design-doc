const code =
`<template>
  <div class="example-progress-circle">
    <vui-progress type="circle" :percentage="75" />
    <vui-progress type="circle" :percentage="75" status="exception" />
    <vui-progress type="circle" :percentage="100" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-circle > .vui-progress:not(:first-child) { margin-left:15px; }
</style>
`;

export default code;