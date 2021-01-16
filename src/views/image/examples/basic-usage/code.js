const code =
`<template>
  <ul class="example-image-basic-usage">
    <li v-for="fit in fits" v-bind:key="fit">
      <h4>{{fit}}</h4>
      <vui-image v-bind:src="url" v-bind:fit="fit" />
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        fits: ["fill", "contain", "cover", "none", "scale-down"],
        url: "https://zhitu.isux.us/assets/img/imgSample/test-60.jpg"
      };
    }
  };
</script>

<style>
  .example-image-basic-usage { display:flex; }
  .example-image-basic-usage li { flex:1; width:20%; text-align:center; }
  .example-image-basic-usage h4 { margin-bottom:20px; }
  .example-image-basic-usage .vui-image { width:100px; height:100px; }
</style>
`;

export default code;