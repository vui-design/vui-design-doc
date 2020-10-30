const code =
`<template>
  <div class="example-grid-responsive">
    <vui-row>
      <vui-col v-bind:xs="2" v-bind:sm="4" v-bind:md="6" v-bind:lg="8" v-bind:xl="10"><div>Col</div></vui-col>
      <vui-col v-bind:xs="20" v-bind:sm="16" v-bind:md="12" v-bind:lg="8" v-bind:xl="4"><div>Col</div></vui-col>
      <vui-col v-bind:xs="2" v-bind:sm="4" v-bind:md="6" v-bind:lg="8" v-bind:xl="10"><div>Col</div></vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-grid-responsive .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
  .example-grid-responsive .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-responsive .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;