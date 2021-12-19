const code =
`<template>
  <div class="example-link-icon">
    <vui-link icon="edit">Edit</vui-link>
    <vui-link>
      <vui-icon slot="icon" type="dustbin" />Delete
    </vui-link>
    <vui-link>
      More<vui-icon type="chevron-down" />
    </vui-link>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-link-icon .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;