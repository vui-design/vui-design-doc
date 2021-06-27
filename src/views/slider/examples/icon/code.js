const code =
`<template>
  <div class="example-slider-icon">
    <vui-icon type="emotion-unhappy" v-bind:style="prevStyle" />
    <vui-slider v-model="value" v-bind:min="min" v-bind:max="max" />
    <vui-icon type="emotion-happy" v-bind:style="nextStyle"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        min: 0,
        max: 20,
        value: 0
      };
    },
    computed: {
      prevStyle() {
        const { max, min, value } = this;
        const middle = (max - min) / 2;

        return {
          color: value <= middle ? "" : "#bfbfbf"
        };
      },
      nextStyle() {
        const { max, min, value } = this;
        const middle = (max - min) / 2;

        return {
          color: value >= middle ? "" : "#bfbfbf"
        };
      }
    }
  };
</script>

<style>
  .example-slider-icon { display:flex; align-items:center; }
  .example-slider-icon .vui-slider { flex:1; margin:0 16px; }
</style>
`;

export default code;