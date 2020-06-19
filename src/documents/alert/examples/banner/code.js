const code =
`<template>
  <div class="example-alert-banner">
    <vui-alert type="warning" showIcon message="Warning" banner />
    <vui-alert type="warning" showIcon message="Detailed description and advice about warning copywriting." banner closable />
    <vui-alert type="success" message="Success without icon" banner />
    <vui-alert type="error" showIcon message="This is an error message about copywriting." banner />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-alert-banner .vui-alert + .vui-alert { margin-top:16px; }
</style>
`;

export default code;