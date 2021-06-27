const code =
`<template>
  <div class="example-slider-basic-usage">
    <section>
      <div>Disabled:</div>
      <vui-switch v-model="disabled" />
    </section>
    <vui-slider v-model="value1" v-bind:disabled="disabled" />
    <vui-slider v-model="value2" range v-bind:disabled="disabled" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false,
        value1: 30,
        value2: [20, 50]
      };
    }
  };
</script>

<style>
  .example-slider-basic-usage section { display:flex; align-items:center; }
  .example-slider-basic-usage section .vui-switch { margin-left:4px; }
  .example-slider-basic-usage .vui-slider { margin-top:24px; }
</style>
`;

export default code;