const code =
`<template>
  <div class="example-progress-stroke-linecap">
    <vui-progress v-bind:percentage="50" strokeLinecap="square" />
    <vui-space block>
      <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeLinecap="square" />
      <vui-progress type="dashboard" v-bind:percentage="100" strokeLinecap="square" />
    </vui-space>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-stroke-linecap .vui-progress-line { margin-bottom:16px; }
</style>
`;

export default code;