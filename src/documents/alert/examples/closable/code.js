const code =
`<template>
  <div class="example-alert-closable">
    <vui-alert type="warning" message="Warning" closable />
    <vui-alert type="error" message="Error" description="This is an error message about copywriting." closable />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-alert-closable .vui-alert + .vui-alert { margin-top:16px; }
</style>
`;

export default code;