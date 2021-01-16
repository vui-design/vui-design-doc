const code =
`<template>
  <div class="example-grid-flex-align">
    <vui-row type="flex" justify="center" align="top">
      <vui-col v-bind:span="4"><div style="height: 100px; line-height: 100px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 60px; line-height: 60px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 140px; line-height: 140px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 80px; line-height: 80px;">col-4</div></vui-col>
    </vui-row>
    <vui-row type="flex" justify="center" align="middle">
      <vui-col v-bind:span="4"><div style="height: 100px; line-height: 100px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 60px; line-height: 60px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 140px; line-height: 140px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 80px; line-height: 80px;">col-4</div></vui-col>
    </vui-row>
    <vui-row type="flex" justify="center" align="bottom">
      <vui-col v-bind:span="4"><div style="height: 100px; line-height: 100px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 60px; line-height: 60px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 140px; line-height: 140px;">col-4</div></vui-col>
      <vui-col v-bind:span="4"><div style="height: 80px; line-height: 80px;">col-4</div></vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-grid-flex-align .vui-row-flex { background-color:#ececec; }
  .example-grid-flex-align .vui-row-flex:not(:last-child) { margin-bottom:15px; }
  .example-grid-flex-align .vui-row-flex .vui-col div { height:50px; color:#fff; text-align:center; }
  .example-grid-flex-align .vui-row-flex .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-flex-align .vui-row-flex .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;