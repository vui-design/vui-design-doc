const code =
`<template>
  <vui-select backfillOptionProp="label" v-model="value" style="width: 200px;">
    <vui-option label="New York" value="new york">
      New York<span style="float: right; color: #bfbfbf;">America</span>
    </vui-option>
    <vui-option label="London" value="london">
      London<span style="float: right; color: #bfbfbf;">U.K.</span>
    </vui-option>
    <vui-option label="Sydney" value="sydney">
      Sydney<span style="float: right; color: #bfbfbf;">Australian</span>
    </vui-option>
  </vui-select>
</template>

<script>
  export default {
    data() {
      return {
        value: undefined
      };
    },
    watch: {
      value(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;