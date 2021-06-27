const code =
`<template>
  <div class="example-slider-vertical">
    <vui-slider v-model="value1" vertical />
    <vui-slider v-model="value2" vertical range />
    <vui-slider v-model="value3" vertical range v-bind:marks="marks3" v-bind:tooltip="tooltip3" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 30,
        value2: [20, 50],
        value3: [26, 38],
        marks3: {
          0: "0°C",
          26: "26°C",
          37: "37°C",
          100: {
            style: {
              color: "#ff4d4f"
            },
            label: "100°C"
          }
        },
        tooltip3: {
          formatter: value => value + "°C"
        }
      };
    }
  };
</script>

<style>
  .example-slider-vertical { display:flex; justify-content:space-around; align-items:flex-end; }
  .example-slider-vertical .vui-slider { height:240px; }
</style>
`;

export default code;