<template>
  <example v-bind:code="code" id="example-backtop-custom">
    <template slot="demo">
      <div>
        Scroll down to see the bottom-right blue button.
        <vui-backtop v-bind:bottom="100">
          <div class="btn-backtop">TOP</div>
        </vui-backtop>
      </div>
    </template>
    <template slot="title">自定义样式</template>
    <template slot="description">
      <p>可以自定义回到顶部按钮的样式。</p>
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
        code
      };
    }
  };
</script>

<style>
  .btn-backtop { width:40px; height:40px; border-radius:2px; background-color:#2d8cf0; color:#fff; font-size:14px; text-align:center; line-height:40px; }
</style>