const code =
`<template>
  <div class="example-alert-type">
    <vui-alert message="Information" />
    <vui-alert type="warning" message="Warning" />
    <vui-alert type="success" message="Success" />
    <vui-alert type="error" message="Error" />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-alert-type .vui-alert + .vui-alert { margin-top:16px; }
</style>
`;

export default code;