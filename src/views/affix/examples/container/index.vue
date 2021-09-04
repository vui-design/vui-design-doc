<template>
  <example v-bind:code="code" id="example-affix-container">
    <template slot="demo">
      <div ref="container" class="example-affix-container">
        <div class="example-affix-container-content">
          <vui-affix v-bind:getScrollContainer="getScrollContainer">
            <vui-button type="primary">Fixed at the top of container</vui-button>
          </vui-affix>
        </div>
      </div>
    </template>
    <template slot="title">滚动容器</template>
    <template slot="description">
      <p>使用 <code>getScrollContainer</code> 设置 <code>Affix</code> 需要监听其滚动事件的元素，默认为 <code>window</code> 对象。</p>
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
    },
    methods: {
      getScrollContainer() {
        return this.$refs.container;
      }
    }
  };
</script>

<style>
  .example-affix-container { height:200px; overflow-y:auto; }
  .example-affix-container-content { height:400px; background:transparent url("~src/assets/images/transparent.png") repeat 50% 50%; padding:40px 0; }
</style>