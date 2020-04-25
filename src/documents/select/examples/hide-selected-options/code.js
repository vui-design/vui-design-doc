const code =
`<template>
  <vui-select multiple v-model="value" @change="handleChange">
    <vui-option
      v-for="option in options"
      v-if="value.indexOf(option) === -1"
      v-bind:key="option"
      v-bind:value="option"
    >
      {{option}}
    </vui-option>
  </vui-select>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          "New York", "London", "Sydney",
          "Ottawa", "Paris", "Canberra"
        ]
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
`;

export default code;