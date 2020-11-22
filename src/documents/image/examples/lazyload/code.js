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
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-001.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-002.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-003.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-004.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-005.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-006.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-007.jpg",
          "https://img.ivsky.com/img/tupian/pre/202002/28/xuejing-008.jpg"
        ]
      };
    }
  };
</script>

<style>
  .example-image-lazyload { height:400px; overflow-y:auto; }
  .example-image-lazyload .vui-image { display:flex; min-height:600px; }
  .example-image-lazyload .vui-image + .vui-image { margin-top:20px; }
</style>
`;

export default code;