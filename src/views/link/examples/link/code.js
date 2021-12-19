const code =
`<template>
  <div class="example-link-link">
    <section>
      <h4>A Link</h4>
      <vui-link type="primary" href="https://cn.vuejs.org/">Vue.js</vui-link>
      <vui-link type="primary" href="https://github.com/" target="_blank">Github</vui-link>
      <vui-link href="/">Home</vui-link>
      <vui-link href="/guide" target="_blank">Guide</vui-link>
      <vui-link href="/components">Components</vui-link>
    </section>
    <section>
      <h4>Router Link</h4>
      <vui-link to="/">Home</vui-link>
      <vui-link to="/guide" target="_blank">Guide</vui-link>
      <vui-link to="/components">Components</vui-link>
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-link-link > section + section { margin-top:16px; }
  .example-link-link > section > h4 { color:#262626; }
  .example-link-link > section > .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;