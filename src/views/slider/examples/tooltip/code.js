const code =
`<template>
  <div class="example-slider-with-tooltip">
    <vui-slider v-model="value1" v-bind:tooltip="tooltip1" />
    <vui-slider v-model="value2" v-bind:tooltip="tooltip2" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0,
        tooltip1: {
          color: "light",
          formatter: value => value + "%"
        },
        tooltip2: null
      };
    }
  };
</script>

<style>
  .example-slider-with-tooltip .vui-slider + .vui-slider { margin-top:24px; }
</style>
`;

export default code;