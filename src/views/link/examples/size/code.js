const code =
`<template>
  <div class="example-link-size">
    <section>
      <vui-link size="small">Default</vui-link>
      <vui-link type="primary" size="small">Primary</vui-link>
      <vui-link icon="edit" size="small">Edit</vui-link>
      <vui-link type="danger" icon="dustbin" size="small">Delete</vui-link>
    </section>
    <section>
      <vui-link>Default</vui-link>
      <vui-link type="primary">Primary</vui-link>
      <vui-link icon="edit">Edit</vui-link>
      <vui-link type="danger" icon="dustbin">Delete</vui-link>
    </section>
    <section>
      <vui-link size="large">Default</vui-link>
      <vui-link type="primary" size="large">Primary</vui-link>
      <vui-link icon="edit" size="large">Edit</vui-link>
      <vui-link type="danger" icon="dustbin" size="large">Delete</vui-link>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-link-size > section + section { margin-top:8px; }
  .example-link-size > section > .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;