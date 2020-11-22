const code =
`<template>
  <div class="example-rate-text">
    <vui-rate v-model="value" v-bind:tooltips="tooltips" />
    <p>{{tooltips[value - 1]}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tooltips: ["terrible", "bad", "normal", "good", "wonderful"],
        value: 3
      };
    }
  };
</script>

<style>
  .example-rate-text { display:flex; align-items:center; line-height:1; }
  .example-rate-text p { margin-left:16px; }
</style>
`;

export default code;