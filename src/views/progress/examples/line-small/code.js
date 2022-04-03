const code =
`<template>
  <div class="example-progress-line-small">
    <vui-progress size="small" v-bind:percentage="30" />
    <vui-progress size="small" v-bind:percentage="50" status="active" />
    <vui-progress size="small" v-bind:percentage="70" status="exception" />
    <vui-progress size="small" v-bind:percentage="100" />
    <vui-progress size="small" v-bind:percentage="50" v-bind:showInfo="false" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-line-small { width: 240px; }
  .example-progress-line-small .vui-progress + .vui-progress { margin-top:16px; }
</style>
`;

export default code;