const code =
`<template>
  <div class="example-textarea-autosize">
    <vui-textarea v-model="value1" placeholder="Autosize height based on content lines" autosize />
    <vui-textarea v-model="value2" placeholder="Autosize height with minimum and maximum number of lines" :autosize="{minRows: 4, maxRows: 8}" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: ""
      };
    }
  };
</script>

<style>
  .example-textarea-autosize > .vui-textarea + .vui-textarea { margin-top:20px; }
</style>
`;

export default code;