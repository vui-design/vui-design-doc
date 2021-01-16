const code =
`<template>
  <div class="example-breadcrumb-link">
    <section>
      <h4>A Link</h4>
      <vui-breadcrumb>
        <vui-breadcrumb-item href="/">Home</vui-breadcrumb-item>
        <vui-breadcrumb-item href="/components">Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
      <vui-breadcrumb>
        <vui-breadcrumb-item>
          <a href="/">Home</a>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>
          <a href="/components">Components</a>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
    </section>
    <section>
      <h4>Router Link</h4>
      <vui-breadcrumb>
        <vui-breadcrumb-item to="/">Home</vui-breadcrumb-item>
        <vui-breadcrumb-item to="/components">Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
      <vui-breadcrumb>
        <vui-breadcrumb-item>
          <router-link to="/">Home</router-link>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>
          <router-link to="/components">Components</router-link>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-breadcrumb-link section:not(:last-child) { margin-bottom:20px; }
  .example-breadcrumb-link section h4 {  }
  .example-breadcrumb-link section .vui-breadcrumb { margin-top:10px; }
</style>
`;

export default code;