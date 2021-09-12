<template>
  <example v-bind:code="code" id="example-grid-basic-usage">
    <template slot="demo">
      <div class="example-grid-basic-usage">
        <vui-row>
          <vui-col v-bind:span="12"><div>col-12</div></vui-col>
          <vui-col v-bind:span="12"><div>col-12</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        </vui-row>
      </div>
    </template>
    <template slot="title">基本用法</template>
    <template slot="description">
      <p>使用单一的一组 <code>row</code> 和 <code>col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列 <code>col</code> 必须放在 <code>row</code> 内。</p>
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
  .example-grid-basic-usage .vui-row:not(:last-child) { margin-bottom:15px; }
  .example-grid-basic-usage .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
  .example-grid-basic-usage .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-basic-usage .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>