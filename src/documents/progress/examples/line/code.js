const code =
`<template>
  <div class="example-progress-line">
    <vui-progress :percentage="30" />
    <vui-progress :percentage="50" status="active" />
    <vui-progress :percentage="70" status="exception" />
    <vui-progress :percentage="100" />
    <vui-progress :percentage="50" :showInfo="false" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-line > .vui-progress:not(:first-child) { margin-top:15px; }
</style>
`;

export default code;