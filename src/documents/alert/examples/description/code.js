const code =
`<template>
  <div class="example-alert-description">
    <vui-alert message="Information">
      <p slot="description">Additional description and information about copywriting.</p>
    </vui-alert>
    <vui-alert type="warning" message="Warning" description="Detailed description and advice about successful copywriting." />
    <vui-alert type="success" message="Success" description="This is a warning notice about copywriting." />
    <vui-alert type="error" message="Error" description="This is an error message about copywriting." />
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-alert-description .vui-alert + .vui-alert { margin-top:16px; }
</style>
`;

export default code;