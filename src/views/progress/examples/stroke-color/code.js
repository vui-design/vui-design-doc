const code =
`<template>
  <div class="example-progress-stroke-color">
    <vui-progress v-bind:percentage="50" strokeColor="#722ed1" />
    <vui-space block>
      <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeColor="#f8ac59" />
      <vui-progress type="dashboard" v-bind:percentage="100" strokeColor="#1ab394" />
    </vui-space>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-stroke-color .vui-progress-line { margin-bottom:16px; }
</style>
`;

export default code;