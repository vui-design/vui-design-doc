const code =
`<template>
  <div class="example-grid-gutter">
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="6"><div>col-6</div></vui-col>
      <vui-col v-bind:span="6"><div>col-6</div></vui-col>
      <vui-col v-bind:span="6"><div>col-6</div></vui-col>
      <vui-col v-bind:span="6"><div>col-6</div></vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-grid-gutter .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
  .example-grid-gutter .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-gutter .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;