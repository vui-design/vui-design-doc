const code =
`<template>
  <div class="example-rate-character">
    <section>
      <vui-rate allowHalf>
        <vui-icon slot="character" type="heart" />
      </vui-rate>
    </section>
    <section>
      <vui-rate allowHalf character="A" style="font-size: 28px;" />
    </section>
    <section>
      <vui-rate allowHalf character="好" />
    </section>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .example-rate-character section { display:flex; align-items:center; line-height:1; }
  .example-rate-character section + section { margin-top:16px; }
</style>
`;

export default code;