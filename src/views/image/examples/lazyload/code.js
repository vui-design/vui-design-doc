const code =
`<template>
  <div class="example-image-lazyload">
    <vui-image v-for="url in urls" v-bind:key="url" v-bind:src="url" lazyload />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        urls: [
          "https://file.iviewui.com/images/image-demo-1.jpg",
          "https://file.iviewui.com/images/image-demo-2.jpg",
          "https://file.iviewui.com/images/image-demo-3.jpg",
          "https://file.iviewui.com/images/image-demo-4.jpg",
          "https://file.iviewui.com/images/image-demo-5.jpg",
          "https://file.iviewui.com/images/image-demo-6.jpg",
          "https://file.iviewui.com/images/image-demo-7.jpg",
          "https://file.iviewui.com/images/image-demo-8.jpg"
        ]
      };
    }
  };
</script>

<style>
  .example-image-lazyload { height:400px; overflow-y:auto; }
  .example-image-lazyload .vui-image { display:flex; min-height:200px; }
  .example-image-lazyload .vui-image + .vui-image { margin-top:20px; }
</style>
`;

export default code;