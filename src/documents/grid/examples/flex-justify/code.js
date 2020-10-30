const code =
`<template>
  <div class="example-grid-flex-justify">
    <vui-row type="flex">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-row type="flex" justify="center">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-row type="flex" justify="end">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-row type="flex" justify="space-between">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-row type="flex" justify="space-around">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-grid-flex-justify .vui-row-flex { background-color:#ececec; }
  .example-grid-flex-justify .vui-row-flex:not(:last-child) { margin-bottom:15px; }
  .example-grid-flex-justify .vui-row-flex .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
  .example-grid-flex-justify .vui-row-flex .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-flex-justify .vui-row-flex .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;