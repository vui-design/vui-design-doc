const code =
`<template>
  <div class="example-input-number-formatter">
    <vui-input-number :min="0" :formatter="formatter1" :parser="parser1" v-model="value1" />
    <vui-input-number :min="0" :max="100" :formatter="formatter2" :parser="parser2" v-model="value2" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 1010,
        value2: 60
      };
    },
    watch: {
      value1(value) {
        console.log(value);
      },
      value2(value) {
        console.log(value);
      }
    },
    methods: {
      formatter1(value) {
        return ("$ " + value).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
      },
      parser1(value) {
        return value.replace(/\\$\\s?|(,*)/g, "");
      },
      formatter2(value) {
        return return value + "%";
      },
      parser2(value) {
        return value.replace("%", "");
      }
    }
  };
</script>
`;

export default code;