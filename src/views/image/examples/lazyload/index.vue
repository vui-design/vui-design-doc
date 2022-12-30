<template>
  <example v-bind:code="code" id="example-image-lazyload">
    <template slot="demo">
      <div class="example-image-lazyload">
        <vui-image v-for="url in urls" v-bind:key="url" v-bind:src="url" lazyload />
      </div>
    </template>
    <template slot="title">懒加载</template>
    <template slot="description">
      <p>可以通过 <code>lazyload</code> 开启懒加载功能，当图片滚动到可视范围内才会加载。通过 <code>scrollContainer</code> 来设置滚动容器，若未定义，则为最近的一个 <code>overflow</code> 值为 <code>auto</code> 或 <code>scroll</code> 的父元素。</p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
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
  .example-image-lazyload .vui-image + .vui-image { margin-top:16px; }
</style>