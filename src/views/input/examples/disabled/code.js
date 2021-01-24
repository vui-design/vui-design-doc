const code =
`<template>
  <div class="example-input-disabled">
    <vui-input disabled placeholder="Enter something..." />
    <vui-input disabled prepend="https://github.com/u/" placeholder="Enter something..." />
    <vui-input disabled prefix="mic" placeholder="Enter something..." />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-input-disabled .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;