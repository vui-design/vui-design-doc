const code =
`<template>
  <div class="example-progress-dashboard">
    <vui-progress type="dashboard" :percentage="75" />
    <vui-progress type="dashboard" :percentage="75" status="exception" />
    <vui-progress type="dashboard" :percentage="100" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-dashboard > .vui-progress:not(:first-child) { margin-left:15px; }
</style>
`;

export default code;