const code =
`<template>
  <div class="example-input-number-formatter">
    <vui-input-number v-model="value1" v-bind:min="0" v-bind:formatter="formatter1" />
    <vui-input-number v-model="value2" v-bind:min="50" v-bind:max="100" v-bind:formatter="formatter2" />
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
      formatter2(value) {
        return return value + "%";
      }
    }
  };
</script>
`;

export default code;