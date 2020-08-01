const code =
`<template>
  <ul class="example-image-placeholder">
    <li>
      <h4>Default Placeholder</h4>
      <vui-image v-bind:src="url" fit="cover" />
    </li>
    <li>
      <h4>Customized Placeholder</h4>
      <vui-image v-bind:src="url" fit="cover">
        <template slot="placeholder">Loading...</template>
      </vui-image>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        url: "https://zhitu.isux.us/assets/img/imgSample/test-60.jpg"
      };
    }
  };
</script>

<style>
  .example-image-placeholder { display:flex; }
  .example-image-placeholder li { flex:1; width:50%; text-align:center; }
  .example-image-placeholder h4 { margin-bottom:20px; }
  .example-image-placeholder .vui-image { width:300px; height:200px; }
</style>
`;

export default code;