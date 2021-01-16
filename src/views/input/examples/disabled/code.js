const code =
`<template>
  <div class="example-input-disabled">
    <vui-input placeholder="Enter something..." disabled />
    <vui-input prepend="https://github.com/u/" placeholder="Enter something..." disabled />
    <vui-input prefix="mic" placeholder="Enter something..." disabled />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-input-disabled > .vui-input:not(:first-child) { margin-top:20px; }
</style>
`;

export default code;