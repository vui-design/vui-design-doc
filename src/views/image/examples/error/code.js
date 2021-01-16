const code =
`<template>
  <ul class="example-image-error">
    <li>
      <h4>Default Error Tips</h4>
      <vui-image v-bind:src="url" fit="cover" />
    </li>
    <li>
      <h4>Customized Error Tips</h4>
      <vui-image v-bind:src="url" fit="cover">
        <vui-icon slot="error" type="image" style="font-size: 28px;" />
      </vui-image>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        // An image that does not exist.
        url: "https://www.example.com/unknown.jpg"
      };
    }
  };
</script>

<style>
  .example-image-error { display:flex; }
  .example-image-error li { flex:1; width:50%; text-align:center; }
  .example-image-error h4 { margin-bottom:20px; }
  .example-image-error .vui-image { width:300px; height:200px; }
</style>
`;

export default code;