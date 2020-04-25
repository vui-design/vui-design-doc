const code =
`<template>
  <div class="example-progress-line-small">
    <vui-progress size="small" :percentage="30" />
    <vui-progress size="small" :percentage="50" status="active" />
    <vui-progress size="small" :percentage="70" status="exception" />
    <vui-progress size="small" :percentage="100" />
    <vui-progress size="small" :percentage="50" :showInfo="false" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-progress-line-small > .vui-progress:not(:first-child) { margin-top:15px; }
</style>
`;

export default code;