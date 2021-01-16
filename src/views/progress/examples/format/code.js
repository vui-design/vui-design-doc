const code =
`<template>
  <div class="example-progress-format">
    <vui-progress type="circle" :percentage="75" :format="format" />
    <vui-progress type="circle" :percentage="100" :format="format" />
  </div>
</template>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage < 100 ? (percentage + "Days") : "Done";
      }
    }
  };
</script>

<style>
  .example-progress-format > .vui-progress:not(:first-child) { margin-left:15px; }
</style>
`;

export default code;