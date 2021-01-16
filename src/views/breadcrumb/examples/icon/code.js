const code =
`<template>
  <div class="example-breadcrumb-icon">
    <vui-breadcrumb>
      <vui-breadcrumb-item to="/" icon="home" title="Home" />
      <vui-breadcrumb-item to="/components" icon="stack" title="Components" />
      <vui-breadcrumb-item icon="links" title="Navigation" />
      <vui-breadcrumb-item title="Breadcrumb" />
    </vui-breadcrumb>
    <vui-breadcrumb>
      <vui-breadcrumb-item to="/">
        <vui-icon type="home" />Home
      </vui-breadcrumb-item>
      <vui-breadcrumb-item to="/components">
        <vui-icon type="stack" />Components
      </vui-breadcrumb-item>
      <vui-breadcrumb-item>
        <vui-icon type="links" />Navigation
      </vui-breadcrumb-item>
      <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
    </vui-breadcrumb>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-breadcrumb-icon .vui-breadcrumb + .vui-breadcrumb { margin-top:10px; }
</style>
`;

export default code;