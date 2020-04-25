const code =
`<template>
  <div class="example-progress-linecap">
    <vui-progress :percentage="50" linecap="square" />
    <vui-progress type="circle" :percentage="75" status="exception" linecap="square" />
    <vui-progress type="dashboard" :percentage="100" linecap="square" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-linecap > .vui-progress-line { margin-bottom:15px; }
  .example-progress-linecap > .vui-progress-circle { margin-right:15px; }
  .example-progress-linecap > .vui-progress-dashboard {  }
</style>
`;

export default code;