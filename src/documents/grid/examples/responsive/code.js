const code =
`<template>
  <div class="example-grid-responsive">
    <vui-row>
      <vui-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></vui-col>
      <vui-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4"><div>Col</div></vui-col>
      <vui-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div>Col</div></vui-col>
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