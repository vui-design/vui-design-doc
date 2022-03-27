const code =
`<template>
  <div class="example-select-big-data">
    <vui-select v-model="value1" searchable style="width: 200px;" placeholder="Please select">
      <vui-option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{option.label}}</vui-option>
    </vui-select>
    <vui-select v-model="value2" multiple searchable placeholder="Please select">
      <vui-option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{option.label}}</vui-option>
    </vui-select>
  </div>
</template>

<script>
  export default {
    data() {
      let options = [];

      for (let i = 0; i < 10000; i++) {
        const index = i + 1;

        options.push({
          value: index,
          label: "Option " + index
        });
      }

      return {
        options: options,
        value1: undefined,
        value2: []
      };
    },
    watch: {
      value1(value) {
        console.log(value);
      },
      value2(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .example-select-searchable .vui-select + .vui-select { margin-top:16px; }
</style>
`;

export default code;