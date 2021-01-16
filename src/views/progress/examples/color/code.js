const code =
`<template>
  <div class="example-progress-color">
    <vui-progress :percentage="50" color="#722ed1" />
    <vui-progress type="circle" :percentage="75" status="exception" color="#f8ac59" />
    <vui-progress type="dashboard" :percentage="100" color="#1ab394" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-color > .vui-progress-line { margin-bottom:15px; }
  .example-progress-color > .vui-progress-circle { margin-right:15px; }
  .example-progress-color > .vui-progress-dashboard {  }
</style>
`;

export default code;