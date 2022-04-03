const code =
`<template>
  <div class="example-progress-line">
    <vui-progress v-bind:percentage="30" />
    <vui-progress v-bind:percentage="50" status="active" />
    <vui-progress v-bind:percentage="70" status="exception" />
    <vui-progress v-bind:percentage="100" />
    <vui-progress v-bind:percentage="50" v-bind:showInfo="false" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-line .vui-progress + .vui-progress { margin-top:16px; }
</style>
`;

export default code;