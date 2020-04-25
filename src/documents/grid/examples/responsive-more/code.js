const code =
`<template>
  <div class="example-grid-responsive-more">
    <vui-row>
      <vui-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
      <vui-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
      <vui-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
    </vui-row>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-grid-responsive-more .vui-row .vui-col div { height:50px; color:#fff; text-align:center; line-height:50px; }
  .example-grid-responsive-more .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-responsive-more .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;