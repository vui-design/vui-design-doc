const code =
`<template>
  <div class="example-button-link">
    <section>
      <h4>A Link</h4>
      <vui-button type="primary" href="https://cn.vuejs.org/">Vue.js</vui-button>
      <vui-button type="primary" href="https://github.com/" target="_blank">Github</vui-button>
      <vui-button href="/">Home</vui-button>
      <vui-button href="/guide" target="_blank">Guide</vui-button>
      <vui-button href="/components">Components</vui-button>
    </section>
    <section>
      <h4>Router Link</h4>
      <vui-button to="/">Home</vui-button>
      <vui-button to="/guide" target="_blank">Guide</vui-button>
      <vui-button to="/components">Components</vui-button>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-button-link > section:not(:last-child) { margin-bottom:20px; }
  .example-button-link > section > h4 { margin-bottom:10px; }
  .example-button-link > section > .vui-button { margin-right:10px; }
</style>
`;

export default code;