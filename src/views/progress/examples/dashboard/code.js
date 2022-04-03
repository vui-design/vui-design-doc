const code =
`<template>
  <div class="example-progress-dashboard">
    <vui-progress type="dashboard" v-bind:percentage="75" />
    <vui-progress type="dashboard" v-bind:percentage="75" status="exception" />
    <vui-progress type="dashboard" v-bind:percentage="100" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-dashboard { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-dashboard .vui-progress + .vui-progress { margin-left:16px; }
</style>
`;

export default code;