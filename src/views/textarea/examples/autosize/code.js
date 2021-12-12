const code =
`<template>
  <div class="example-textarea-autosize">
    <vui-textarea
      v-model="value1"
      autosize
      placeholder="Autosize height based on content lines"
    />
    <vui-textarea
      v-model="value2"
      v-bind:autosize="autosize"
      placeholder="Autosize height with minimum and maximum number of lines"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        autosize: {
          minRows: 2,
          maxRows: 8
        }
      };
    }
  };
</script>

<style>
  .example-textarea-autosize > .vui-textarea + .vui-textarea { margin-top:24px; }
</style>
`;

export default code;