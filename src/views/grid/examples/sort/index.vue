<template>
  <example v-bind:code="code" id="example-grid-sort">
    <template slot="demo">
      <div class="example-grid-sort">
        <vui-row>
          <vui-col v-bind:span="18" v-bind:push="6"><div>col-18 | push-6</div></vui-col>
          <vui-col v-bind:span="6" v-bind:pull="18"><div>col-6 | pull-18</div></vui-col>
        </vui-row>
      </div>
    </template>
    <template slot="title">栅格排序</template>
    <template slot="description">
      <p>通过使用 <code>push</code> 和 <code>pull</code> 属性可以很容易的改变列的顺序。</p>
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
  .example-grid-sort .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
  .example-grid-sort .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-sort .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>