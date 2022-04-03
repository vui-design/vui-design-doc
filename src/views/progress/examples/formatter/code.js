const code =
`<template>
  <div class="example-progress-formatter">
    <vui-progress type="circle" v-bind:percentage="75" v-bind:formatter="formatter" />
    <vui-progress type="circle" v-bind:percentage="100" v-bind:formatter="formatter" />
  </div>
</template>

<script>
  export default {
    methods: {
      formatter(percentage) {
        return percentage < 100 ? (percentage + "Days") : "Done";
      }
    }
  };
</script>

<style>
  .example-progress-formatter { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-formatter .vui-progress + .vui-progress { margin-left:16px; }
</style>
`;

export default code;