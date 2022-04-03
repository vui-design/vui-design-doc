const code =
`<template>
  <div class="example-progress-circle-small">
    <vui-progress type="circle" size="small" v-bind:percentage="75" />
    <vui-progress type="circle" size="small" v-bind:percentage="75" status="exception" />
    <vui-progress type="circle" size="small" v-bind:percentage="100" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-circle-small { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-circle-small .vui-progress + .vui-progress { margin-left:16px; }
</style>
`;

export default code;